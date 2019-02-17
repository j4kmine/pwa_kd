import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-analisis',
  templateUrl:'analisis.html',
  styleUrls: ['analisis.component.css']
})
export class AnalisisComponent {
  subcsription$:any
  analisis:String
  ngOnInit() {
    this.subcsription$ = this.route.params.subscribe(
       (params:Params)=>{
        this.analisis = params['analisis']
      }
    )
  }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
