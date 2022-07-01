import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import List from './List';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={List}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;