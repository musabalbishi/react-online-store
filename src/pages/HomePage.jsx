import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
function HomePage() {
  return (
    <Box minH={"100vh"}>
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        gap={2}
        boxShadow={"xl"}
        minH={"100vh"}
      >
        {/* sidebar */}
        <GridItem
          colSpan={"1"}
          minH={"100vh"}
          boxShadow={"md"}
          borderRight={"2px"}
          borderColor={"gray.200"}
        >
          <Sidebar />
        </GridItem>
        {/* main */}
        <GridItem
          colSpan={"5"}
          minH={"100vh"}
          boxShadow={"md"}
          borderLeft={"2px"}
          borderColor={"gray.200"}
        >
          <Outlet />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default HomePage;
