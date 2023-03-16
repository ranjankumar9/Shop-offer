// import {
//   Box,
//   Button,
//   Flex,
//   Image,
//   SimpleGrid,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import "../Style/CategoryPage.css";
// import { AiOutlineHeart } from "react-icons/ai";
// import ReactImageMagnify from "react-image-magnify";
// import { StarIcon } from "@chakra-ui/icons";
// import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const SingleProduct = () => {
//   const toast = useToast();
//   const { _id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState({});

//   axios.defaults.headers = {
//     "Content-Type": "application/json",
//     Authorization: localStorage.getItem("token"),
//   };

//   useEffect(() => {
//     axios.get(`https://unusual-cyan-cygnet.cyclic.app/products/${_id}`).then((r) => {
//       // console.log(r);
//       setData(r.data[0]);
//     });
//   }, []);

//   const {product_image, product_title,offer_price,quantity} = data
//   // console.log(data)
//   //  const { isOpen, onOpen, onClose } = useDisclosure();

//   // console.log(data)
//   const addProduct = async() => {
//     try{
//       const res = await axios
//       .post(
//         "https://unusual-cyan-cygnet.cyclic.app/user/post",{product_image, product_title,offer_price,quantity}

//       )
//         console.log(res.data)
//           toast({
//             title: "Product",
//             description: res.data.msg,
//             status: "success",
//             duration: 5000,
//             isClosable: true,
//           });
//     }
//     catch(err){
//       console.log(err)
//     }
//   };

//   const off = ((data.price - data.offPrice) * 100) / data.price;
//   // console.log(off)

//   return (
//     <>
//       <Flex
//         w="90%"
//         gap={3}
//         justifyContent="center"
//         bg="white"
//         p="20px"
//         m="auto"
//       >
//         <Box w="40%" id="imageMagnifyer" zIndex={1}>
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 alt: "Wristwatch by Ted Baker London",
//                 isFluidWidth: true,
//                 src: data.product_image,
//               },
//               largeImage: {
//                 src: data.product_image,
//                 width: 1000,
//                 height: 1300,
//               },
//             }}
//           />
//         </Box>
//         <Box w="60%" borderLeft="1px solid grey">
//           <Box ml={7}>
//             <Flex>
//               <Text fontSize="22px" w="80%" mb={0}>
//                 {data?.product_title}
//               </Text>

//               {/* <Box><AiOutlineHeart/></Box> */}
//             </Flex>
//             <Flex gap={1.5} alignItems="center">
//               <StarIcon color="yellow" />
//               <StarIcon color="yellow" />
//               <StarIcon color="yellow" />
//               <StarIcon color="yellow" />
//               <AiOutlineHeart />
//               <Text>({data?.rating})</Text>
//             </Flex>
//             <hr
//               style={{
//                 border: "1px solid grey",
//                 marginTop: "5px",
//                 marginBottom: "8px",
//               }}
//             />
//             <Flex gap={2}>
//               <Text>MRP</Text>
//               <p style={{ textDecoration: "line-through" }}>RS:{data?.mrp}</p>
//               <Text>(Inclusive of all taxes)</Text>
//             </Flex>
//             <Flex gap={3}>
//               <Flex gap={3}>
//                 <Text style={{ fontSize: "22px", color: "red" }}>
//                   Rs.{data?.offer_price}
//                 </Text>
//                 <Text p="1px 4px" border="1px solid ">
//                   {data?.product_discount}% OFF
//                 </Text>
//               </Flex>
//             </Flex>
//             <Text ml="300px">(2) Offers | Applicable on cart</Text>
//             <SimpleGrid
//               style={{ border: "1px doted blue" }}
//               w="50%"
//               ml="300px"
//               border="1px dashed blue"
//               p={4}
//             >
//               <Flex gap={3}>
//                 <Image
//                   src="https://i1.sdlcdn.com/img/newOffersIcon.png"
//                   w={7}
//                   h={7}
//                   mt="4px"
//                 />
//                 <Text>
//                   15% Instant Discount Using AU Small Finance Bank Debit &
//                   Credit Cards T&C
//                 </Text>
//               </Flex>

//               <hr style={{ border: "0.1px solid grey", margin: "10px 0" }} />
//               <Flex gap={3}>
//                 <Image
//                   src="https://i1.sdlcdn.com/img/newOffersIcon.png"
//                   w={7}
//                   h={7}
//                   mt="4px"
//                 />
//                 <Text>
//                   15% Instant Discount Using AU Small Finance Bank Debit &
//                   Credit Cards T&C
//                 </Text>
//               </Flex>
//             </SimpleGrid>

//             <Flex gap={4} mt="40px">
//               <Button
//                 size="lg"
//                 colorScheme="red"
//                 onClick={(ele) =>
//                   addProduct(ele)
//                 }
//               >
//                 ADD TO CART
//               </Button>
//                 <Button
//                   size="lg"
//                   colorScheme="yellow"
//                   color="white"
//                   onClick={() => navigate("/payment")}
//                 >
//                   BUY NOW
//                 </Button>

//             </Flex>
//           </Box>
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default SingleProduct;

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const toast = useToast();
  const { _id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  useEffect(() => {
    axios
      .get(`https://unusual-cyan-cygnet.cyclic.app/products/${_id}`)
      .then((r) => {
        // console.log(r);
        setData(r.data[0]);
      });
  }, [_id]);

  const { product_image, product_title, offer_price, quantity } = data;

  const addProduct = async () => {
    try {
      const res = await axios.post(
        "https://unusual-cyan-cygnet.cyclic.app/user/post",
        { product_image, product_title, offer_price, quantity }
      );
      console.log(res.data);
      toast({
        title: "Product",
        description: res.data.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const off = ((data.price - data.offPrice) * 100) / data.price;
  // console.log(off)
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex justify={"center"}>
          <Image
            rounded={"md"}
            alt={data?.product_title}
            src={data?.product_image}
            // fit={"cover"}
            align={"center"}
            w={{ base: "50%", lg: "80%" }}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.product_title}
            </Heading>
            <Flex gap={2} my="20px">
              <Text>MRP</Text>
              <p style={{ textDecoration: "line-through" }}>RS:{data?.mrp}</p>
              <Text>(Inclusive of all taxes)</Text>
            </Flex>

            <Flex gap={3}>
              <Text style={{ fontSize: "22px", color: "red" }}>
                Rs.{data?.offer_price}
              </Text>
              <Text p="1px 4px" border="1px solid ">
                {data?.product_discount}% OFF
              </Text>
            </Flex>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}></VStack>
          </Stack>

          <Flex gap={4} mt="40px">
            <Button
              size="lg"
              colorScheme="red"
              onClick={(ele) => addProduct(ele)}
            >
              ADD TO CART
            </Button>
            <Button
              size="lg"
              colorScheme="yellow"
              color="white"
              onClick={() => navigate("/payment")}
            >
              BUY NOW
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SingleProduct;
