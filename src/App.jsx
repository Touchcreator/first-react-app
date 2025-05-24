import Messages from "./components/Messages"
import NewMessage from "./components/NewMessage"
import Sidebar from "./components/Sidebar"
import "./App.css"

function App() {
  let username = localStorage.getItem("username")

  while (!username) {
    username = prompt("Select a username").trim();
  }
  localStorage.setItem("username", username)


  return (
    <>
      <div id="main">
        <div id="sidebar" className="section"><Sidebar/></div>
        <div id="other-side" >
          <div id="messages" className="section"><Messages/></div>
          <div id="new-message" className="section"><NewMessage/></div>
        </div>
      </div>
    </>
  )
}

export default App
