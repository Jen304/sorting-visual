import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#e65100",
    },
  },
});

export default darkTheme;
