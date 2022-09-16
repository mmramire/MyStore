import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = true;
  counter: number = 0;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      //vamos a tener la lista de productos actualizada porque nos suscribimos a los cambios
      //Nos va a avisar el tamaño del carrito con el tamaño del array
      //comunicación reactiva, nos evitamos el uso de @input @output para pasar datos
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
