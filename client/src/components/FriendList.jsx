import React from "react";
import Friend from './Friend'
import List from '@material-ui/core/List';

const FriendList = ({setCurrentDialog, friendlist}) => {
    return(
        <List>
            {friendlist.map(friend => 
                <Friend setCurrentDialog={setCurrentDialog} FriendName={friend.name} />)}
        </List>
    )
}

export default FriendList;