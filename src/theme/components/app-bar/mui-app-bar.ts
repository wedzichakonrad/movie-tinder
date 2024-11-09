export const MuiAppBar = (variables: any) => ({
    styleOverrides: {
        root: {
            display: 'flex',
            justifyContent: 'center',
            background: variables.colors.bgLight,
            color: variables.colors.fontPrimary,
            height: variables.sizes.heightTopBar,
        },
    },
});
