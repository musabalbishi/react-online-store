import {
  Box,
  Text,
  Card,
  Flex,
  Image,
  ButtonGroup,
  Heading,
  Stack,
  Button,
  Divider,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

// import { useState, useEffect } from "react";
const Products = () => {
  // const API_URL = "https://fakestoreapi.com/products";

  return (
    <Box as="section" p={"3rem"}>
      <Text>PRODUCTS</Text>
      <Flex gap={"2"} p={"3"} wrap={"wrap"} justifyContent={"start"}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};
export default Products;
