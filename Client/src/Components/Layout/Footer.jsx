import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box marginTop={"25px"}>
      <Box
        cursor="pointer"
        id="box1"
        display={{ lg: "flex", md: "grid" }}
        width="80%"
        justifyContent={"space-around"}
        gap="30px"
        margin={"auto"}
      >
        <Box>
          <Image src="/images/mob.png" />
        </Box>
        <Box justifyContent={"center"} margin="auto">
          <Heading width={"80%"}>Download Snapdeal App Now</Heading>
          <Text
            fontSize={{ lg: 22, md: 18, sm: 14 }}
            color={"grey"}
            marginTop="20px"
          >
            Fast, Simple & Delightful.
          </Text>
          <Text
            fontSize={{ lg: 22, md: 18, sm: 14 }}
            color={"grey"}
            marginTop="20px"
          >
            Fast, Simple & Delightful.
          </Text>
          <Image src="/images/goo.png" />
        </Box>
        <Box display={{ lg: "flex", md: "none", base: "none" }}>
          <Image src="/images/l.jpg" marginTop={"100px"} />
        </Box>
      </Box>
      <Box
        cursor="pointer"
        id="box2"
        display={{ lg: "flex", md: "grid" }}
        justifyContent="space-evenly"
        width="80%"
        margin={"auto"}
        marginTop={"30px"}
        gap={"25px"}
      >
        <Card display={"grid"} gap="10px">
          <CardBody>
            <Image
              src="/images/lock.jpg"
              margin={"auto"}
              width={"100px"}
              height={"100px"}
            />
            <Heading fontWeight={350}>100% secure Payment</Heading>
            <Text color={"grey"}>Moving your card Details</Text>
            <Text color={"grey"}>secured Place</Text>
          </CardBody>
        </Card>
        <Card display={"grid"}>
          <Image
            src="/images/trust.png"
            margin={"auto"}
            width={"100px"}
            height={"100px"}
          />
          <Heading fontWeight={350}>Trust Pay</Heading>
          <Text color={"grey"}>1005 payment protection .Easy</Text>
          <Text color={"grey"}>Return policy</Text>
        </Card>
        <Card display={"grid"}>
          <Image
            margin={"auto"}
            src="/images/moblogo.png"
            width={"100px"}
            height={"100px"}
          />
          <Heading fontWeight={350}>Shop on the go</Heading>
          <Text color={"grey"}>Download the app and get exicited</Text>
          <Text color={"grey"}>app only offer at your fingertips</Text>
        </Card>
        <Card display={"grid"}>
          <Image
            margin={"auto"}
            src="/images/help.jpg"
            width={"100px"}
            height={"100px"}
          />
          <Heading fontWeight={350}>Help center</Heading>
          <Text color={"grey"}>Got a question. Look no further</Text>
          <Text color={"grey"}>Browse Our facts. submit query here</Text>
        </Card>
      </Box>
      <Box
        cursor="pointer"
        // display={{ lg: "flex", md: "grid" }}
        display={"flex"}
        width={"80%"}
        margin="auto"
        marginTop={"30px"}
        borderBottom={"1px solid grey"}
        justifyContent={"space-between"}
        marginBottom="20px"
        paddingBottom={"20px"}
      >
        {/* <Box>
          <Heading fontSize={"15px"}>PAYMENT</Heading>
        </Box> */}
        <Box margin={"auto"}>
          <Heading justifyItems={"start"} fontSize={"25px"} marginBottom="20px">
            CONNECT
          </Heading>
          <Box display={{ lg: "flex", md: "grid" }} gap="30px">
            {" "}
            <Image src="/images/f.png" width={"60px"} height={"60px"} />
            <Image src="/images/te.png" width={"60px"} height={"60px"} />
            <Image src="/images/twitter.png" width={"60px"} height={"60px"} />
            <Image src="/images/in.png" width={"60px"} height={"60px"} />
            <Image src="/images/yt.jpg" width={"60px"} height={"60px"} />
            <Image src="/images/insta.jpg" width={"60px"} height={"60px"} />
          </Box>
        </Box>
      </Box>
      <Box
        display={{ lg: "grid", md: "none" }}
        width="80%"
        margin="auto"
        cursor="pointer"
      >
        <Text color={"grey"}>
          Men: Shirts for Men / Casual Shirts for Men / Formal Shirts for Men /
          Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T
          shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for
          Men / Trousers for Men / Jacket for Men / Formal Pants for Men /
          Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta for Men
          / Blazer for Men / Sweater for Men Women: Tops for Women / Kurti /
          Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees /
          Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit
          / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for
          Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for
          Women / Shirts for Women / Skirts for Women / Ethnic wear for Women /
          Western Dresses for Women / Leggings for Women Footwear: Men's
          Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for
          Men / Slippers for Men / Boots for Men / Sandals for Men / Footwear
          for Women / Heels for Women / Sandals for Women / Shoes for Women /
          Sandals for Women / Slippers for Women / Boots for Women / Jutti for
          Women / Sports Shoes for Women Home & Kitchen: Wall Painting / Wall
          Stickers / Dream Catcher / Rangoli Designs / Clock / Wall Clock /
          Alarm Clock / Diya / Bean Bag / Laptop Table / Study Table / Wall
          Hanging / Ceiling Lights / Table Lamp / Hanging Lights / LED Bulbs /
          Torch Light / LED Lights / Flower Vase / Keychain / Rudraksha /
          Screwdriver Watch: Watch For Men / Womens Watches / Smart Watch / Boys
          Watch / Girls Watch Home Furnishing: Bed Sheet / Mosquito Net /
          Mattress / Curtains / Sofa Cover / Blanket / Pillow / Carpet / Apron /
          Quilt / Floor Mat / Towel / Pillow Cover Electronics: Bluetooth
          Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer /
          Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas
          Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB &
          HDMI Cables / Computer Antivirus Mobiles Accessories: Mobile Covers /
          Leather Mobile Covers / Printed Back Covers / Tempered Glass
        </Text>
        <Text color={"grey"}>
          Snapdeal is India's leading pure-play value Ecommerce platform.
          Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the
          top four online lifestyle shopping destinations of India. Snapdeal
          brings together a wide assortment of good quality and value- priced
          merchandise on its platform. Snapdeal's vision is to enable the
          shoppers of Bharat to experience the joy of living their aspirations
          through reliable, value-for-money shopping. With a personalized,
          multilingual interface and cutting edge technology, Snapdeal has
          simplified the shopping experience for its value-conscious buyers by
          showcasing the most relevant products- products that are a good
          functional fit with their needs and of a quality that lasts- thereby
          delivering true value to its customers. With its commitment to high
          service standards, Snapdeal suppliers operate under a well structured
          ecosystem that enables them to offer great quality products at
          affordable prices. With majority of the value-seeking, middle-income,
          price-conscious buyers coming from the non-metros, Snapdeal’s
          logistics networks powered by third party logistics cover more than
          96% of India’s pin codes enabling order deliveries to more than 2500
          towns and cities and expanding. Further, Snapdeal's mission is to
          become India’s value lifestyle omni-channel leader. We are excited
          about continuing to build a complete ecosystem around value commerce,
          where we can serve Bharat consumers wherever they are on their offline
          to online shopping journey. Snapdeal is part of the AceVector Group
          and one of India’s best-known e-commerce companies with an exclusive
          focus on the value segment.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
