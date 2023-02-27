import React, { useEffect, useState } from "react";
import "../Style/CategoryPage.css";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Spinner,
} from "@chakra-ui/react";

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const Products = () => {
  // const { Categories } = useParams();
  const [price, setPrice] = useState("asc");
  const [cate, setCate] = useState("mens");

  const [order, setOrder] = useState("asc");
  // const [value, setValue] = useState([]);
  const [ProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("PRO", ProductData);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://unusual-cyan-cygnet.cyclic.app/products?type=${cate}&sort=offer_price&order=${price}&_order=${order}`
      );
      setProductData(res.data);
      setLoading(false);
      // console.log(res.data)
    } catch (err) {
      console.log("errr", err);
      setError(true);
    }
    // /?type=womens&sort=offer_price&order=${price}&_order=${order}category=womens_footwear
  };
  console.log("womens", ProductData);

  const handleChange = (e) => {
    setPrice(e.target.value);
    setOrder(e.target.name);
  };

  useEffect(() => {
    getData();
  }, [price, order, cate]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="CategoryPage">
      <div>
        <div className="TreandingPro">
          <div
            className="TreandingMainDiv"
            style={{ border: "none", backgroundColor: "rgb(242, 241, 241)" }}
          >
            <p>Trending searches</p>
          </div>
          <div onClick={() => setCate("mens")}>
            <p>Mens </p>
          </div>
          <div onClick={() => setCate("womens")}>
            <p>Women's </p>
          </div>
          <div>
            <p onClick={() => setCate("kids")}>Kids </p>
          </div>
          <div>
            <p onClick={() => setCate("home")}>Home & Kitchen </p>
          </div>
        </div>

        <div className="CategoryMainDiv">
          <div className="CategoryFilterDiv">
            <div className="SortByCategoryInput">
              <p> By Category</p>
              <Stack spacing={2} direction="column">
                <Checkbox
                  value="mens"
                  colorScheme="green"
                  onChange={(e) => setCate(e.target.value)}
                >
                  Men's
                </Checkbox>
                <Checkbox
                  value="womens"
                  colorScheme="green"
                  onChange={(e) => setCate(e.target.value)}
                >
                  Women's
                </Checkbox>
                <Checkbox
                  value="kids"
                  colorScheme="green"
                  onChange={(e) => setCate(e.target.value)}
                >
                  Kids
                </Checkbox>
                <Checkbox
                  value="home"
                  colorScheme="green"
                  onChange={(e) => setCate(e.target.value)}
                >
                  Home
                </Checkbox>
                <Checkbox
                  value="clothes"
                  isDisabled={true}
                  onChange={(e) => setCate(e.target.value)}
                  colorScheme="green"
                >
                  Clothes
                </Checkbox>
              </Stack>
            </div>
            <div className="SortByCategoryInput">
              <p> Random sort </p>
              <Stack spacing={2} direction="column">
                <Checkbox
                  colorScheme="green"
                  value="asc"
                  onChange={() => setPrice("asc")}
                >
                  Price : Low - High
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value="desc"
                  onChange={() => setPrice("desc")}
                >
                  Price : High - Low
                </Checkbox>
                <Checkbox colorScheme="green" onClick={handleChange}>
                  Rating : Low - High
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value="asc"
                  onClick={handleChange}
                >
                  Name : A-Z
                </Checkbox>
                <Checkbox
                  colorScheme="green"
                  value="desc"
                  onClick={handleChange}
                >
                  Name : Z-A
                </Checkbox>
              </Stack>
            </div>
            <hr />
            <div className="SortByCategoryInput">
              <p> By Ratting</p>
              <Stack spacing={2} direction="column">
                <Checkbox colorScheme="green">5</Checkbox>
                <Checkbox colorScheme="green">4+</Checkbox>
                <Checkbox colorScheme="green">3+</Checkbox>
                <Checkbox colorScheme="green">2.5+</Checkbox>
                <Checkbox colorScheme="green">2+</Checkbox>
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
                  <p>
                    {" "}
                    <BsSearch />
                  </p>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search within category"
                  />
                </div>
                <div className="CategoryProductDataSort">
                  <Menu>
                    <MenuButton
                      //  style={{border:"1px solid gray"}}
                      fontSize={["13px", "16px"]}
                      as={Button}
                      rightIcon={<AiOutlineDown />}
                    >
                      Sort By
                    </MenuButton>
                    <MenuList>
                      <MenuItem value="asc" name="asc" onClick={handleChange}>
                        Price: Low-High
                      </MenuItem>
                      <MenuItem value="desc" name="desc" onClick={handleChange}>
                        Price: High-Low
                      </MenuItem>
                      <MenuItem value="asc" name="asc" onClick={handleChange}>
                        Rating: Low-High
                      </MenuItem>
                      <MenuItem value="desc" name="desc" onClick={handleChange}>
                        Rating: High-Low
                      </MenuItem>
                      <MenuItem value="asc" name="asc" onClick={handleChange}>
                        Name: A-Z
                      </MenuItem>
                      <MenuItem value="desc" name="desc" onClick={handleChange}>
                        Name: Z-A
                      </MenuItem>
                    </MenuList>
                  </Menu>
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
              {ProductData?.map((el, i) => (
                <div key={i} className="CategorySingleProduct">
                  <div className="CategoryHeart">
                    <p>
                      {" "}
                      <AiOutlineHeart />
                    </p>
                  </div>
                  <img
                    src={
                      el.product_image
                        ? el.product_image
                        : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                    }
                    //  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
                    alt=""
                  />
                  <div className="CategoryProductView">
                    <p onClick={() => navigate(`/singleproduct/${el._id}`)}>
                      {" "}
                      QUICK VIEW
                    </p>
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
                    <p className="CategoryRatting">
                      4.5 ({el.product_rating_count})
                    </p>
                  </div>
                </div>
              ))}

              {/* ....... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
