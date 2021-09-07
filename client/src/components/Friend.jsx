import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Friend = ({setCurrentDialog, FriendName }) => {

    const dialogClickHandler = (e, name) => {
        setCurrentDialog(name);
    } 

    return(
        <ListItem button key={FriendName} onClick={(e) => dialogClickHandler(e, FriendName)} >
            <ListItemIcon>
                <Avatar alt="Remy Sharp">{FriendName[0]}</Avatar>
            </ListItemIcon>
            <ListItemText primary={FriendName} />
            <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
    )
}

export default Friend;