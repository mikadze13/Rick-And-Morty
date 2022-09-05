import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickproxyService {

  constructor(private http: HttpClient) { }
  baseUrl:string='https://rickandmortyapi.com/api'
  getAllCharacters() {
    return this.http.get(this.baseUrl+'/character')
      .pipe(map((response: any) => {
        return response.results
      }))
  } 
  getAllCharactersAlterEgos(name:string,status:string){
    var apiUrl=`${this.baseUrl}/character?name=${name}&status=${status}`
    return this.http.get(apiUrl).pipe(map((response:any)=>{
      return response.results
    }))
  }
  getAllEpisodes(){
    var episodesUrl=`${this.baseUrl}/episode/`
    return this.http.get(episodesUrl).pipe(map((Response:any)=>{
      return Response.results
    }))
  }
}
