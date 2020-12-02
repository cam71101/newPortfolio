import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
    h1: {
      fontSize: "8rem",
      fontWeight: 800,
    },
    h2: {
      textTransform: "capitalize",
      lineHeight: "1.25",
      // marginBottom: "0.75rem",
      fontWeight: 700,
    },
    h4: {
      textTransform: "capitalize",
      lineHeight: "1.25",
      marginBottom: "0.75rem",
    },
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 100,
    },
    subtitle1: {
      marginBottom: "1.25rem",
      fontFamily: "Karla",
    },
  },
  palette: {
    primary: {
      main: "#eeeee",
    },
  },
})

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("md")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "3.3rem",
  },
}

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
}

theme.typography.button = {
  ...theme.typography.button,
  [theme.breakpoints.down("xs")]: {
    fontSize: ".7.5rem",
  },
}

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  [theme.breakpoints.down("xs")]: {
    fontSize: ".6rem",
  },
}

export default theme
