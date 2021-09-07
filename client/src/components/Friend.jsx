import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Friend = ({ FriendName }) => {
    return(
        <ListItem button key={FriendName}>
            <ListItemIcon>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemIcon>
            <ListItemText primary="Remy Sharp">{FriendName}</ListItemText>
            <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
    )
}

export default Friend;