import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Spinner thickness="3px" speed="0.70s" emptyColor="gray.200" size="xl" />
  );
};

export default Loader;
