import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "../Style/CategoryPage.css";
import { AiOutlineHeart } from "react-icons/ai";
import ReactImageMagnify from "react-image-magnify";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../Redux/CartReducer/reducer";
const SingleProduct = () => {
  const toast = useToast();
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const { product_image, product_title, offer_price, quantity } = data;
  useEffect(() => {
    axios.get(`http://localhost:4500/products/${_id}`).then((r) => {
      console.log(r);
      setData(r.data[0]);
    });
  }, [_id]);

  // console.log(data)
  //  const { isOpen, onOpen, onClose } = useDisclosure();

  // axios.defaults.headers = {
  //   "Content-Type": "application/json",
  //   Authorization: localStorage.getItem("token"),
  // };
  // const addProduct = (payload) => {
  //   axios
  //     .post(
  //       "http://localhost:4500/user/post",
  //         payload

  //     )
  //     .then((r) => {
  //       if (r.data.msg) {
  //         toast({
  //           title: "Product",
  //           description: r.data.msg,
  //           status: "success",
  //           duration: 5000,
  //           isClosable: true,
  //         });
  //       } else {
  //         toast({
  //           title: "Product",
  //           description: r.data,
  //           status: "error",
  //           duration: 5000,
  //           isClosable: true,
  //         });
  //       }
  //     })
  //     .catch((e) => {
  //       toast({
  //         title: "Something went wrong",
  //         description: e,
  //         status: "error",
  //         duration: 9000,
  //         isClosable: true,
  //       });
  //     });
  // };

  const off = ((data.price - data.offPrice) * 100) / data.price;
  // console.log(off)

  return (
    <>
      <Flex
        w="90%"
        gap={3}
        justifyContent="center"
        bg="white"
        p="20px"
        m="auto"
      >
        <Box w="40%" id="imageMagnifyer" zIndex={1}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: data.product_image,
              },
              largeImage: {
                src: data.product_image,
                width: 1000,
                height: 1300,
              },
            }}
          />
        </Box>
        <Box w="60%" borderLeft="1px solid grey">
          <Box ml={7}>
            <Flex>
              <Text fontSize="22px" w="80%" mb={0}>
                {data?.name}
              </Text>

              {/* <Box><AiOutlineHeart/></Box> */}
            </Flex>
            <Flex gap={1.5} alignItems="center">
              <StarIcon color="yellow" />
              <StarIcon color="yellow" />
              <StarIcon color="yellow" />
              <StarIcon color="yellow" />
              <AiOutlineHeart />
              <Text>({data?.rating})</Text>
            </Flex>
            <hr
              style={{
                border: "1px solid grey",
                marginTop: "5px",
                marginBottom: "8px",
              }}
            />
            <Flex gap={2}>
              <Text>MRP</Text>
              <p style={{ textDecoration: "line-through" }}>RS:{data?.mrp}</p>
              <Text>(Inclusive of all taxes)</Text>
            </Flex>
            {/* category
: 
"mens_footwear"
mrp
: 
"499"
offer_price
: 
"217"
product_discount
: 
"57"
product_image
: 
"https://n3.sdlcdn.com/imgs/k/j/0/230X258_sharpened/GRASS-WALK-Brown-Men-s-SDL141388781-1-42612.JPG"
product_rating_count
: 
"57"
product_title
: 
"GRASS WALK - Brown Men's Thong Flip Flop"
sellerId
: 
"63f70b4b55ff80094df94d54"
type
: 
"mens"
_id
: 
"63f71421e4d1836cfef962eb" */}
            <Flex gap={3}>
              <Flex gap={3}>
                <Text style={{ fontSize: "22px", color: "red" }}>
                  Rs.{data?.offer_price}
                </Text>
                <Text p="1px 4px" border="1px solid ">
                  {data?.product_discount}% OFF
                </Text>
              </Flex>
            </Flex>
            <Text ml="300px">(2) Offers | Applicable on cart</Text>
            <SimpleGrid
              style={{ border: "1px doted blue" }}
              w="50%"
              ml="300px"
              border="1px dashed blue"
              p={4}
            >
              <Flex gap={3}>
                <Image
                  src="https://i1.sdlcdn.com/img/newOffersIcon.png"
                  w={7}
                  h={7}
                  mt="4px"
                />
                <Text>
                  15% Instant Discount Using AU Small Finance Bank Debit &
                  Credit Cards T&C
                </Text>
              </Flex>

              <hr style={{ border: "0.1px solid grey", margin: "10px 0" }} />
              <Flex gap={3}>
                <Image
                  src="https://i1.sdlcdn.com/img/newOffersIcon.png"
                  w={7}
                  h={7}
                  mt="4px"
                />
                <Text>
                  15% Instant Discount Using AU Small Finance Bank Debit &
                  Credit Cards T&C
                </Text>
              </Flex>
            </SimpleGrid>

            <Flex gap={4} mt="40px">
              <Button
                size="lg"
                colorScheme="red"
                onClick={() => {
                  
                  dispatch(
                    addToCart({
                      userId: data._id,
                      product_image,
                      product_title,
                      offer_price,
                      quantity:1
                    })
                  );
                }}
              >
                ADD TO CART
              </Button>
              <Link to="/Checkout.jsx">
                <Button
                  size="lg"
                  colorScheme="yellow"
                  color="white"
                  onClick={() => navigate("/")}
                >
                  BUY NOW
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SingleProduct;
