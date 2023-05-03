import './App.css';
import Header from './Header';
import Layout from './Layout';
import Post from './Post';
import {Route,Routes} from 'react-router-dom';
import IndexPage from './pages/index-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

function App() {
  return (
      <Routes>
        <Route path='/' element ={<Layout/>}>
        <Route index element={
          <IndexPage/>
        }/>
        <Route path='/login' element = {
          <LoginPage/>
        }/>
        <Route path='/register' element = {
          <RegisterPage/>
        }/>
        </Route>
      </Routes>
      
  );
}

export default App;
