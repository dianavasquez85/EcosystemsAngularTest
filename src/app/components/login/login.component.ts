import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      idDocument:  ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log("submitted");
    this.router.navigate(['/dashboard'])
  }

}
