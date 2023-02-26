import React, { useEffect, useState } from "react";
import "../Style/CategoryPage.css";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import {  BsSearch } from "react-icons/bs";
import { Button, Checkbox ,Menu,MenuButton,MenuItem,MenuList,Stack} from '@chakra-ui/react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Products = () => {
  const [price, setPrice] = useState("");
  const [order, setOrder] = useState("");
  const [value, setValue] = useState([]);
  const [ProductData,setProductData]=useState([])
const navigate=useNavigate()
  const getData=async()=>{
    let res =await axios.get(`http://localhost:4500/products/?_sort=${price}`)
    setProductData(res.data)
// console.log(res)
  }


     const handleChange = (e) => {
      setPrice(e.target.value);
      setOrder(e.target.name);
    };
  


useEffect(() => {
  getData()
}, [price,order,value])

console.log("pro",ProductData)






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
          <MenuItem value="asc" name="price" onClick={handleChange}>Price: Low-High</MenuItem>
          <MenuItem value="desc" name="price" onClick={handleChange}>Price: High-Low</MenuItem>
          <MenuItem value="asc" name="rating" onClick={handleChange}>Rating: Low-High</MenuItem>
          <MenuItem value="desc" name="rating" onClick={handleChange}>Rating: High-Low</MenuItem>
          <MenuItem value="asc" name="brand" onClick={handleChange}>Name: A-Z</MenuItem>
          <MenuItem value="desc" name="brand" onClick={handleChange}>Name: Z-A</MenuItem>
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
              { ProductData?.map((el,i)=>(
   <div key={i} className="CategorySingleProduct">
   <div className="CategoryHeart">
     <p>
       {" "}
       <AiOutlineHeart />
     </p>
   </div>
   <img
   src={el.product_image}
    //  src="https://n1.sdlcdn.com/imgs/k/m/o/230X258_sharpened/ShoeRise-Men-Canvas-Sports-Casual-SDL408958518-1-64e89.webp"
     alt=""
   />
   <div className="CategoryProductView">
  
    <p onClick={() => navigate(`/singleproduct/${el._id}`)}> QUICK VIEW</p>
    
       
   </div>
   <p className="CategoryProductName">
    {el.product_title}
     {/* {el.product_title.length < 20 ? el.product_title : `${el.product_title.slice(0, 20)}`} */}
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
