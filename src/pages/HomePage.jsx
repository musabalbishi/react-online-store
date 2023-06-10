import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
function HomePage() {
  return (
    <Box minH={"100vh"}>
      <Grid templateColumns={"repeat(6, 1fr)"} gap={2} minH={"100vh"}>
        {/* sidebar */}
        <GridItem
          colSpan={"1"}
          minH={"100vh"}
          boxShadow={"md"}
          borderRadius={"10px"}
        >
          <Sidebar />
        </GridItem>
        {/* main */}
        <GridItem
          colSpan={"5"}
          minH={"100vh"}
          boxShadow={"md"}
          borderRadius={"10px"}
        >
          <Outlet />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default HomePage;
