import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" width="full" paddingY="4" backgroundColor="blue.800" color="white">
      <Heading as="h1" size="lg" textAlign="center">
        My React App
      </Heading>
    </Box>
  );
};

export default Header;
