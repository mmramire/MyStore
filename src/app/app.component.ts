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

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://picsum.photos/id/237/200/300',
      price: 100,
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://picsum.photos/id/237/200/300',
      price: 100,
    },
    {
      id: '3',
      name: 'Product 3',
      image: 'https://picsum.photos/id/237/200/300',
      price: 100,
    },
    {
      id: '4',
      name: 'Product 4',
      image: 'https://picsum.photos/id/237/200/300',
      price: 100,
    },
  ];

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
