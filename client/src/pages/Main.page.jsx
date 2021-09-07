import React, { useEffect, useState } from "react";
import LoginPage from './Login.page';
import Chat from "../components/Chat";
import axios from 'axios'

const MainPage = () => {
    const [ logging, setLogging] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentDialog, setCurrentDialog] = useState(null);

    
    useEffect(() => {
        const data = async () => {
            const data = await axios.get('http://localhost:3001/api/data');
            setData(data.data[0]);
            console.log(data.data)
            setLoading(false);
        }
        data();
    }, [])

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