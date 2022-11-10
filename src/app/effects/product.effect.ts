import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import * as ProductAction from '../actions/product.action';
import { Product } from '../models/product.model';
// import { getProduct, getProductFailure, getProductSuccess } from '../actions/product.action'

@Injectable()
export class ProductEffect {
    constructor(
        private ProductService: ProductService,
        private actions$: Actions,
    ) { }

    getProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ProductAction.getProduct),
        switchMap(() => this.ProductService.getAllProduct().pipe(
            map(
                value => ProductAction.getProductSuccess({ products: <Product[]>value })),
            catchError(error => of(ProductAction.getProductFailure({ error: <string>error.message })))
        ))

    ))

    addProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductAction.addProduct),
        switchMap((action) => from(this.ProductService.addProduct(action.product))
            .pipe(
                map(value => ProductAction.addProductSuccess()),
                catchError(error => of(ProductAction.addProductFailure({ error: error })))
            )),
    ))
}
