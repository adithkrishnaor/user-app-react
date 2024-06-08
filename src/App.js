import logo from './logo.svg';
import './App.css';
import SearchUser from './components/SearchUser';
import DeleteUser from './components/DeleteUser';
import AddUser from './components/AddUser';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddUser/>}/>
        <Route path='/search' element={<SearchUser/>}/>
        <Route path='/delete' element={<DeleteUser/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
