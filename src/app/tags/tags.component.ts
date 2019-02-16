import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-tags',
  templateUrl:'tags.html',
  styleUrls: ['tags.component.css']
})
export class TagsComponent {
  subcsription$:any
  tags:String
  ngOnInit() {
    this.subcsription$ = this.route.params.subscribe(
       (params:Params)=>{
        this.tags = this.jsUcfirst(params['tags'].replace('-',' '));
      }
    )
  }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }

  loadMore(){
    alert('asdasd')
  }

  jsUcfirst(string) 
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}