import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorModeScript } from "@chakra-ui/color-mode";

import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./components/ui/Theme";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />

      <App />
    </ChakraProvider>
  </React.StrictMode>
);
