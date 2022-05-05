import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { clearCart, removeProduct } from "../../actions";
import { OrderAPI } from "../../utils/apis";
import CartProductCard from "../CartProductCard";
import Modal from "../Modal";
import "./cart.css";

const Cart = (props) => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cartTotal = props.cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const placeOrder = async () => {
    try {
      if (cartTotal === 0) {
        setShowModal(true);
        return;
        // return alert("No products in your cart");
      }
      setOrderComplete(true);

      const orderDetails = {
        amount: cartTotal,
        products: [...props.cart],
      };
      const response = await axios.post(OrderAPI, orderDetails);
      console.log("Post Response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="cartSection">
      {orderComplete && <Redirect to="/confirm" />}
      {showModal && (
        <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
      )}
      <h1 className="mainHeading">Checkout</h1>
      <section className="contentWrapper">
        <div>
          <h3>Total Items: {props.cart.length} </h3>
          {props.cart?.map((product) => {
            return (
              <CartProductCard
                key={product.id}
                {...product}
                removeProduct={() => props.removeProduct(product)}
              />
            );
          })}
        </div>
        <div>
          <h3>Total Amount</h3>
          <p>
            Amount: Rs.<span> {cartTotal}</span>
          </p>
          <button
            onClick={() => {
              props.clearCart();
              placeOrder();
              // setOrderComplete(true);
            }}
          >
            Place Order
          </button>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (store) => ({
  cart: store.cart,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  removeProduct: (payload) => dispatch(removeProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
