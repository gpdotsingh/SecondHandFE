import { Component, AfterViewInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Page, CarDetails } from '../model/page';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardetailsComponent } from '../dialog-cardetails/dialog-cardetails.component';
import { ShoppingKartComponent } from '../shopping-kart/shopping-kart.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements AfterViewInit {
  shoppingKart = new Map();
  dataSource!: Page;
  displayedColumns: string[] = ['id','make','model','yearModel','price','addToCart'];
  pageEvent: PageEvent = new PageEvent;

  constructor(private service:VehiclesService,private dialog:MatDialog) { 
  }

  ngAfterViewInit() {
    this.service.getPageList(0,5).
      subscribe((response) =>{
          this.dataSource = response;
        });

  }

  onPageinateChange(event: PageEvent)
  {
      let page= event.pageIndex;
      let size= event.pageSize;
      this.service.getPageList(page,size).
      subscribe((response) =>{
          this.dataSource = response;
        });
  }

  openDialog(rowId:number) {
    const dialogRef = this.dialog.open(DialogCardetailsComponent,{
      data: {
        carDetailForDialog: this.service.getCardetails(rowId,this.dataSource)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addToCart(rowId:number) {
    if(null==this.shoppingKart.get(rowId))
      {         
        this.shoppingKart.set(rowId,this.service.getCardetails(rowId,this.dataSource));
        alert("Car is added in to kart");
      }
    else{
          alert("This model is already in Kart");
      }    
  }

  emptyKart()
  {
    this.shoppingKart= new Map();
  }
  showKart(){
  const dialogRef = this.dialog.open(ShoppingKartComponent,{
      data: {
        carDetailForDialog: this.shoppingKart
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  }
