import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Link } from 'src/app/model/link';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {

  links:Link[];

  
  constructor(private router:Router ) { 
    this.links=[]
  }

  ngOnInit(): void {
  }

  addlinks(title:HTMLInputElement, link:HTMLInputElement){
    this.links.push(new Link(title.value,link.value, 0))
    title.value="";
    link.value="";
    return false;
  }
}
