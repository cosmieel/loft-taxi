import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    order: {
        top: '126px',
        left: '20px',
        padding: '44px 60px',
        position: 'absolute',
        width: '100%',
        maxWidth: '580px',
        boxSizing: 'border-box'
    },
    order__title: {
        marginBottom: '30px',
    },
    order__desc: {
        marginBottom: '30px',
    },
    order__select: {
        marginBottom: '30px'
    },
    order__selectItem: {
        width: '100%'
    },
    order__btn: {
        marginTop: '10px'
    }
}))