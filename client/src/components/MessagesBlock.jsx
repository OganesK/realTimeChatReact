import React from "react";
import Message from './Message'
import List from '@material-ui/core/List';

const MessagesBlock = ({ classes }) => {

    const messageContents = [{Time: '9:30', Text: 'Her'}, {Time: '9:31', Text: 'Huy'}]

    return(
        <List className={classes.messageArea}>
            {messageContents.map(item =>
            <Message messageTime={item.Time} messageText={item.Text} />
            )}
        </List>
        
    )
}

export default MessagesBlock;