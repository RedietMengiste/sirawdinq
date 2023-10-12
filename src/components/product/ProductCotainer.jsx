import React from "react";
import FilterButtons from "./FilterButtons";
import { UnfilteredItems } from "../../data/allItems";
import { Link } from "react-router-dom";

import Item from "./Item";

function ProductCotainer(props) {
  return (
    <div class="product-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>Our product</h2>
            </div>
          </div>
        </div>
        <FilterButtons />

        <div class="tab-content">
          <div class="tab-pane active" id="all">
            <ul class="row">
              {UnfilteredItems.map((i) => {
                if (i.detail == "all") {
                  return (
                    <li class="col-lg-3 col-sm-6 col-12">
                      <Link to={`/detail/${i.id}`}>
                        <Item
                          key={i.id}
                          img={i.img}
                          name={i.name}
                          detail={i.detail}
                        />
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCotainer;
