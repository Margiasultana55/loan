
import './App.css';
import Header from './Components/Header/Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import NewService from './Components/NewService/NewService';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Book from './Components/Book/Book';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Support from './Components/Support/Support';



function App() {
  return (
    <div className="">


      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>

            <Route path='/orders'>
              <MyOrder></MyOrder>



            </Route>
            <Route path='/about'>
              <About></About>
              <Footer></Footer>

            </Route>
            <Route path='/support'>
              <Support></Support>
              <Footer></Footer>

            </Route>
            <Route path='/manage'>
              <ManageAllOrders></ManageAllOrders>



            </Route>
            <Route path='/service'>
              <NewService></NewService>



            </Route>
            <Route path='/signup'>
              <Signup></Signup>
              <Footer></Footer>


            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Book></Book>

              <Footer></Footer>

            </PrivateRoute>

            <Route exact path='*'>
              <NotFound></NotFound>

            </Route>
          </Switch>


        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
