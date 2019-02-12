import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-videoheadline',
  templateUrl: './card-videoheadline.component.html',
  styleUrls: ['./card-videoheadline.component.css']
})
export class CardVideoheadlineComponent implements OnInit {
  @Input() dataListing:any[]=[
    {
        'image':"https://cdn1.katadata.co.id/media/images/thumb/2019/01/30/2019_01_30-10_44_54_307467eb0c64468d245073f263139016_620x413_thumb.jpg",
    },
    {
        'image':"https://cdn1.katadata.co.id/media/images/thumb/2019/02/12/2019_02_12-13_30_58_31d06d9240002fc8713c2abe133b52ff_620x413_thumb.jpg",
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}