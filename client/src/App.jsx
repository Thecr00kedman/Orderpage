import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'
import Orders from './Pages/Orders'


function App() {

  return (
    <Router>
       <Routes>
          <Route path='/' element={<Orders/>}/>
       </Routes>
    </Router>
    
  )
}

export default App
