import './App.css';
import Header from './Components/Header';
import { ToastContainer} from 'react-toastify';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import DashBoard from './Components/Dashboard';
import Footer from './Components/Footer';
import AddCustomer from './CustomerComponenets/AddCustomer';
import CustomerDashBoard from './Components/CustomerDashboard';

function App() {
  return (
      <Router>
        <ToastContainer />
        <Header />
        <div>
        <br></br>
        <br></br>
              <Switch>
                {/* public routes */}
                <Route exact path='/' component={Home} />
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={AddCustomer}></Route>


                <Route path="/dashboard/admin" component={DashBoard}></Route>

                <Route path="/dashboard/customer" component={CustomerDashBoard}></Route>

              </Switch>
        </div>
      </Router>
  );
}

export default App;
