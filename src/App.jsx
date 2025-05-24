import Messages from "./components/Messages"
import NewMessage from "./components/NewMessage"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"))

  useEffect(() => {
    if (username === null) {
      const thing = prompt("Select a username")
      setUsername(thing)
      localStorage.setItem("username", thing)
    }
  }, [])


  return (
    <>
      <div id="main">
        <div id="other-side" >
          <div id="messages" className="section"><Messages/></div>
          <div id="new-message" className="section"><NewMessage/></div>
        </div>
      </div>
    </>
  )
}

export default App
