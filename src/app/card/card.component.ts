import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  temp:any[]=[];
  
  crnt;
  ngOnInit() {
    this.temp=JSON.parse(localStorage.getItem("cart"));
    this.crnt=JSON.parse(localStorage.getItem("current")).uname;
  }

  remove(j)
  {
   for(let i=0;i<this.temp.length;i++)
   {
     if(i==j)
     {
       this.temp.splice(j,1);
       localStorage.setItem("cart",JSON.stringify(this.temp));
       this.temp=JSON.parse(localStorage.getItem("cart"));
     }
   }
  }

  tp(y,idx)
  {
    console.log(y+" "+idx);
    for(let i=0;i<this.temp.length;i++)
   {
     if(i==idx)
     {
       this.temp[i].qty=y;
       localStorage.setItem("cart",JSON.stringify(this.temp));
       this.temp=JSON.parse(localStorage.getItem("cart"));
     }
   }
  }

  place()
  {
    console.log(this.temp);
  }



}
