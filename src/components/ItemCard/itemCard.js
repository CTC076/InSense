import React from "react";
import "./itemCard.scss";
// import { withRouter } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import SavedItems from "../SavedItems/savedItems";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cartAction";

const ItemCard = (props) => {
  const { name, itemName, itemimg, itemPrice, itemId, addItem, wish } = props;

  return (
    <>
      <div className="card-wrapper">
        <Link
          to={`/itemdetail/${itemId}`}
          className="item-detail-url text-center"
          role="button"
        >
          <div className="card-img">
            <img src={itemimg} alt="" />
            <div className="item-button-container">
              <a
                className="cart-anchor"
                onClick={(e) => {
                  e.preventDefault();
                  addItem(props);
                }}
                href=""
              >
                <FiShoppingCart className="cart-button" />
              </a>
            </div>
          </div>
          <div className="card-content d-flex justify-content-evenly align-items-center">
            <p className="card-name text-center">{itemName}</p>
          </div>
          <p className="card-price text-center">NT$ {itemPrice}</p>
        </Link>
        <div className="saved-btn">
          <SavedItems
            className="saved-icon"
            itemId={itemId}
            name={name}
            wish={wish}
          />
        </div>
      </div>
    </>
  );
};

// console.log(item);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemCard);
