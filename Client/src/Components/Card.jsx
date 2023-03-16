import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Card = ({ data: el }) => {
  const navigate = useNavigate();
  return (
    <div className="CategorySingleProduct">
      <div className="CategoryHeart">
        <p>
          {" "}
          <AiOutlineHeart />
        </p>
      </div>
      <img
        src={
          el.product_image ??
          "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        }
        //  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
        alt=""
      />
      <div className="CategoryProductView">
        <p onClick={() => navigate(`/singleproduct/${el._id}`)}> QUICK VIEW</p>
      </div>
      <div className="product-details">
        <p className="CategoryProductName">
          {/* {el.product_title} */}
          {el.product_title.length < 20
            ? el.product_title
            : `${el.product_title.slice(0, 20)}`}
        </p>

        <div className="CategoryPriceDiv">
          <p className="CategoryPriceDiscount">Rs {el.mrp}</p>
          <p className="CategoryPrice">Rs.{el.offer_price}</p>
          <div className="CategoryOffer">
            <p>{el.product_discount}% Off</p>
          </div>
        </div>
        <p className="CategoryRatting">4.5 ({el.product_rating_count})</p>
      </div>
    </div>
  );
};

export default Card;
