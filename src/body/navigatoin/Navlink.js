import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import Search from '../Destination/Search'
import SearchResult from '../Destination/SearchResult'
import Notfound from '../Notfound'
import PrivateRoute from './PrivateRoute'
import About from '../About';
import Blog from '../Blog';
import Raf from '../Destination/Raf';
const Navlink = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route exact path="/login"><Login></Login></Route>
                <Route exact path="/signup"><Signup></Signup></Route>
                <Route exact path="/about"><About></About></Route>
                <Route exact path="/blog"><Blog></Blog></Route>
                <Route exact path="/map"><Raf></Raf></Route>
                <PrivateRoute exact path="/destination"><Search></Search></PrivateRoute>
                <PrivateRoute exact path="/destination/:id"><Search></Search></PrivateRoute>
                <PrivateRoute exact path="/result"><SearchResult></SearchResult></PrivateRoute>
                <Route><Notfound></Notfound></Route>
            </Switch>
        </div>
    );
};

export default Navlink;