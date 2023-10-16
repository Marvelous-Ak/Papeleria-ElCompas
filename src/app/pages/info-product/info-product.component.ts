import { Component, OnInit , Input} from '@angular/core';
import { SoltProductService } from 'src/app/Services/solt-product.service';
// import { InfoProduct } from 'src/app/Shared/data';
import { Producto } from 'src/app/Shared/data';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit{
  /*imagen: String = 'https://tonypapelerias.vtexassets.com/arquivos/ids/211614-1200-auto?v=637733207611000000&width=1200&height=auto&aspect=true';
  name: String = "Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Ecológico Scribe";
  marca: String = "Scribe";
  precio: number = 92.65;
  oferta: number = 125;
  stock: number = 15;
  stockD: String = 'Cantidad: '+this.stock.toString()+' piezas disponible';
  promo: boolean = false;
  description: String = 'Papel Bond Tamaño Carta Blanco 37 kg C/500 hojas Ecológico Scribe 1000003542';*/
  // public infoProduct: InfoProduct[] = [];
  //@Input() entrada: any;
  public infoProduct: Producto[] = [];
  stockD = '';
  pos: number = 1;


  constructor(private apiService: SoltProductService){
    
  }
  onClick(id:String){

  }
  ngOnInit(): void {

      //this.cargarData();
      this.infoProduct = [{
        image: "https://tonypapelerias.vtexassets.com/arquivos/ids/211614-1200-auto?v=637733207611000000&width=1200&height=auto&aspect=true",
        name: "Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Ecológico Scribe",
        marca: "Scribe",
        precio: "92.65",
        precioAnt: "125",
        stock: 15,
        promo: true,
        descripcion: "Papel Bond Tamaño Carta Blanco 37 kg C/500 hojas Ecológico Scribe 1000003542",
        _id: "651c70d8b987ad03e876e08b",
        category: []
      }, {
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Escolares/Escolares-6.png?raw=true",
        name: "Compás",
        marca: "MAPED",
        precio: "40.00",
        precioAnt: "",
        stock: 18,
        promo: false,
        descripcion: "Compás MAPPED STUDY POP  color Azul con puntas de grafito para sustitución",
        _id: "651c74e1b987ad03e876e09b",
        category: []
      },
      {
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Lapices/Lapiz-1.png?raw=true",
        name: "Lápiz de grafito",
        marca: "Mirado",
        precio: "8.00",
        precioAnt: "",
        stock: 28,
        promo: false,
        descripcion: "Lápiz de grafito triangular Mirado  No. 2 1/2 HB",
        _id: "651c75b4b987ad03e876e09e",
        category: []
      }
    ]
      this.stockD = "Cantidad: "+this.infoProduct[0].stock+" piezas disponibles";
  }

  public cargarData(){
    this.apiService.getData('https://crudcrud.com/api/ed6bc2267d0e45568d14762be8a3acda//productos').subscribe((respuesta: any) =>{
      this.infoProduct = respuesta;
    })
  }
  /*Swal.fire({
    icon: 'error',
    title: 'Inicie Sesion',
    text: 'Inicie S-esion o Crea una cuenta para continuar',
  })*/
}
