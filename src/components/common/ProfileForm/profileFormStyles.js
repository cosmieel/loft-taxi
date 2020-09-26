import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    profileForm__container: {
        flexGrow: 1,
        marginBottom: '1px',
    },
    profileForm__card: {
        width: "300px",
        height: "189px",
        position: "relative",
        paddingTop: "16px",
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingBottom: "16px",
        boxSizing: "border-box",
        overflow: "hidden",
    },
    profileForm__fields: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',        
    },
    profileForm__icon: {
        position: "absolute",
        top: "0px",
        right: "0px",
        width: "32px",
        height: "24px",
    },
	profileForm__button: {
		marginTop: "24px"
	},
	profileForm__notice: {
        marginTop: "30px",
		textAlign: "center"
    },
    profileForm__noticeButton: {
        marginTop: "30px",
    }
}));


