import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';


const MessageInput = ({}) => {
    const [message, setMessage] = useState('');

    const messageInputHandler = (e) => {
        e.preventDefault();
        setMessage(e.target.value)
    }

    const messageInputButtonHandler = async () => {
        if(message !== '')
            {await axios.post('http://localhost:3001/api/newMessage',{
                message
            })}
        setMessage('');
    }

    return(
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={11}>
                <TextField id="outlined-basic-email" label="Type Something" fullWidth
                value={message}
                onChange={messageInputHandler}/>
            </Grid>
            <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add"
                onClick={messageInputButtonHandler}>
                    <SendIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}

export default MessageInput;