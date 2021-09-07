import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ProfileImg from './profile.jpg'

const Profile = () => {


    return(
        <List>
            <ListItem button onClick={() => alert('Click')}>
                <ListItemIcon>
                <Avatar alt="Remy Sharp" src={ProfileImg} />
                </ListItemIcon>
                <ListItemText primary="Elithys"></ListItemText>
            </ListItem>
        </List>
    )
}

export default Profile;