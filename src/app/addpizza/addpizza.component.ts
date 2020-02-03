import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisrService } from '../regisr.service';

@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrls: ['./addpizza.component.css']
})
export class AddpizzaComponent implements OnInit {

  constructor(private dd:RegisrService) { }
  
  
  Addpizza: FormGroup;
  
  ngOnInit() {
   this.Addpizza=new FormGroup({
    
        
      categories: new FormControl(''),
      pizzaname: new FormControl(''),
      price:new FormControl(''),
      addphoto:new FormControl(''),
    });
  
    }
    selectedFile:File=null;
  
    onFileSelected(file:FileList){
      this.selectedFile=file.item(0);
      var reader=new FileReader();
    reader.onload=(event:any)=>{
    this.Addpizza.value.addphoto=event.target.result;
    
    }
    reader.readAsDataURL(this.selectedFile);
  
    } 
  
  msg;
  add()
  {
    console.log(this.Addpizza.value);
     this.dd.addpiza(this.Addpizza.value).subscribe(d=>this.my(d))
  }  
   my(d)
   {
     if(d.Msg=="successfully")
     {
       alert("successfully");
     }
     else
     {
       alert("not successfully");
     }
   }     
      
  
}


