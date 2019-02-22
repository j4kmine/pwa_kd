import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-detailinfografik',
  templateUrl:'detailinfografik.html',
  styleUrls: ['detailinfografik.css']
})
export class DetailinfografikComponent {
  subcsription$:any
  // detailinfografik:String
  // ngOnInit() {
  //   this.subcsription$ = this.route.params.subscribe(
  //      (params:Params)=>{
  //       this.detailinfografik = params['detailinfografik']
  //     }
  //   )
  // }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
