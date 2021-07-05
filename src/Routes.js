import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

//user
// import Signup from "./user/Signup";
// import Signin from "./user/Signin";
// import Resetpassword from "./user/Resetpassword";

//page
import Home from "./Home";
import BabsonCollege from "./babson-college/BabsonCollege";
import BabsonChinaClub from "./babson-china-club/BabsonChinaClub";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/babson-college" exact component={BabsonCollege} />
        <Route path="/babson-china-club" exact component={BabsonChinaClub} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
