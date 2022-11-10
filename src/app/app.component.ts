import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProductState, ProductState } from './states/product.state';
import * as productAction from './actions/product.action';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  getProduct$: Observable<ProductState>;

  productForm = new FormGroup(
    {
      name: new FormControl(''),
      price: new FormControl('')
    }
  )

  constructor(
    private store: Store<{ 
      getProduct: ProductState,
      addProduct: addProductState
    }>
  ) {
    this.getProduct$ = this.store.select(state => state.getProduct);
    // this.getProduct$.subscribe(res => {
    //   console.log(res);
    // })
  }

  getData(){
    this.store.dispatch(productAction.getProduct())
  }

  addProduct(){
    console.log(this.productForm.value);
    let product: Product = {
      name: this.productForm.value.name,
      price: Number(this.productForm.value.price)
    }
    this.store.dispatch(productAction.addProduct( { product: product } ))
  }

}
