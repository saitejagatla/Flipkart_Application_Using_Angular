import { Component } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  displayContent = false;

  toggleContent() {
    this.displayContent = !this.displayContent;
  }

  showAlert() {
    alert('You have successfully registered');
  }

}
