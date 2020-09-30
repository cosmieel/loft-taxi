import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    map: {
        position: 'relative',
        top: 0,
        bottom: 0,
        width: '100%',
        height: 'calc(100vh - 78px)',
        minHeight: '500px',
    },
}));