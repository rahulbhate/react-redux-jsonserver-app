import React from "react";
import "../App.css";
import "../../style.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import CustomersPage from "./customers/CustomersPage";
import SlidersPage from "./slider/slidersPage";
import ManageCustomerPage from "./customers/ManageCustomerPage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={CustomersPage} />
        <Route path='/customers' component={CustomersPage} />
        <Route path='/customer/:slug' component={ManageCustomerPage} />
        <Route path='/customer' component={ManageCustomerPage} />
        <Route path='/images' component={SlidersPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </div>
  );
}

export default App;
