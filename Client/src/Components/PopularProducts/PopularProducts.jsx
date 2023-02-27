import { Box, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
// import ProductCard from "../PopularProducts/ProductCard";
// import PopularProducts from "./PopularProducts";
// import ProductCard from "./../ProductCard/ProductCard";

const PopularProducts = () => {
  // const [popularProducts, setPopularProducts] = useState([]);
  // const getPopularProducts = async () => {
  //   try {
  //     let res = await axios.get(
  //       `https://unusual-cyan-cygnet.cyclic.app/products?sort=offer_price&order=desc`
  //     );
  //     console.log(res.data);
  //     setPopularProducts(res.data);
  //   } catch (err) {
  //     console.log("errr", err);
  //   }
  //   // /?type=womens&sort=offer_price&order=${price}&_order=${order}category=womens_footwear
  // };

  // useEffect(() => {
  //   getPopularProducts();
  // }, []);
  let popularProducts = [
    {
      id: 1,
      name: "Highlander",
      image:
        "https://cdn-images.farfetch-contents.com/16/76/07/08/16760708_33403238_480.jpg",
      price: 233,
      offer: 48,
    },
    {
      id: 2,
      name: "Austiex-BluePolyeste",
      image:
        "https://n2.sdlcdn.com/imgs/k/f/n/230X258_sharpened/Austiex-Blue-Polyester-Sports-T-SDL214041641-1-6cddd.webp",
      price: 359,
      offer: 50,
    },
    {
      id: 3,
      name: "FITMonkeyMenRegularF",
      image:
        "https://n1.sdlcdn.com/imgs/k/l/u/230X258_sharpened/FITMonkey-Navy-Polyester-Men-s-SDL753138014-1-9e962.webp",
      price: 379,
      offer: 50,
    },
    {
      id: 4,
      name: "AfcoBags-BluePolyest",
      image:
        "https://n1.sdlcdn.com/imgs/k/e/5/230X258_sharpened/Afco-Bags-30-Ltrs-Blue-SDL801351683-3-99c61.jpeg",
      price: 399,
      offer: 55,
    },
    {
      id: 5,
      name: "LYNX20LtrsSkyBlueLap",
      image:
        "https://n4.sdlcdn.com/imgs/k/m/x/230X258_sharpened/LYNX-20-Ltrs-Sky-Blue-SDL440528597-1-bc1e8.JPG",
      price: 499,
      offer: 55,
    },
    {
      id: 6,
      name: "FITMonkeyMenCasualSo",
      image:
        "https://n4.sdlcdn.com/imgs/k/k/q/230X258_sharpened/FITMonkey-Navy-Men-s-Sneakers-SDL750901548-1-823f2.webp",
      price: 400,
      offer: 60,
    },
    {
      id: 7,
      name: "RANBOLTNavyPolyester",
      image:
        "https://n2.sdlcdn.com/imgs/j/r/6/230X258_sharpened/RANBOLT-Navy-Polyester-Lycra-Fitness-SDL548897337-1-411f3.jpeg",
      price: 399,
      offer: 60,
    },
  ];
  return (
    <Box>
      <Heading
        as="h2"
        size="lg"
        fontWeight={500}
        my="30px"
        px="20px"
        textAlign="left"
      >
        Popular Products
      </Heading>
      <Flex overflow="auto" className="hide-scrollbar" gap="20px">
        {popularProducts &&
          popularProducts.map((product) => {
            return (
              <Box key={product.id}>
                <ProductCard productData={product} />
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
};

export default PopularProducts;
