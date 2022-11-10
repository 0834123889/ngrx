import { createReducer, on } from '@ngrx/store';
import { getProduct, getProductFailure, getProductSuccess, addProduct, addProductFailure, addProductSuccess } from '../actions/product.action';
import { Product } from '../models/product.model';
import { addProductState, ProductState } from '../states/product.state';

const initGetProduct: ProductState = {
    products: [],
    error: "",
    loading: false
}

export const productReducer = createReducer(
    initGetProduct,
    on(getProduct, (state, action)=>{
        return {
            products: [],
            error: '',
            loading: true
        }
    }),
    on(getProductSuccess, (state, action)=>{
        return {
            products: action.products,
            loading: false,
            error: ""
        }
    }),
    on(getProductFailure, (state, action)=>{
        return {
            products: [],
            loading: false,
            error: action.error
        }
    })
)

const initAddProduct: addProductState = {
    error: '',
    product: <Product>{},
    isSuccess: false
}

export const addProductReducer = createReducer(
    initAddProduct,
    on(addProduct, (state,  { product } )=>{
        return {
            error: "",
            isSuccess: false,
            product: product
        }
    }),

    on(addProductSuccess, (state)=>{
        return {
            error: "",
            isSuccess: true,
            product: <Product>{}
        }
    }),

    on(addProductFailure, (state,  { error } )=>{
        return {
            error: error,
            isSuccess: false,
            product: <Product>{}
        }
    }),

)