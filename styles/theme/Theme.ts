import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 760,
            lg: 960,
            xl: 1280
        },
    },
    props: {
        MuiContainer: {
            maxWidth: "xl",
        },
    },
});

export default theme