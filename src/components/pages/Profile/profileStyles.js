import { makeStyles } from '@material-ui/core/styles';
import background from "../../../assets/homepage_bg.png";

export const useStyles = makeStyles(() => ({
    profile: {
        backgroundColor: '#000',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover'
    },
    profile__container: {
        minHeight: 'calc(100vh - 78px)'
    },
    profile__card: {
        padding: '44px 60px',
        marginTop: '48px',
        marginBottom: '48px',      
    },
    profile__desc: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: '40px', 
    }
}))