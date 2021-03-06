
import './App.css';
import Header from './Components/Header/Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Plus from './Components/Plus/Plus';
import Dashboard from './Components/Loan/Dashboard/Dashboard';
import Details from './Components/Loan/Details/Details';
import bgg from './img/bgg.jpg'


function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${bgg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      height: "100%",
      marginBottom: 0
    }}>


      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Plus></Plus>
              <Footer></Footer>

            </Route>
            <Route path="/home">
              <Home></Home>
              <Plus></Plus>
              <Footer></Footer>
            </Route>

            <Route path="/loan">
              <Dashboard></Dashboard>

            </Route>

            <Route path="/detail/:serviceId">
              <Details></Details>
              <Footer></Footer>
            </Route>








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
