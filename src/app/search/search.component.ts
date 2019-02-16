import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute,Params,RouterModule} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl:'search.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  subcsription$:any
  search:String
  keyword:String;
  ngOnInit() {
    this.subcsription$ = this.route.params.subscribe(
       (params:Params)=>{
        this.search = params['search']
      }
    )
      
    this.route.queryParams.subscribe(params => {
        this.keyword = params['keyword'];
    });
  }
  
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.subcsription$.unsubscribe()
  }
}
