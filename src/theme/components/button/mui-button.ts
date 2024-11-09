export enum MuiButtonVariants {
    RejectButton
}

// declare module '@mui/material/Button' {
//     interface ButtonPropsVariantOverrides {
//         RejectButton: true;
//     }
// }

export const MuiButton = () => ({
    // variants: [
    //     {
    //         props: { variant: MuiButtonVariants.RejectButton },
    //         style: {
    //             background: variables.colors.bgReject,
    //             color: variables.colors.fontSecondary
    //         },
    //     },
    // ],
    styleOverrides: {
        root: {
            // display: 'flex',
            // justifyContent: 'center',
            // background: variables.colors.bgLight,
            // color: variables.colors.fontPrimary,
            // height: variables.sizes.heightTopBar,
        },
    },
});
