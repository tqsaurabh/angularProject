import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisrService } from '../regisr.service';
import { Router } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


 

  constructor(private formBuilder: FormBuilder,private r:Router,private d:RegisrService) { }

  go()
  {
   this.r.navigate(['login']);
  }
  ngOnInit() {
    this.registerForm =new FormGroup({
      uname: new FormControl(''),
      gender:new FormControl(''),
      mobileno: new FormControl(''),
      password: new FormControl(''),
      email:new FormControl(''),
      address: new FormControl('')
      
         });//, {
    //     validator: MustMatch('password', 'confirmPassword')
    // });
   }
   msg;
   onSubmit()
   {
     console.log(this.registerForm.value);
      this.d.savedata(this.registerForm.value).subscribe(d=>
        {
            this.msg=d;
            if(this.msg.Msg=='successfully')
            {
              alert("Register Successfully ");
            }
            else(this.msg.Msg=='Error')
            {
              alert("Register Unsuccessful");
            }
      });
   }

  
}
