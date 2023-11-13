import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Shared/data';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent{
  @Input() comments!:Comment;

// comments: any[] = [];
  //nuevoComentario: string = '';
  //agregarComentario(nuevoComentario: string) {
    //const fecha = new Date();
    //this.comments.push({ comentario: nuevoComentario, fecha: fecha });
    //this.actualizarLocalStorage();


    
    
  }

  //editarComentario(index: number, nuevoComentario: string) {
    //this.comments[index].comentario = nuevoComentario;
    //this.actualizarLocalStorage();
  //}

  //eliminarComentario(index: number) {
    //this.comments.splice(index, 1);
    //this.actualizarLocalStorage();
  //}

  //private actualizarLocalStorage() {
    //localStorage.setItem('comentarios', JSON.stringify(this.comments));
  //}

  //ngOnInit() {
    //const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios') || '[]');
    //this.comments = comentariosGuardados;
  //}
//}