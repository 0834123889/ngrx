import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const getProduct = 
    createAction(
        '[Product Component] GetProduct'
    );
export const getProductSuccess = 
    createAction(
        '[Product Component] GetProductSuccess', 
        props<{ products: Array<Product> }>()
    );
export const getProductFailure = 
    createAction(
        '[Product Component] GetProductFailure', 
        props<{ error: string }>()
    );

export const addProduct = createAction(
    '[Product Component] AddProduct',
    props<{ product: Product }>()
);

export const addProductSuccess = createAction(
    '[Product Component] AddProductSuccess',
);

export const addProductFailure = createAction(
    '[Product Component] AddProductFailure',
    props<{ error: string }>()
);


