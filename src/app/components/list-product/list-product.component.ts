import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from '../../states/product.state'
import * as productAction from '../../actions/product.action';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  getProduct$: Observable<ProductState>;

  constructor(
    private store: Store<{ getProduct: ProductState }>
  ) {
    this.getProduct$ = this.store.select(state => state.getProduct);

  }

  ngOnInit(): void {
    this.getProduct$.subscribe(res => {
      console.log(res);
    })
  }

}
