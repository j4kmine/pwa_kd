import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-detailberita',
  templateUrl:'detailberita.html',
  styleUrls: ['detailberita.css']
})
export class DetailberitaComponent {
  subcsription$:any
  // detailberita:String
  // ngOnInit() {
  //   this.subcsription$ = this.route.params.subscribe(
  //      (params:Params)=>{
  //       this.detailberita = params['detailberita']
  //     }
  //   )
  // }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
