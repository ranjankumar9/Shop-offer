import React, { useEffect, useState } from "react";
import "../Style/CategoryPage.css";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import {  BsSearch } from "react-icons/bs";
import { Button, Checkbox ,Menu,MenuButton,MenuItem,MenuList,Stack} from '@chakra-ui/react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Products = () => {
  const [price, setPrice] = useState("");
  const [cate, setCate] = useState("");

  const [order, setOrder] = useState("");
  const [value, setValue] = useState([]);
  const [ProductData,setProductData]=useState([])
  console.log("PRO",ProductData)
const navigate=useNavigate()
  const getData=async()=>{
    try{
      let res =await axios.get(`http://localhost:4500/products`)
      setProductData(res.data)
  // console.log(res.data)
    }catch(err){
      console.log("errr",err)
    }
 
  }


     const handleChange = (e) => {
      setPrice(e.target.value);
      setOrder(e.target.name);
    };
  


useEffect(() => {
  getData()
}, [price,order,value,cate])

// console.log("pro",ProductData)
// console.log("category",cate)





  return (
    <div className="CategoryPage">
      <div>
        <div className="TreandingPro">
          <div className="TreandingMainDiv" style={{border:"none",backgroundColor:"rgb(242, 241, 241)"}}>
            <p>Trending searches</p>
          </div>
          <div>
            <p>Mens </p>
          </div>
          <div>
            <p>Women's </p>
          </div>
          <div>
            <p>Shoes </p>
          </div>
          <div>
            <p>Bags </p>
          </div>
          <div>
            <p>Kitchen </p>
          </div>
          <div>
            <p>Kitchen </p>
          </div>
          <div>
            <p>Kitchen  </p>
          </div>
        </div>

        <div className="CategoryMainDiv">
          <div className="CategoryFilterDiv">
                <div className="SortByCategoryInput">
                    <p> By Category</p>
                <Stack spacing={2} direction='column'>
  <Checkbox value="men" colorScheme='green' onChange={(e)=>setCate(e.target.value)} defaultChecked>
    Men's
  </Checkbox>
  <Checkbox value="women" colorScheme='green' onChange={(e)=>setCate(e.target.value)} defaultChecked>
    Women's
  </Checkbox>
  <Checkbox value="kids" colorScheme='green' onChange={(e)=>setCate(e.target.value)} defaultChecked>
    Kids
  </Checkbox>
  <Checkbox value="shoes" colorScheme='green' onChange={(e)=>setCate(e.target.value)} defaultChecked>
    Shoes
  </Checkbox>
  <Checkbox value="clothes" onChange={(e)=>setCate(e.target.value)} colorScheme='green' defaultChecked>
    Clothes
  </Checkbox>
</Stack>
                </div>
                <div className="SortByCategoryInput">
                    <p> Random sort  </p>
                <Stack spacing={2} direction='column'>
  <Checkbox colorScheme='green' value="asc" onClick={handleChange} defaultChecked>
    Price : Low - High
  </Checkbox>
  <Checkbox colorScheme='green' value="desc" onClick={handleChange} defaultChecked>
  Price : High - Low
  </Checkbox>
  <Checkbox colorScheme='green' onClick={handleChange} defaultChecked>
    Rating : Low - High
  </Checkbox>
  <Checkbox colorScheme='green' value="asc"  onClick={handleChange} defaultChecked>
    Name : A-Z
  </Checkbox>
  <Checkbox colorScheme='green' value="desc" onClick={handleChange} defaultChecked>
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
          <MenuItem value="asc" name="asc" onClick={handleChange}>Price: Low-High</MenuItem>
          <MenuItem value="desc" name="desc" onClick={handleChange}>Price: High-Low</MenuItem>
          <MenuItem value="asc" name="asc" onClick={handleChange}>Rating: Low-High</MenuItem>
          <MenuItem value="desc" name="desc" onClick={handleChange}>Rating: High-Low</MenuItem>
          <MenuItem value="asc" name="asc" onClick={handleChange}>Name: A-Z</MenuItem>
          <MenuItem value="desc" name="desc" onClick={handleChange}>Name: Z-A</MenuItem>
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
