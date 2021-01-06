import { Component, OnInit } from '@angular/core';

//para el enrutamiento
import { ActivatedRoute } from '@angular/router';

//la lista de productos
import { products } from '../products';

//El carro para almacenar y demas
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(private route: ActivatedRoute,
              private cartService: CartService
    ) { }

  ngOnInit() {
    // Recibimos el id del producto enviado por la url
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');

    /**
     * Una vez obtenido el id busco en products un producto
     * que tenga el id enviado y lo cargo en product
     * que es la variable que utilo en el html para mostrar
     * por pantalla los datos correctos.
     */
    this.product = products.find(product => {
      return product.id === Number(productIdFromRoute);
    });

  }

  /**
   * Utilizamos el servicio CART y su metodo para meter productos.
   * @param product 
   */
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
