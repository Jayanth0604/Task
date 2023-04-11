import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { Routes,Router,Route, } from 'react-router-dom';
import OTP from './OTP';
import List from './List';
import Footer from './Footer';


function App() {

  return (
    <div className="App">
  
      <Navbar />
  

      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/OTP' element={<OTP/>}/>
        <Route path='/List' element={<List/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
