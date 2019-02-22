import { Component, OnInit,Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Main} from '../../../module/main'
@Component({
  selector: 'app-card-videoheadline',
  templateUrl: './card-videoheadline.component.html',
  styleUrls: ['./card-videoheadline.component.css']
})
export class CardVideoheadlineComponent implements OnInit {

  @Input() video_url = "http://www.youtube.com/embed/Jkgpa70iRvE?enablejsapi=1&amp;rel=0"
  @Input() dataListing:any[]=[
    {
      'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
    },
    {
       'image':'https://cdn1.katadata.co.id/media/images/thumb/2016/08/23/2016_08_23-23_57_33_a73049e32b7c11230c4e2a70cb79a28d_960x640_thumb.jpg'
    }
  ]
  constructor(private sanitizer:DomSanitizer,private main:Main) { }
  ngAfterViewInit(){
    this.main.loadVideoSlider()
  }
  ngOnInit() {
    
  }


  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video_url);
  }
}