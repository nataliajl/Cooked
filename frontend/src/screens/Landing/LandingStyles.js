import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '80rem',
    },

    page: {
      display: 'flex',
      justifyContent: 'space-between',

      '& div': {
        '& img': {
          alignContent: 'center',
          justifyContent: 'flex-end',
          margin: '22rem',
          marginBottom: 0,
        }
      }
    }
}));