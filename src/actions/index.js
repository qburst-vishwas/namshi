import axios from 'axios';
import {FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS} from './actionType';

   export const getProducts = () => {
      return (dispatch) => {
        dispatch(fetchProductsRequest())
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
          .then(json => {
            const products = json
            console.log('products' ,products)
            dispatch(fetchProductsSuccess(products))
          })
          .catch(error => {
            dispatch(fetchProductsFailure(error.message))
          })
      }
    }

    export const fetchProductsRequest = () => {
      return {
        type: FETCH_PRODUCTS_REQUEST
      }
    }
    
    export const fetchProductsSuccess = products => {
      return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
      }
    }
    
    export const fetchProductsFailure = error => {
      return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
      }
    }