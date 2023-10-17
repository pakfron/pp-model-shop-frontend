
import Loading from './components/Loading'
import { useAuth } from './context/AuthContext'
import Route from './router/Route'

function App() {

  const{loading}=useAuth()

if(!loading){
  return <Loading/>
}

  return (
    <>
 
     <Route/>
     
    </>
  )
}

export default App
