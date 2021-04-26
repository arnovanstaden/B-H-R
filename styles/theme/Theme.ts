import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 560,
            md: 760,
            lg: 960,
            xl: 1920,
        },
    },
});

export default theme