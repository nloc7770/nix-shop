// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    initial: {
      100: "#e8e8e8 ",
      300: "#e7cac2 ",
      500: "#cebeb9 ",
      700: "#e2e0d4 ",
      900: "#959595",
    },
  },
})
export default theme