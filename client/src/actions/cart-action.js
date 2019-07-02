import { GET_CART ,CHECK_OUT,NEED_LOG_IN} from './type';
import { api } from '../helpers/API';
import jwt_decode from 'jwt-decode';

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

export const IncreaseQuantityLocal = (position) => dispatch =>{
    let list = JSON.parse(localStorage.getItem('listproduct'));
    list[position].quantity = list[position].quantity + 1;
    localStorage.setItem('listproduct', JSON.stringify(list));
    dispatch(GetCartFromLocal());
}

export const DecreaseQuantityLocal = (position) => dispatch =>{
    let list = JSON.parse(localStorage.getItem('listproduct'));
    list[position].quantity = list[position].quantity - 1;
    localStorage.setItem('listproduct', JSON.stringify(list));
    dispatch(GetCartFromLocal());
}

export const RemoveProductLocal = (position,isLogin) => dispatch =>{
    let list = JSON.parse(localStorage.getItem('listproduct'));
    if(isLogin){
        api.post('/cart/delete', list[position])
        .then(res => {console.log(res.data)})
        .catch(err => {});
    }
    list.splice(position,1);
    localStorage.setItem('listproduct', JSON.stringify(list));
    dispatch(GetCartFromLocal());
}

export const CheckOut = () => dispatch => {
    const checkJWT = localStorage.getItem('jwtToken');
    const list = JSON.parse(localStorage.getItem('listproduct'));
    if(!checkJWT){
        dispatch({
            type:NEED_LOG_IN,
            payload: {
                checkout:true,
                listproduct:list
            }
        })
    }
    else{
        const userinfo = jwt_decode(checkJWT);
        if(list){
            for(var i=0; i<list.length;++i){
                list[i].userID = userinfo.id;
            }
        }
        api.post('/cart/add', list)
        .then(res => {console.log(res.data)})
        .catch(err => {});
        console.log(userinfo);
    }   
}

export const GetCartFromLocal = () =>{
    const products= JSON.parse(localStorage.getItem('listproduct'));
    return{
        type:GET_CART,
        payload:{
            cartProduct: products,
        }
    }
}

export const GetCartFromServer = () => dispatch =>{
    const listLocal = JSON.parse(localStorage.getItem('listproduct'));
    if(listLocal){
        const checkJWT = localStorage.getItem('jwtToken');
        const userinfo = jwt_decode(checkJWT);
        for(var i=0; i<listLocal.length;++i){
            listLocal[i].userID = userinfo.id;
        }
        api.post('/cart/add', listLocal)
        .then(res => {})
        .catch(err => {});
    }
    api.get('/cart').then(res=>{
        // Create List
        const list = res.data.listproduct;
       
        // Create List Product To Return again 
        let listpro = [];
        for(var i = 0; i<list.length ; ++i){
            let production= {
                userID: list[i].userID,
                color:list[i].color,
                size:list[i].size,
                quantity:list[i].quantity,
                price: list[i].productID.price,
                name: list[i].productID.name,
                img: list[i].productID.imgs[0],
                productID: list[i].productID._id,
            }
            listpro.push(production);
        }
        localStorage.setItem('listproduct',JSON.stringify(listpro));
        dispatch({
            type:GET_CART,
            payload:{
                cartProduct: listpro,
            }
        })
    }).catch(err => {
        console.log(err);
    });
}

export const UpdateQuantity = () => {
    const listLocal = JSON.parse(localStorage.getItem('listproduct'));
    if(listLocal){
        const checkJWT = localStorage.getItem('jwtToken');
        const userinfo = jwt_decode(checkJWT);
        for(var i=0; i<listLocal.length;++i){
            listLocal[i].userID = userinfo.id;
        }
        api.post('/cart/add', listLocal)
        .then(res => {})
        .catch(err => {});
    }
}

