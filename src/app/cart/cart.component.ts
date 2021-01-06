import { Component, OnInit } from '@angular/core';
//importado en el ultimo capitulo para los formularios
import { FormBuilder } from '@angular/forms';


//utilizamos el servicio cart
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {
  
    //crea un group que es un metodo del FormBuilder

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });


  }

  ngOnInit(): void {

    //cuando se instancia esta clase cargamos los items desde el servicio
    this.items = this.cartService.getItems();
  }

  /**
   * recibe los datos ingresados en el formulario. Confirma el pedido
   * y vacia el carro
   */
  onSubmit(customerData) {

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
