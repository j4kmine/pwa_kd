import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-detailvideo',
  templateUrl:'detailvideo.html',
  styleUrls: ['detailvideo.css']
})
export class DetailvideoComponent {
  subcsription$:any
  // detailvideo:String
  // ngOnInit() {
  //   this.subcsription$ = this.route.params.subscribe(
  //      (params:Params)=>{
  //       this.detailvideo = params['detailvideo']
  //     }
  //   )
  // }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
