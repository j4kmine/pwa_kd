import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-topic',
  templateUrl:'topic.html',
  styleUrls: ['topic.component.css']
})
export class TopicComponent {
  subcsription$:any
  topic:String
  ngOnInit() {
    this.subcsription$ = this.route.params.subscribe(
       (params:Params)=>{
        this.topic = params['topic']
      }
    )
  }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
