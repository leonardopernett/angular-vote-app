import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/model/link';

@Component({
  selector: 'app-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.css']
})
export class ListLinkComponent implements OnInit {
 
  @Input() link :Link;

  constructor() { 
     
  }

  ngOnInit(): void {
    
  }

}
