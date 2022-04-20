import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Courtesy } from '../model/courtesy';

@Injectable({
  providedIn: 'root'
})
export class CourtesyService {

  //private cort: Courtesy[] = [{name: "Promo 1"},{name: "Promo 2"},{name: "Promo 3"},{name: "Promo 4"},{name: "Promo 5"},{name: "Promo 6"}]
  private readonly API = 'https://625c031350128c57020a4705.mockapi.io/api/v1'
  
  constructor(private http: HttpClient){
  }

  getCourtesy(){
    //return this.cort;
    return this.http.get<Courtesy[]>(this.API+'/category').pipe(take(1));
  }

  deleteCort(){

  }

  updateCort(){

  }

}
