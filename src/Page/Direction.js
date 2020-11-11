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
import PageLogin from './PageLogin/PageLogin';


class Direction extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <PageLogin />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Direction;
