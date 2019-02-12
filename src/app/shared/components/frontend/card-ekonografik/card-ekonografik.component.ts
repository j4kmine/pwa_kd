import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-ekonografik',
  templateUrl: './card-ekonografik.component.html',
  styleUrls: ['./card-ekonografik.component.css']
})
export class CardEkonografikComponent implements OnInit {
  @Input() image:string='https://cdn1.katadata.co.id/media/images/temp/2019/02/12/2019_02_12-10_47_55_3a4f243855fb98d083dcb4c4669c82bf.jpg'
  constructor() { }

  ngOnInit() {
  }

}