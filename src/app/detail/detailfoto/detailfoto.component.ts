import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-detailfoto',
  templateUrl:'detailfoto.html',
  styleUrls: ['detailfoto.css']
})
export class DetailfotoComponent {
  subcsription$:any
  // detailfoto:String
  // ngOnInit() {
  //   this.subcsription$ = this.route.params.subscribe(
  //      (params:Params)=>{
  //       this.detailfoto = params['detailfoto']
  //     }
  //   )
  // }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
