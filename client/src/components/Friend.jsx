import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Friend = ({ FriendName }) => {


    return(
        <ListItem button key={FriendName}>
            <ListItemIcon>
                <Avatar alt="Remy Sharp"></Avatar>
            </ListItemIcon>
            <ListItemText />
            <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
    )
}

export default Friend;