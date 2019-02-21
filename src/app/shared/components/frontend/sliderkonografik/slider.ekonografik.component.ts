import { Component, OnInit,Input } from '@angular/core';
import * as $ from "jquery";
import {Main} from '../../../module/main'

@Component({
  selector: 'app-sliderekonografik',
  templateUrl: './slider.ekonografik.component.html',
  styleUrls: ['./slider.ekonografik.component.css']
})
export class Sliderekonografik implements OnInit {
  @Input() dataListing:any[]=[
    {
      'image':'https://cdn1.katadata.co.id/media/images/temp/2019/02/12/2019_02_12-10_47_55_3a4f243855fb98d083dcb4c4669c82bf.jpg'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/temp/2019/02/12/2019_02_12-10_47_55_3a4f243855fb98d083dcb4c4669c82bf.jpg'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/temp/2019/02/12/2019_02_12-10_47_55_3a4f243855fb98d083dcb4c4669c82bf.jpg'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/temp/2019/02/12/2019_02_12-10_47_55_3a4f243855fb98d083dcb4c4669c82bf.jpg'
    }
  ]
  constructor(private main:Main) { }
  ngAfterViewInit(){
    this.main.loadSlider()
  }
  ngOnInit() {
  
  }

}