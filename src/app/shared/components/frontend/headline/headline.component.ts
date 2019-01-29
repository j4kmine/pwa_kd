import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  @Input() title:string='Petronusa Gugat SKK Migas soal Status Blok Selat Panjang'
  @Input() dateSign:string='Hari ini, 8.20 WIB'
  @Input() caption:string='Arief Kamaludin/Katadata'
  @Input() topic:string='Energi'
  @Input() summary:string='Industri dalam negeri akan tumbuh. Kemudian industri-industri tersebut bisa memberikan pendapatan lagi bagi negara melalui pajak'
  @Input() imageDisplay:string='https://source.unsplash.com/300x128/?economic'
  constructor() { }

  ngOnInit() {
  }

}