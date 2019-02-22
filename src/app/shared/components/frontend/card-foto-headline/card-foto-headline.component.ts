import { Component, OnInit,Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Main} from '../../../module/main'
@Component({
  selector: 'app-card-fotoheadline',
  templateUrl: './card-foto-headline.component.html',
  styleUrls: ['./card-foto-headline.component.css']
})
export class CardFotoheadlineComponent implements OnInit {
  @Input() dataListing:any[]=[
    {
      'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
      ,'title':'Mengejar Pesawat dengan Kereta Bandara'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
       ,'title':'Mengejar Pesawat dengan Kereta Bandara'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
       ,'title':'Mengejar Pesawat dengan Kereta Bandara'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
       ,'title':'Mengejar Pesawat dengan Kereta Bandara'
    }
  ]
  constructor(private sanitizer:DomSanitizer,private main:Main) { }
  ngAfterViewInit(){
    this.main.loadVideoSlider()
  }
  ngOnInit() {
    
  }



}