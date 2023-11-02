import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { Product, ProductPost } from 'src/app/Shared/data';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
    public archivo: any = [];
    public preview: String = ""
    public idP!: number;
    public status: boolean= false; /// false: Add   true:  Edit
    public producto: Product  ={
      "brand": "", "name": "", "promo": false, "description": "", "image":"", "id": 0, "stock":0, "price": 0, "pricePromo": 0, "created_at": new Date, "updated_at": new Date
    };
    public newProducto: ProductPost ={
      "brand": "", "name": "", "promo": false, "description": "", "categories":[], "image":""
    };
    public category: any =[];
    public idArray: number[] = [];
    //public nombre: String = "";

    constructor(private LoadScript: LoadServiceService, private santizer: DomSanitizer, private router: Router, 
      private route: ActivatedRoute, private CatalogoService: CatalogosService, private imageCompress: NgxImageCompressService) {
      LoadScript.Carga(["ValidacionProductAdd"]);
    }

     cambi(){ ////Muestra lo contiene actPromo si cuando se inicia, el producto tiene promoción.
    const actPromo = document.querySelector('.actPromo') as HTMLElement ;
    if (this.newProducto.promo) {
        actPromo.style.display = 'block';
       }else {
        actPromo.style.display = 'none';
      }
    }

    ngOnInit(): void{
      this.route.url.subscribe(segments => {
        // Verifica la URL para determinar desde qué ruta se redirigió
        if (segments[0].path === 'Product-Add') { 
          this.status = false;
        } else if (segments[0].path === 'Product-Edit'){
          this.route.params.subscribe(params => {
            this.idP = +params['numero']; // El "+" convierte el parámetro en un número
            this.status = true;
            this.cargarInfo();
          });
        } 
      });
    }

    //////solicitar valores del producto seleccionado
    cargarInfo(){
      this.CatalogoService.get('products/'+this.idP)
    .subscribe((respuesta: any) => {
      this.producto = respuesta;
      this.newProducto.image = respuesta.image;
      this.newProducto.promo = respuesta.promo;
      this.cambi();
      //console.log(respuesta);
      
    })

     this.CatalogoService.get('categories/'+this.idP)
     .subscribe((respuesta: any)=>{
      this.category = respuesta;
      for (const item of this.category) {
        this.idArray.push(item.id);
        this.newProducto.categories = this.idArray;
       
      }
     })
    }
    ////
    ///// POST y PUT: Crear y editar producto

    newOrEditeProduct(){
      
      if (this.status) {
        this.newProducto.name = this.producto.name;
        this.newProducto.brand = this.producto.brand;
        this.newProducto.stock = this.producto.stock;
        this.newProducto.description = this.producto.description;
        this.newProducto.price = this.producto.price;
        if (this.producto.promo) {
          this.newProducto.pricePromo = this.producto.pricePromo;
        }
        if (!this.newProducto.promo) {
          this.newProducto.pricePromo = 0;
        }
        console.log(this.newProducto);
        this.CatalogoService.edit(this.newProducto, this.idP)
          .subscribe((resp: any) => {
            // Redirige a Product-List después de editar
            this.router.navigate(['admin/Product-List']);
            console.log("Exito!!!");
          });
      }else {
        if (!this.newProducto.promo) {
          this.newProducto.pricePromo = 0.00;
        }
        this.CatalogoService.create(this.newProducto)
          .subscribe((resp: any) => {
        //////Mensaje de creado con éxito
        if (resp.status === 0) {
          this.router.navigate(['admin/Product-List']);
        }
      });
      }
    }

    toggleCategory(categoryId: number) {
      if (this.newProducto.categories.includes(categoryId)) {
        // Si el categoryId ya existe en idArray, lo eliminamos
        this.newProducto.categories = this.newProducto.categories.filter(id => id !== categoryId);
      } else {
        // Si el categoryId no existe en idArray, lo agregamos
        this.newProducto.categories.push(categoryId);
      }
        
    }
    
////////////////////////////////////////////////
    capFile(event: any){
      const fileCap = event.target.files[0];
      const targetSizeInBytes = 614400;
      this.checkSize(fileCap, targetSizeInBytes); /// Mandamos el archivo (imagen) a comprimirlo....
      this.extraerBase64(fileCap).then((image: any) => {
        this.preview = image.base;
      })
      //this.archivo.push(fileCap);
      /*console.log(event.target.files[0].name);
      this.nombre = event.targ.files[0].name;*/
    }

    extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
        try{
          //const unsafeImg = window.URL.createObjectURL($event);
          //const image = this.santizer.bypassSecurityTrustUrl(unsafeImg);
          const reader = new FileReader();
          reader.readAsDataURL($event);
          reader.onload = () => {
            resolve({
              base: reader.result
            });
          };
          reader.onerror = error => {
            resolve({
                base: null
            });
          };
          return reader;
        } catch(e){
            return null;
        }
    })

    ///Cancelar acción
    pageListProduc() {
      this.router.navigate(['admin/Product-List']);
    }

    /// function compresed image
    checkSize(file: File, targetSizeInBytes: number) { ///checamos el tamaño de la imágen
      console.log(file);
      if (file.size > targetSizeInBytes) {
        this.compressedImage(file);  /// si es más que 600x600 lo comprimimos
      } else {
        this.extraerBase64(file).then((image: any) => {
          this.newProducto.image = image.base; // sino simplemente lo codificamos en base 64
        })
      }
    }
    compressedImage(file: File){ /// Comprimimos la imágen
      const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result as string;
      this.imageCompress.compressFile(base64Image, -1, 600, 600).then((compressedImage) => { //dimensiones de salida
        this.newProducto.image= compressedImage;
        console.log(compressedImage)
      });
    };

    reader.readAsDataURL(file);
    }
    
}
