import Counter from './Components/Counter'
import HoverComponent from './Components/HoverComponent'
import LoginForm from './Components/LoginForm'
import Page from './Components/Page'
import SearchComponent from './Components/SearchComponent'
import Task1 from './Components/Task1'
import Task15 from './Components/Task15'
import Task2 from './Components/Task2'
import ThemeToggle from './Components/ThemeToggle'
import UserList from './Components/UserList'
import Notification from './Components/Notification'
import CopyButton from './Components/CopyButton'
import ResponsiveComponent from './Components/ResponsiveComponent'
import NetworkStatus from './Components/NetworkStatus'
import LocationTracker from './Components/LocationTracker'
function App() {
  return (
   <>
   <Task1/>
   <Task2/>
   <Task15/>
   <ThemeToggle/>
   <UserList/>
   <LoginForm/>
   <SearchComponent/>
   <Counter/>
   <h1 style={{textAlign:"center"}}>Task8</h1>
   <HoverComponent/>
   <Page/>
   <Notification/>
   <CopyButton/>
   <ResponsiveComponent/>
   <NetworkStatus/>
   <LocationTracker/>
   </>
  )
}

export default App