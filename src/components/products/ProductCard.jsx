import {
  Card,
  Image,
  ButtonGroup,
  Heading,
  Stack,
  Button,
  Divider,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";

function ProductCard(props) {
  return (
    <Card maxW="sm" w={"20rem"} h={"30rem"} boxShadow={"xl"}>
      <CardBody>
        <Image
          h={"10rem"}
          w={"10rem"}
          src={props.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" textOverflow={"clip"}>
            {props.title}
          </Heading>
          <Text color="blue.600" fontSize="2xl">
            {props.price + "$"}
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
  );
}

export default ProductCard;
