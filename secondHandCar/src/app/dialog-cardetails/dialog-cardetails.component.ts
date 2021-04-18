import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cardetails',
  templateUrl: './dialog-cardetails.component.html',
  styleUrls: ['./dialog-cardetails.component.css']
})
export class DialogCardetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }
  ngOnInit(): void {
  }
}
