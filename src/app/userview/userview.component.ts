import { Component, OnInit } from '@angular/core';
import { RegisrService } from '../regisr.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  constructor(private v:RegisrService) { }
  pizza:any[]=[];

  arr = ["","Veg","Non veg"];
  tp:string="all";
  sel(x)
  {
    this.tp=x;
  }

  crntusr;
  ngOnInit() {
    this.fetchdata();
    this.crntusr=JSON.parse(localStorage.getItem("current"));
  }

  fetchdata(){
    this.v.viewpizza().subscribe((b:any)=>this.pizza=b);
  }

  cart(j)
  {
   
    for(let i=0;i<this.pizza.length;i++)
    {
      if(i==j)
      {
       let tempcart=JSON.parse(localStorage.getItem("cart"));
       if(tempcart==null)
       {
        tempcart=[];
        this.pizza[i].user=this.crntusr.uname;
        this.pizza[i].qty=1;
        tempcart.push(this.pizza[j]);
        localStorage.setItem("cart",JSON.stringify(tempcart));
        alert("added in cart");
       }
       else
       {
        let flag=true;
       for(let k=0;k<tempcart.length;k++)
       {
         console.log(this.pizza[i].id+" "+tempcart[k].id);
         if(this.pizza[j].id==tempcart[k].id && tempcart[k].user==this.crntusr.uname)
         {          
            flag=false;
            break;
         }
       }
       if(flag)
       {
        this.pizza[i].user=this.crntusr.uname;
        this.pizza[i].qty=1;
        tempcart.push(this.pizza[j]);
        localStorage.setItem("cart",JSON.stringify(tempcart));
        alert("added in cart");
       }
       else
       {
         alert(" already added in cart");
       }
      }    
    }
  }
 
 
  }
}
