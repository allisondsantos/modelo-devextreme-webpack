import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Home } from '@/presentation/pages/home/home';

const Router: React.FC = () => {
    return (        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch> 
        </BrowserRouter>        
    )
}
    
export default Router;