import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#fff',
        height: '78px'
    },
    header__logo: {
        flexGrow: 1,
    },
    header__inner: {
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '5px 15px'
    },
}));