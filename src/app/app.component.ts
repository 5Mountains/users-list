import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Users List';
  typesOfShoes: string[] = ['Smith', 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
