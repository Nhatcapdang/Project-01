import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../Page/PageHome/PageHome'
import Shop from '../Page/Shop/Shop'
import Blog from '../Page/Blogs/PageBlogs'
import Contact from '../Page/Contacts/Contacts';
import NotFound from '../Page/NotFound/NotFound';
import PageRegister from '../Page/PageRegister/PageRegister';
import PageLogin from '../Page/PageLogin/PageLogin';
import SpecialOffers from '../Page/PageSpecialOffers';
import PageManageProduct from './PageManageProduct';
import PageProfile from './PageProfile/index';
import { AuthProvider } from "../Contexts/AuthContext"
import PrivateRoute from './PrivateRouter';
import PageForgotPassword from "./PageResetPassword"
import PageChangeProfile from "./PageChangeProfile"



class Direction extends React.Component {

    render() {
        return (
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/register" component={PageRegister} />
                        <Route path="/login" component={PageLogin} />
                        <Route path="/resetpassword" component={PageForgotPassword} />
                        <Route path="/update-profile" component={PageChangeProfile} />
                        <Route path="/specialoffers" component={SpecialOffers} />
                        <Route path="/manageproduct" component={PageManageProduct} />
                        <Route path="/profile" component={PageProfile} />
                        <PrivateRoute path="/update-profile" component={PageChangeProfile} />
                        <PrivateRoute path="/" component={PageProfile} />
                        <Route component={NotFound} />
                    </Switch>
                </AuthProvider>
            </Router>
        );
    }
}

export default Direction;
