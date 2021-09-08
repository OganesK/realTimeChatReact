import React from "react";
import Message from './Message'
import List from '@material-ui/core/List';

const MessagesBlock = ({classes}) => {
    const messages = ['her', 'govno']
    return(
        <List className={classes.messageArea}>
            {messages.map(item =>
            <Message messageTime='9:30' messageText={item} />
            )}
        </List>
        
    )
}

export default MessagesBlock;