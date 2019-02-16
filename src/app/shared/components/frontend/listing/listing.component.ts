import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() dataListing:any[]=[
    {
      'title':'Petronusa Gugat SKK Migas soal Status Blok Selat Panjang',
      'dateSign':'Hari ini, 8.20 WIB',
      'imageDisplay':'https://source.unsplash.com/300x128/?economic',
      'topic':'Digital'
    },
    {
      'title':'Petronusa Gugat SKK Migas soal Status Blok Selat Panjang',
      'dateSign':'Hari ini, 8.20 WIB',
      'imageDisplay':'https://source.unsplash.com/300x128/?economic',
      'topic':'Digital'
    },
    {
      'title':'Petronusa Gugat SKK Migas soal Status Blok Selat Panjang',
      'dateSign':'Hari ini, 8.20 WIB',
      'imageDisplay':'https://source.unsplash.com/300x128/?economic',
      'topic':'Digital'
    },
    {
      'title':'Petronusa Gugat SKK Migas soal Status Blok Selat Panjang',
      'dateSign':'Hari ini, 8.20 WIB',
      'imageDisplay':'https://source.unsplash.com/300x128/?economic',
      'topic':'Digital'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}