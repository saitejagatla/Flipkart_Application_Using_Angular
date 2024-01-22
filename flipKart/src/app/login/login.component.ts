import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  
  constructor(private router : Router){

  }

  // submit(){
    
  // }

  login(user : any) {
    if (user.email == 'saitejgatla@gmail.com' && user.password == '1234') {
      // perform login action
      alert('Logged in successfully!');
      this.router.navigate(['after-login']);
    }
    if (user.email == '9542063807' && user.password == '1234') {
      // perform login action
      alert('Logged in successfully!');
      this.router.navigate(['after-login']);
    }
    //  else {
    //   // display error message
    //   alert('Invalid email or password');
    // }
  }

  displayContent = false;

  toggleContent() {
    this.displayContent = !this.displayContent;
  }

  showAlert() {
    alert('You Have Successfully Registered');
  }



  
}
