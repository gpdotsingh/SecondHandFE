import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-kart',
  templateUrl: './shopping-kart.component.html',
  styleUrls: ['./shopping-kart.component.css']
})
export class ShoppingKartComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public shoppingData:any) { }

  ngOnInit(): void {
  }

}
