import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './pages/products';
import Beginning from './pages/beginning';
import AddProducts from './pages/addProduct';
import ProductDetails from './pages/productDetails';
import EditProduct from './pages/editProduct';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Beginning} />
                <Route path='/products' component={Products} />
                <Route path='/add' component={AddProducts} />
                <Route path='/details/:id' component={ProductDetails} />
                <Route path='/edit/:id' component={EditProduct} />
            </Switch>
        </BrowserRouter>
    )
}