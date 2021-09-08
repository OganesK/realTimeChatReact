import React from "react";
import Friend from './Friend'
import List from '@material-ui/core/List';

const FriendList = ({setCurrentDialog, friendlist}) => {
    const friends = ['Chel', 'Chel2']
    return(
        <List>
            {friends.map(friend => 
                <Friend FriendName={friend} />)}
        </List>
    )
}

export default FriendList;