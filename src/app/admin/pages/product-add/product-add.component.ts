import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
    public archivo: any = [];
    public preview: String = "";

    constructor(private LoadScript:LoadServiceService, private santizer: DomSanitizer){
      LoadScript.Carga(["ValidacionProductAdd"]);
    }

    ngOnInit(): void{
      
    }

    capFile(event: any){
      const fileCap = event.target.files[0];
      this.extraerBase64(fileCap).then((image: any) => {
        this.preview = image.base;
        console.log(image);
      })
      //this.archivo.push(fileCap);
      //console.log(event.target.files);
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
      
}
