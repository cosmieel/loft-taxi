import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    form__container: {
        padding: '44px 60px',
        minWidth: '500px',
        marginTop: '48px',
        marginBottom: '48px',
        boxSizing: 'border-box'
    },
    form__title: {
        marginBottom: '30px'
    },
    form__desc: {
        marginBottom: '10px'
    },
    form__field: {
        marginBottom: '30px',
        paddingBottom: '5px'
    },
    form__errorMessage: {
        marginTop: '20px',
        marginBottom: '20px',
        color: '#f44336',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '16px'
    },
}));