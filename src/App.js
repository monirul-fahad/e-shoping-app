import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Explore from "./Pages/Explore/Explore/Explore";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Sidebar from "./Pages/Sidebar/Sidebar";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Reviews from "./Pages/Dashboard/Reviews/Reviews";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Reviews></Reviews>
            </PrivateRoute>
            <PrivateRoute path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Sidebar></Sidebar>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
