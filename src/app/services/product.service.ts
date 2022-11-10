import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc} from '@angular/fire/firestore'
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private fs: Firestore
  ) { }

  getAllProduct(){
    return collectionData(collection(this.fs, 'products'));
  }

  addProduct(product: Product){
    return addDoc(collection(this.fs, 'products'), product);
  }
}
