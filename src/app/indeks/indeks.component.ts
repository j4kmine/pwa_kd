import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-indeks',
  templateUrl:'indeks.html',
  styleUrls: ['indeks.component.css']
})
export class IndeksComponent {
  subcsription$:any
  ngOnInit() {
    // this.subcsription$ = this.route.params.subscribe(
    //    (params:Params)=>{
    //     this.indeks = params['indeks']
    //   }
    // )
  }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
