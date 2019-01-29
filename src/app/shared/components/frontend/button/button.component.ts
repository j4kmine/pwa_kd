import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() links:string="#"
  @Input() displayButton:string="Muat lebih banyak"
  constructor() { }

  ngOnInit() {
  }

}