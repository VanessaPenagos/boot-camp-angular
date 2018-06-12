import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vanessa: Person;

  constructor() {
    this.vanessa = new Person('0', 'Vanessa Penagos', 22);
  }
}
