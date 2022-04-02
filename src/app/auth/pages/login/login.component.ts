import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  goToForum(): void {
    this.router.navigateByUrl('/forum');
  }
}
