import logo from './logo.svg';
import './App.css';
import SearchUser from './components/SearchUser';
import DeleteUser from './components/DeleteUser';
import AddUser from './components/AddUser';

function App() {
  return (
    <div>
      <SearchUser/>
      <DeleteUser/>
      <AddUser/>
    </div>
  );
}

export default App;
