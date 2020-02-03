import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisrService } from '../regisr.service';
// import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform=new FormGroup({
    uname: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private r:Router,private t:RegisrService) { }

  ngOnInit() { }

  go()
  {
    this.r.navigate(['/reg']);
  }
msg;
  sat()
  {
    this.t.logi(this.loginform.value).subscribe(t=>
      {
        this.msg=t;
        if(this.msg.status=='user')
        {
          alert("User's Successfully Login");
          localStorage.setItem("current",JSON.stringify(this.loginform.value));
          this.r.navigate(['/uview']);
        }
        else if(this.msg.status=='admin')
        {
          localStorage.setItem("current",JSON.stringify(this.loginform.value));
          alert("Admin Successfully Login"); 
          this.r.navigate(['/view']);
        }
        else
        {
          alert("Enter Valid Usename and Password");
        }
  });
}

  }