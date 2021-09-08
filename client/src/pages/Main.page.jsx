import React, { useEffect, useState } from "react";
import LoginPage from './Login.page';
import Chat from "../components/Chat";
import axios from 'axios'

const MainPage = () => {
    const [ logging, setLogging] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentDialog, setCurrentDialog] = useState(null);

    

    if(logging){
        return <LoginPage setLogging={setLogging} />
    }

    if(loading){
        return <div>Loading....</div>
    }

    return(
        <Chat currentDialog={currentDialog} setCurrentDialog={setCurrentDialog} data ={data}/>
    )
}

export default MainPage;