import LogOutButton from "../components/LogOutButton"
import LoginButton from "../components/LogginButton"
import Profile from "../components/Profile"

function App() {
  return (
    <div className="App">
      <h1> Application</h1>
      <LoginButton/>
      <Profile/>
      <LogOutButton/>
    </div>
  )
}

export default App
