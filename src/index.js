import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Contact from './pages/Contact';
// import Page from './pages/Page';
// import Shop from './pages/Shop'
import { BrowserRouter} from 'react-router-dom';
import Countdown from 'react-countdown';
import Timer from './pages/Timer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>

      <App />
      
    </BrowserRouter>
  </React.StrictMode>
  // <Router>
  //   <Routes>
  //     <Route path='/' element={<App/>}/>
      
  //     <Route path='/contact' element={<Contact/>}/>
  //     <Route path='/page' element={<Page/>}/>
  //     <Route path='/shop' element={<Shop/>}/>
  //   </Routes>
  // </Router>
);