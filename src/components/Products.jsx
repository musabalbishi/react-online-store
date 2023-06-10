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
  Input,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useState, useEffect } from "react";
const Products = () => {
  // let { id } = useParams();

  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setItem(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box as="section" p={"3rem"}>
      <Text>PRODUCTS</Text>
      <Input
        type="search"
        placeholder="search"
        w={"40vw"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flex gap={"2"} p={"3"} wrap={"wrap"} justifyContent={"start"}>
        {item
          .filter((row) => {
            if (search === "") {
              return row;
            } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
              return row;
            }
          })

          .map((data) => (
            <NavLink key={data.id} to={`/home/products/${data.id}`}>
              <Card maxW="sm" w={"20rem"}>
                <CardBody>
                  <Image
                    h={"10rem"}
                    w={"10rem"}
                    src={data.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{data.title}</Heading>
                    <Text color="blue.600" fontSize="2xl">
                      {data.price + "$"}
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
            </NavLink>
          ))}
      </Flex>
    </Box>
  );
};
export default Products;
