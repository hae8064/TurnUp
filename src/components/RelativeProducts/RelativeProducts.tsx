import React from 'react';
import { RelativeProductsStyle } from './RelativeProductsStyle';
import { RiShoppingBag2Line, RiArrowRightSLine } from 'react-icons/ri';

type propType = {
  img: any;
  title: string;
  brand: string;
  price: string;
};

function RelativeProducts({ img, title, brand, price }: propType) {
  return (
    <RelativeProductsStyle>
      <div className="title">관련 상품</div>
      <div className="productsContainer">
        <div className="productImg">
          {img}
          <div className="sameContainer">
            <RiShoppingBag2Line />
            <span className="sameContent">동일상품</span>
          </div>
        </div>

        <div className="productInfo">
          <span className="subtitle">{brand}</span>
          <span className="title">{title}</span>
          <span className="price">{price}</span>
          <div className="buyBtn">
            <span>구매하기</span>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </RelativeProductsStyle>
  );
}

export default RelativeProducts;
