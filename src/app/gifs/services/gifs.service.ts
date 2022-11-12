import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey:string = 'shSEQ43DW06jhRn3pZbLouT5iLmsUGdw'
  private _servicioUrl:string = 'https://api.giphy.com/v1/gifs'

  private _historial:string[] = [];


  public resultados:Gif[]= [];
  
  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){
  

    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    };
    if(localStorage.getItem('resultado')){
      this.resultados=JSON.parse(localStorage.getItem('resultado')!) || [];
    }

  }
  
  buscarGifs(query:string){
    query=query.trim().toLocaleLowerCase();


    if( !this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10)  

      
      localStorage.setItem('historial',JSON.stringify(this._historial))
    };

    const params = new HttpParams()
                      .set('api_key',this._apiKey)
                      .set('limit','100')
                      .set('q',query);

    console.log(params)

    this.http.get<SearchGIFResponse>(`${ this._servicioUrl}/search`,{params})
    .subscribe((resp) =>{
      console.log(resp.data)
      this.resultados= resp.data;
      localStorage.setItem('resultado',JSON.stringify(this.resultados))
          


        });


  }

}
