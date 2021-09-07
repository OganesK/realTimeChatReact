import React from "react";
import Friend from './Friend'
import List from '@material-ui/core/List';

const FriendList = () => {
    const FriendsName = ['1','2','3']
    return(
        <List>
            {FriendsName.map(name => 
                <Friend FriendName={name} />)}
        </List>
    )
}

export default FriendList;