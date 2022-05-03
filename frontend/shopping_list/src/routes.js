import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './pages/products';
import Beginning from './pages/beginning';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Beginning} />
                <Route path='/products' exact component={Products} />
            </Switch>
        </BrowserRouter>
    )
}