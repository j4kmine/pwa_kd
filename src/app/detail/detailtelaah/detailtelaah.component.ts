import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-detailtelaah',
  templateUrl:'detailtelaah.html',
  styleUrls: ['detailtelaah.css']
})
export class DetailtelaahComponent {
  subcsription$:any
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
