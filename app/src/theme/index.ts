import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#6A4BD8",
      primary_light: "#8267DD",
      primary_dark: "#5B41B9",
      shadow: "#f4f4f4",
      secondary: "#33A9FF",
      50: "#F5F3FE",
      100: "#ECEAFD",
      200: "#DCD7FC",
      300: "#C2B8FA",
      400: "#A390F6",
      500: "#8566F1",
      600: "#764AE7",
      700: "#673AD4",
      800: "#5630B2",
      900: "#482891",
    },
  },

  fonts: {
    body: "Inter, sans-serif",
  },
});

export default theme;
