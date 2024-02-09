import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './ui_app/LoginPage';
import Navbars from './ui_app/Navbars'
import BookService from './ui_app/BookService';
// import BookService from './ui_app/BookService';

function App() {
  return (
    <div>
      {/* <BookService/> */}
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/navbar' element={<Navbars/>}/>
        {/* <Route path='/book service' element={<BookService/>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
