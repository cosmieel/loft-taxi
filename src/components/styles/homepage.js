import { makeStyles } from '@material-ui/core/styles'
import background from '../../assets/homepage_bg.png'

export const useHomepageStyles = makeStyles(() => ({
    homepage: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
    },
    homepage__container: {
        minHeight: '100vh',
    },
}));