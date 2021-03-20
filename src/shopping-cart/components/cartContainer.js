import { CartItem } from './cartItem';
import {deleteCart} from '../dao/cartDao'
import {useState} from 'react'

export const CartContainer = ({cart}) => {

    const handleClear = () => {
        deleteCart().then(()=>{
            window.location.href = '/';
        })
    }

    let total_quantity = 0;
    let total_price = 0;
    for (let i = 0 ; i<cart.length; i++){
        total_quantity+= cart[i].quantity;
        total_price += cart[i].price * cart[i].quantity;
    }
    return (
        <div>
            { typeof cart === 'undefined' || cart.length === 0 ?
                <div className="mt-5 text-center">No item in cart</div>

                :
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="card card-body border-0 col-sm-3">
                        {
                            cart.map(product => <CartItem key={product.id} product={product} />)
                        }
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <div className="card card-body">
                            <p className="mb-1">Total Items</p>
                            <h4 className=" mb-3 txt-right">{total_quantity}</h4>
                            <p className="mb-1">Total Payment</p>
                            <h3 className="m-0 txt-right">{total_price}</h3>
                            <hr className="my-4" />
                            <div className="text-center">
                                <button type="button" className="btn btn-primary mb-2 btn-dark" >CHECKOUT</button>
                                <button type="button" onClick={handleClear} className="btn btn-outlineprimary btn-sm" >CLEAR</button>
                            </div>

                        </div>
                    </div>

                </div>
            }

        </div>

    );
}