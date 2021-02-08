import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// default theme
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff5722",
    },
  },
});

export default defaultTheme;
