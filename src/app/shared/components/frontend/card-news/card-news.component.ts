import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {
  @Input() title:string='Petronusa Gugat SKK Migas soal Status Blok Selat Panjang'
  @Input() dateSign:string='Hari ini, 8.20 WIB'
  @Input() imageDisplay:string='https://source.unsplash.com/300x128/?economic'
  @Input() topic:string='Digital'
  constructor() { }

  ngOnInit() {
  }

}