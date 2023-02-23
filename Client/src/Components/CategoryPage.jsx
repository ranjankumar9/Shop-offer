import React from "react";
import "../Style/CategoryPage.css";
import { AiOutlineHeart } from "react-icons/ai";
import {  BsSearch } from "react-icons/bs";
import { Checkbox, CheckboxGroup ,Stack,Text} from '@chakra-ui/react'
const CategoryPage = () => {
  return (
    <div className="CategoryPage">
      <div>
        <div className="TreandingPro">
          <div className="TreandingMainDiv" style={{border:"none",backgroundColor:"rgb(242, 241, 241)"}}>
            <p>Trending searches</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
          <div>
            <p>Kitchen Product</p>
          </div>
        </div>

        <div className="CategoryMainDiv">
          <div className="CategoryFilterDiv">
                <div className="SortByCategoryInput">
                    <p> By Category</p>
                <Stack spacing={2} direction='column'>
  <Checkbox colorScheme='green' defaultChecked>
    Men's
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Women's
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Kids
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Shoes
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Clothes
  </Checkbox>
</Stack>
                </div>
                <div className="SortByCategoryInput">
                    <p> Random sort  </p>
                <Stack spacing={2} direction='column'>
  <Checkbox colorScheme='green' defaultChecked>
    Price : Low - High
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
  Price : High - Low
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Rating : Low - High
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Name : A-Z
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Name : Z-A
  </Checkbox>
</Stack>
                </div>
                <hr />
                <div className="SortByCategoryInput">
                    <p> By Ratting</p>
                <Stack spacing={2} direction='column'>
  <Checkbox colorScheme='green' defaultChecked>
    5
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    4+
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    3+
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    2.5+
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    2+
  </Checkbox>
</Stack>
                </div>
                <hr />
          </div>
          {/* ............ */}
          <div className="CAtegoryProductDiv">
            <div className="ProductSideSort">
              <div className="CategoryProductData">
                <div>
                  <p className="CategoryName">
                    Casual Shoes For Men <span>(423 Items)</span>
                  </p>
                </div>
                <div className="CategorySearch">
                    <p> <BsSearch/></p>
                   
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search within category"
                  />
                </div>
                <div className="CategoryProductDataSort">
                  <div>
                    <p>Sort by:</p>
                  </div>
                  <div>
                    <select name="" id="">
                      <option value="">Popularity</option>

                      <option value="">Price Low To High</option>
                      <option value="">Price High To Low</option>
                      <option value="">Discount</option>
                      <option value="">Fresh Arrivals</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="CategoryPagePincod">
                <div className="CategoryPagePicncodInput">
                  <input type="text" placeholder="Enter PinCod" />
                </div>
                <div className="CategoryPageCheck">
                  <p>Check</p>
                </div>
              </div>
            </div>
            <div className="CategoryProductMainDiv">
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>

              {/* ............ */}

              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/k/h/230X258_sharpened/UrbanMark-Gray-Men-s-Slip-SDL382449458-1-a9f10.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n3.sdlcdn.com/imgs/k/j/1/230X258_sharpened/UrbanMark-Tan-Men-s-Sneakers-SDL783469679-1-5d19d.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n3.sdlcdn.com/imgs/k/l/r/230X258_sharpened/UrbanMark-Red-Men-s-Sneakers-SDL017198698-1-8c62e.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n4.sdlcdn.com/imgs/k/j/1/230X258_sharpened/UrbanMark-Black-Men-s-Sneakers-SDL781141733-1-26c2a.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/j/y/3/230X258_sharpened/Impakto-Outdoor-Gray-Casual-Shoes-SDL881795358-1-f5dfc.webp "
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>
              <div className="CategorySingleProduct">
                <div className="CategoryHeart">
                  <p>
                    {" "}
                    <AiOutlineHeart />
                  </p>
                </div>
                <img
                  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                  alt=""
                />
                <div className="CategoryProductView">
                    <p> QUICK VIEW</p>
                </div>
                <p className="CategoryProductName">
                  ShoeRise Men Canvas Sports Casual Shoes - White Men's
                </p>
                <div className="CategoryPriceDiv">
                  <p className="CategoryPriceDiscount">Rs 1,899</p>
                  <p className="CategoryPrice">Rs. 799</p>
                  <div className="CategoryOffer">
                    <p>58% Off</p>
                  </div>
                </div>
                <p className="CategoryRatting">4.5 (6)</p>
              </div>

              {/* ....... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
