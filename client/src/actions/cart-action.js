import { GET_CART} from './type';
import { api } from '../helpers/API';

export const AddToCart = (cart) => dispatch =>{
    // Cart = List Product
    const check = JSON.parse(localStorage.getItem('listproduct'));
    let list = [];
    if(!check){
        list.push(cart);
    }
    else{
        list = [...check];
        let checkList = false;
        for(let i=0 ; i < list.length ; ++i)
        {
            console.log(cart);
            if((cart.productID === list[i].productID) &&(cart.size === list[i].size) && (cart.color === list[i].color)){
                list[i].quantity = cart.quantity + list[i].quantity;
                checkList = true;
                break;
            }
        }
        if(!checkList){
            list.push(cart);
        }
    }
    localStorage.setItem('listproduct', JSON.stringify(list));
    dispatch(GetCartFromLocal());
} 

export const GetCartFromLocal = () => dispatch =>{
    const products= JSON.parse(localStorage.getItem('listproduct'));
    dispatch({
        type:GET_CART,
        payload:{
            cartProduct: products,
        }
    })
}

export const IncreaseQuantity = (position) => dispatch =>{
    let list = JSON.parse(localStorage.getItem('listproduct'));
    list[position].quantity = list[position].quantity + 1;
    localStorage.setItem('listproduct', JSON.stringify(list));
    dispatch(GetCartFromLocal());
}

export const DecreaseQuantity = (position) => dispatch =>{
    let list = JSON.parse(localStorage.getItem('listproduct'));
    list[position].quantity = list[position].quantity - 1;
    localStorage.setItem('listproduct', JSON.stringify(list));
    dispatch(GetCartFromLocal());
}