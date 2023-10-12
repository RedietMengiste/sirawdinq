import React from "react";


const Item = ({ id, img, name, detail }) => {
  return (
   
      <div class="product-wrap">
        <div class="product-img">
          <img src={require("../../assets/images/" + img)} alt={detail} />
          <ul class="icon">
            <li>
              <i class="fa fa-heart"></i>

              <span>Add to Wishlist</span>
            </li>
            <li>
              <i class="fa fa-eye"></i>

              <span>Quick View</span>
            </li>
          </ul>
        </div>
        <div class="product-content fix">
          <h3>
            <a href="shop.html">{name}</a>
          </h3>
          <span class="pull-left">$219.56</span>
        </div>
      </div>
    
  );
};

export default Item;
