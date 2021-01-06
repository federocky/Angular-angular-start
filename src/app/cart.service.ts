import { Injectable } from '@angular/core';

//para utilizar el servicio de cliente HTTP
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(private http: HttpClient) { }
  

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  ///pide los precios mediante el cliente http
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
