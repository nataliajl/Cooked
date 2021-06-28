import { createMuiTheme } from '@material-ui/core/styles';

export const colors = createMuiTheme({
    palette: {
        primary: {
            lighter:    '#FC7A78',
            light:      '#F87E7E',
            main:       '#FB4E4B',
            dark:       '#DE2D33',
        },

        secondary: {
            light:      '#DFE3C6',
            main:       '#A9B654',
            dark:       '#9AB364',
        },

        basic: {
            b0:         '#000000',
            b1:         '#1C1A10',
            b2:         '#261D22',
            b3:         '#616161',
            b4:         '#d1d1d1',
            b5:         '#F0F0F0',
            b6:         '#F4F4F4',
            b7:         '#FFFFFF',
        }
    },

});

export const inputElements = createMuiTheme({
    font: {
        fontFamily: 'Roboto',
        fontSize: `${2*0.8}rem`,
    },

    inputFont: {
        fontWeight: '500',
        fontSize: '2rem',
        color: colors.palette.basic.b0,
        
        '&$button': {
            color: colors.palette.basic.b7,
        }
    },
});
