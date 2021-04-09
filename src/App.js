import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Headers from './Components/Headers/Headers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Headers/Home/Home';
import SearchBar from './Components/SearchBar/SearchBar';
import Admin from './Components/Admin/Admin';
import { createContext, useState } from 'react';
import Cart from './Components/Cart/Cart';
import BreakFast from './Components/BreackFast/BreakFast';
import Dinner from './Components/Dinner/Dinner';
import Food from './Components/Food/Food';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DeliveryDetails from './Components/DeliveryDetails/DeliveryDetails';
import DeliveryPlace from './Components/DeliveryPlace/DeliveryPlace';
import Calling from './Components/Calling/Calling';
export const UserContent = createContext()
export const UserContext = createContext()
export const FoodContext = createContext()
export const DeliverContext = createContext()
export const CalculateContext = createContext()
export const OrderPlaceContext = createContext()
function App() {
  const [count,setCount] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [food,setFood] = useState([])
  const [item,setItem] = useState(1)
  const [total,setTotal] = useState(0)
  const [orders,setOrders] = useState([])
  return (
    <div className="App">
      <CalculateContext.Provider value={[total,setTotal]}>
      <OrderPlaceContext.Provider value={[orders,setOrders]}>
      <DeliverContext.Provider value={[item,setItem]}>
      <FoodContext.Provider value ={[food,setFood]} >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserContent.Provider value={[count,setCount]}>
      <Router>
      <Headers></Headers>
      
        <Switch>
       <Route exact path='/'>
        <SearchBar></SearchBar>
           <BreakFast></BreakFast>
         </Route> 
        <Route path='/home'>
        <SearchBar></SearchBar>
           <BreakFast></BreakFast>
         </Route>
         <Route path='/lunch'>
         <SearchBar></SearchBar>
           <Home></Home>
         </Route>
         <Route path='/breakfast'>
         <SearchBar></SearchBar>
           <BreakFast></BreakFast>
         </Route>
         <Route path='/dinner'>
         <SearchBar></SearchBar>
           <Dinner></Dinner>
         </Route>
         <PrivateRoute path='/admin'>
           <Admin></Admin>
         </PrivateRoute>
         <PrivateRoute path='/cart'>
          <Cart count={count}></Cart>
           
         </PrivateRoute>
         <Route path='/login'>
           <Login></Login>
         </Route>
         
         <Route path='/delivery'><DeliveryDetails></DeliveryDetails></Route>
         <PrivateRoute path='/foods/:id'>
           <Food></Food>
         </PrivateRoute>
         <Route path='/orders'>
           <DeliveryPlace></DeliveryPlace>
         </Route>
         <Route path='/calling'>
           <Calling></Calling>
         </Route>
         <Route path='*'>
           <h3 className="text-danger text-center " style={{backgroundColor:'white',height:'100vh'}}>
             404-Link not found
           </h3>
         </Route>
        </Switch>
      </Router>
      </UserContent.Provider>
      </UserContext.Provider>
      </FoodContext.Provider>
      </DeliverContext.Provider>
      </OrderPlaceContext.Provider>
      </CalculateContext.Provider>
    </div>
  );
}

export default App;
