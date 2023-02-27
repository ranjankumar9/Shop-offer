import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";

const FeaturedCollection = () => {
  const featuredCollection = [
    {
      id: 1,
      name: "Aqua Grand Swift 15",
      image:
        "https://n4.sdlcdn.com/imgs/k/l/m/230X258_sharpened/Aqua-Grand-Swift-15-Ltr-SDL097050399-1-aa91a.png",
      price: 5899,
      offer: 63,
    },
    {
      id: 2,
      name: "Lifelong - 500W Mixe",
      image:
        "https://n2.sdlcdn.com/imgs/k/l/i/230X258_sharpened/Lifelong-500W-Mixer-Grinder-3-SDL694245465-1-d0367.webp",
      price: 1394,
      offer: 55,
    },
    {
      id: 3,
      name: "Shaphio - Off White",
      image:
        "https://n2.sdlcdn.com/imgs/k/l/d/230X258_sharpened/Shaphio-Off-White-Poly-Cotton-SDL472694294-1-3aaef.jpeg",
      price: 359,
      offer: 64,
    },
    {
      id: 4,
      name: "3 BURNER NANO PLUS D",
      image:
        "https://n4.sdlcdn.com/imgs/k/l/6/230X258_sharpened/3-BURNER-NANO-PLUS-DIGITAL-SDL356242942-1-9229e.webp",
      price: 3399,
      offer: 55,
    },
    {
      id: 5,
      name: "MUSKPURE ULTIMA 12 L",
      image:
        "https://n2.sdlcdn.com/imgs/k/l/i/230X258_sharpened/MUSKPURE-ULTIMA-12-Ltr-RO-SDL553338722-1-0c10f.webp",
      price: 8299,
      offer: 48,
    },
    {
      id: 6,
      name: "A M INTERNATIONAL Al",
      image:
        "https://n4.sdlcdn.com/imgs/h/h/6/230X258_sharpened/SDL344296317-fa3ae.webp",
      price: 169,
      offer: 81,
    },
    {
      id: 7,
      name: "Affair Cotton Shrugs",
      image:
        "https://n1.sdlcdn.com/imgs/j/s/h/230X258_sharpened/Affair-Cotton-Shrugs-Black-SDL366022493-1-3474d.jpeg",
      price: 249,
      offer: 64,
    },
  ];

  //   useEffect(() => {}, []);
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
        Featured Collection
      </Heading>
      <Flex overflowX="auto" className="hide-scrollbar" gap="20px">
        {featuredCollection.length > 0 &&
          featuredCollection.map((product) => {
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

export default FeaturedCollection;
