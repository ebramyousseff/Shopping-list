import {Container} from 'react-bootstrap'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Store from './Components/Store'
import About from './Components/About'
import NavBar from './Components/NavBar'
import ShoppingCartProvider from './Context/ShoppingCartContext'






const App = () => {
  return (
    <ShoppingCartProvider>
    <NavBar/>
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
};

export default App
