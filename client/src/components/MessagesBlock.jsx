import React from "react";
import Message from './Message'
import List from '@material-ui/core/List';

const MessagesBlock = ({currentDialog, messages, classes }) => {
    const currentMessages = messages.friendlist.filter(item => item.name === currentDialog)
    console.log(currentMessages)
    if(currentDialog === null){
        return <div>Select Dialog</div>
    }
    return(
        <List className={classes.messageArea}>
            {currentMessages[0].dialog.map(item =>
            <Message from={item.from} messageTime={item.time} messageText={item.value} />
            )}
        </List>
        
    )
}

export default MessagesBlock;