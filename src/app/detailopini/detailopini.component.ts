import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-detailopini',
  templateUrl:'detailopini.html',
  styleUrls: ['detailopini.css']
})
export class DetailopiniComponent {
  subcsription$:any
  // detailopini:String
  // ngOnInit() {
  //   this.subcsription$ = this.route.params.subscribe(
  //      (params:Params)=>{
  //       this.detailopini = params['detailopini']
  //     }
  //   )
  // }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
