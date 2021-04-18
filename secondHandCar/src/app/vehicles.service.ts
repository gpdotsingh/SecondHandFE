import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page, CarDetails } from './model/page';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  idMatched: boolean = false;  
  carDetails!: CarDetails ;  
  constructor(private http:HttpClient) { }
  public getPageList(page:number,size:number){
    return this.http.get<Page>("http://localhost:8080/getCarList?pageNo="+page+"&pageSize="+size)
  }

  public getCardetails(id:number, page:Page): CarDetails
  {

    page.content.forEach( (value) => {
        if(id==value.id)
        {
          this.carDetails=value; 
          this.idMatched=true;         
        }
    })
    if(!this.idMatched)
    {
      alert("No id found please retry");
    }
    return this.carDetails;
  }
}
