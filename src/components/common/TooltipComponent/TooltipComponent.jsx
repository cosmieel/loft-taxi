import React, { forwardRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Tooltip, Typography } from '@material-ui/core/'
import Zoom from '@material-ui/core/Zoom'

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#ffc617',
        color: '#000',
        maxWidth: 230,
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'bold',
        border: '2px solid #000',
        textAlign: 'center'
    },
}))(Tooltip);

export const TooltipComponent = forwardRef((props, ref) => (
    <HtmlTooltip
        ref={ref}
        title={<Typography>{props.title}</Typography>}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        placement="left-start"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 400 }}
        leaveDelay={300}
        open={props.open}
        onClose={props.onClose}
    >{props.children}</HtmlTooltip>
))