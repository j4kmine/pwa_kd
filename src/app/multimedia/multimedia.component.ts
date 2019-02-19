import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-multimedia',
  templateUrl:'multimedia.html',
  styleUrls: ['multimedia.component.css']
})
export class MultimediaComponent {
  subcsription$:any
  ngOnInit() {
    // this.subcsription$ = this.route.params.subscribe(
    //    (params:Params)=>{
    //     this.multimedia = params['multimedia']
    //   }
    // )
  }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
