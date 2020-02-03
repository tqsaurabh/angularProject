import { Component, OnInit } from '@angular/core';
import { RegisrService } from '../regisr.service';

@Component({
  selector: 'app-viewpizza',
  templateUrl: './viewpizza.component.html',
  styleUrls: ['./viewpizza.component.css']
})
export class ViewpizzaComponent implements OnInit {

  constructor(private v:RegisrService) { }
  pizza:any[]=[];
 
  
  ngOnInit() {
    this.fetchdata();
  }

  fetchdata(){
    this.v.viewpizza().subscribe((b:any)=>this.pizza=b);
  }
  obj:any={};
  delete(i)
  {
    this.obj.id=this.pizza[i].id;
    console.log(this.obj.modelno);

    this.v.delete(this.obj).subscribe(b=>
      {
        alert("deleted successfully")
        this.fetchdata();
      });
  }

}
