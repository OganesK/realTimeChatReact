import React, { useState } from "react";
import LoginPage from './Login.page';
import Chat from "../components/Chat";

const MainPage = () => {
    const [ logging, setLogging] = useState(true);

    if(logging){
        return <LoginPage setLogging={setLogging} />
    }

    return(
        <Chat />
    )
}

export default MainPage;