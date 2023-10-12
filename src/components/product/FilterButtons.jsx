import React from 'react'

function FilterButtons() {
  return (
    <div class="row">
    <div class="col-sm-9 col-lg-10">
      <div class="product-menu">
        <ul class="nav">
          <li>
            <a class="active" data-toggle="tab" href="#all">
              All product
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#animals">
              Animals
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#abstract">
              Abstract
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#flowers">
              Flowers
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#beverages">
              Beverages
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default FilterButtons