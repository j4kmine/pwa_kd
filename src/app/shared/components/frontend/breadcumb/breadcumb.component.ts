import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadCumbComponent implements OnInit {
  @Input() firstelement:string="Home"
  @Input() childelement:string="Berita"
  constructor() { }

  ngOnInit() {
  }

}