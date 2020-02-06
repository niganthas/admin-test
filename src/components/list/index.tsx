import React from 'react';
import Backendless from 'backendless';
import { Link } from "react-router-dom";
import classNames from 'classnames'

import { map, isEqual, isNil, isString } from 'lodash';
import './style.scss';

interface IProps {
    filters: any;
}

interface IState {
    items: IItem[];
    loading: boolean;
}

interface IItem {
    id: number;
    title: string;
}

class List extends React.Component<IProps, IState> {

    state = {
        items: [],
        loading: true,
    };

    data = Backendless.Data.of('items');

    componentDidMount(): void {
        this.updateItems(this.props.filters);
    }

    updateItems(filters: any) {
        const queryBuilder = Backendless.DataQueryBuilder.create();
        const whereClause:string[] = [];

        map(filters, (val, key) => {

            if(isString(val) && val !== '') {
                return whereClause.push(`${key} LIKE '%${val}%'`);

            }

            if(!isNil(val) && val !== '') {
                whereClause.push(`${key} = ${val}`);
            }

        });

        queryBuilder.setWhereClause(whereClause.join(' AND '));

        this.setState({ loading: true });
        this.data.find(queryBuilder).then((items: any) => {
            this.setState({ items, loading: false, })
        })
    }

    componentWillUpdate({ filters }: Readonly<IProps>): void {
        if (!isEqual(filters, this.props.filters)) {
            this.updateItems(filters);
        }
    }


    render() {
       return (
           <div className={classNames('list', {loading: this.state.loading})}>
               {
                   this.state.items.length
                       ? this.state.items.map((item: IItem) => {
                           return (
                               <Link key={item.id}  className={'item-link'} to={'/view/'+item.id}>
                                   <article key={item.id} className={'item'}>
                                       <div className={'item-img'}>
                                           <img src="item.png" alt=""/>
                                       </div>
                                       <div className={'item-desc'}>
                                           <h4>{item.title}</h4>
                                           <time>Четверг</time>
                                       </div>
                                   </article>
                               </Link>

                           )
                       })
                       : "Ничего не найдено"
               }

           </div>
       );
   }
}

export default List;
