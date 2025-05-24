// for firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import firebaseConfig from "../secrets/firebaseSecrets.json";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore();

function NewMessage() {
    const [msgValue, setMsgValue] = useState("");

    const messages = firestore.collection("messages");

    const sendMessage = async(value) => {
        await messages.add({
            message: value,
            username: localStorage.getItem("username"),
            time: firebase.firestore.FieldValue.serverTimestamp()
        });

        setMsgValue("");
    }

    return (
        <>
        <input id="yourmessage" value={msgValue} onChange={(e) => setMsgValue(e.target.value)}/>
        <input type="button" value="Send" id="send-btn" onClick={() => sendMessage(msgValue)}/>
        </>
    )
}

export default NewMessage