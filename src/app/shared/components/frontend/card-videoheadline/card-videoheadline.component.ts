import { Component, OnInit,Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-card-videoheadline',
  templateUrl: './card-videoheadline.component.html',
  styleUrls: ['./card-videoheadline.component.css']
})
export class CardVideoheadlineComponent implements OnInit {
  @Input() video_url = "http://www.youtube.com/embed/Jkgpa70iRvE?enablejsapi=1&amp;rel=0"
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video_url);
  }
}