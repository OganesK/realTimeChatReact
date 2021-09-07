import React from "react";
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const Message = ({from, messageText, messageTime}) => {
    return(
        <ListItem key="1">
            <Grid container>
                <Grid item xs={12}>
                    <ListItemText align={from === 'Me' ? 'right' : 'left'} primary={messageText}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText align={from === 'Me' ? 'right' : 'left'} secondary={messageTime}></ListItemText>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default Message;