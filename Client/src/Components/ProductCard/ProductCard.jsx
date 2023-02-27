import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import { BiGitCompare } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const { id, image, name, price, offer } = productData;
  // console.log(productData);
  // const image =
  //   "https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Makeup/SBC-Makeup_02._SY530_QL85_.jpg";
  // const name = "helllo wolrd";
  // const price = 23;
  return (
    <Link to={`/singleproduct/${id}`}>
      <Box
        className="product-card"
        // border="1px solid red"
        bgColor="#fff"
        borderRadius="5px"
        w="250px"
        // _hover={{}}
      >
        <HStack justify="space-between" p="5px" align={"center"}>
          <Tag size="sm" key="sm" variant="solid" colorScheme="red">
            New
          </Tag>
          <Button variant="link">
            <AiOutlineHeart />
          </Button>
        </HStack>
        <Flex direction="column" p="10px" gap="7px">
          {/* <Flex> */}
          <Box className="product-details">
            <Box className="product-image">
              <Image
                src={image}
                alt={name}
                // h="200px"
                h="250px"
                w="100%"
              />
              <Image
                src="https://cdn-images.farfetch-contents.com/18/20/20/38/18202038_38750523_480.jpg"
                alt="product_img"
                // h="200px"
                h="250px"
                w="100%"
              />
            </Box>
          </Box>
          {/* <Heading color="#ed5b5b" as="h6" size="xs" textAlign="left">
            Havells
          </Heading> */}
          <Heading as="h6" size="xs" textAlign="left">
            {name.length > 25 ? `${name.slice(0, 25)}....` : name}
          </Heading>
          <Box textAlign="left">
            <Tag
              size="sm"
              key="sm"
              variant="outline"
              textAlign="center"
              colorScheme="red"
              display="inline-block"
              borderRadius="0"
            >
              {offer}% Off
            </Tag>
          </Box>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <Text textAlign="left">${price}</Text>
          {/* </Flex> */}
        </Flex>
        <Flex
          className="product-side-bar"
          direction="column"
          gap="15px"
          align="center"
          justify="center"

          // h="100%"
        >
          <Button variant="link">
            <BiGitCompare fontSize="20px" />
          </Button>
          <Button variant="link">
            <AiOutlineEye fontSize="20px" />
          </Button>
          <Button variant="link">
            <HiOutlineShoppingBag fontSize="20px" />
          </Button>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
