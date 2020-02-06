import React from 'react';

import Navigation from '../navigation';
import Filter from '../filter';
import Content from '../content';

import './style.scss';
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {

    state = {
        filters: {
            free: true,
            open: true,
            point: null,
            title: null,
            keywords: null,
            organizator: null,
            date: null,
        }
    }


    onFilterChange = (filters: any) => {
        this.setState({ filters, ...filters })
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <Navigation/>
                    <Content filters={this.state.filters}/>
                    <Filter onChange={this.onFilterChange}/>
                </Router>
            </div>
        );
    }
}

export default App;
