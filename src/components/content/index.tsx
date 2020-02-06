import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../list';
import View from '../view';

import './style.scss';

const Content = ({ filters }: any) => {
  return (
    <div className="content">
        <Switch>
            <Route path={'/'} exact>
                <List filters={filters}/>
            </Route>
            <Route path={'/view/:id'}>
                <View/>
            </Route>
            <Route>
                404
            </Route>
        </Switch>
    </div>
  );
}

export default Content;
