import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;


  }

  constructor(private gifsService:GifsService) { }

  buscar(term:string){
    this.gifsService.buscarGifs(term)
    console.log(term)
  }
  borrar(){
   localStorage.clear()
   location.reload()
  }
}
