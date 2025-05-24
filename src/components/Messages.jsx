import ChatMessage from "./ChatMessage"

// for firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import firebaseConfig from "../secrets/firebaseSecrets.json";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore();

function Messages() {

    const messages = firestore.collection("messages");
    const query = messages.orderBy("time", "desc").limit(12);

    const [messageArray] = useCollectionData(query, {idField: "id"})

    return (
        <div id="messageslistreal">
        {messageArray && messageArray.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
        </div>
    )
}

export default Messages