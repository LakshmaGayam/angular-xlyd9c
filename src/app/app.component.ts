import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';
 c:number;
  add()
  {
   this. c=10+20;
  }
  ngOnInit()
  {
     this.add();
  }
 
}
  
