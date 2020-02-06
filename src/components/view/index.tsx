import React from 'react';
import { get, map } from 'lodash';
import classNames from 'classnames';
import {withRouter, RouteComponentProps} from "react-router-dom";
import Backendless from "backendless";

import './style.scss';

interface IProps {

}

class View extends React.Component<IProps & RouteComponentProps> {

    state = {
        loading: true,
        item: {
            title: null,
        },
    };

    data = Backendless.Data.of('items');

    componentDidMount(): void {
        const { match } = this.props;

        const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`id = '${get(match, 'params.id')}'`);
        this.data.find(queryBuilder).then(item => {
            this.setState({ item: item[0], loading: false });
        })
    }

    render() {
        return (
            <div className={classNames(['view', { loading: this.state.loading }])}>
                <h1>{this.state.item.title}</h1>
                <ul className={'params'}>
                    {map(this.state.item, (val, key) => (
                        <li key={key}><b>{key}</b> {val}</li>
                    ))}
                </ul>

            </div>
        );
    }


}

export default withRouter(View);
