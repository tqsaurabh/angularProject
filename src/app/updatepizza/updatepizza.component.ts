import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisrService } from '../regisr.service';
@Component({
  selector: 'app-updatepizza',
  templateUrl: './updatepizza.component.html',
  styleUrls: ['./updatepizza.component.css']
})
export class UpdatepizzaComponent implements OnInit {
  
  
  
 
  constructor(public sc:RegisrService ,private a:ActivatedRoute,private r:Router) { }

  tp:number;
    bicy: any[] = [];
  
    list:any={}; 
   
    ngOnInit() {
  
      this.tp=this.a.snapshot.params['i'];
  
      this.sc.viewpizza().subscribe((d: any) =>
      {
        this.bicy = d
  
        for(let i=0;i<this.bicy.length;i++)
        {
          if(i==this.tp)
          {
            this.list=this.bicy[i];
            break;
          }
        }
      });
  
   
    }
  
    editpizza()
    {
      this.sc.updatepizza(this.list).subscribe(d=>
        {
           this.r.navigate(['/view']);
        });   
  
    }
  

}
