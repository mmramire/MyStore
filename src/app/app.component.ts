import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'MyStore';

  imageParent: string = '';

  

  showImg = true;

  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    alert(this.register.name);
    console.log(this.register);
  }

  onLoaded(img: string) {
    console.log('Log Padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
