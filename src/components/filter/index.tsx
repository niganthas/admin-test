import React from 'react';
import classNames from 'classnames';

import './style.scss';

export interface IProps {
    onChange(filters: any): void;
}

class Filter extends React.Component<IProps> {

    state = {
        free: true,
        open: true,
        point: undefined,
        title: undefined,
        keywords: undefined,
        organizator: undefined,
        date: undefined,
    }

    onFilterChange({ target } : any) {
        this.setState({
            [target.name]: target.type === 'button' ?
                target.value === 'true' : target.value,
        }, () => this.props.onChange(this.state));
    }


    render() {
        return (
            <div className="filter">
                <ul className={'tabs'}>
                    <li className={'active'}>Фильтр</li>
                    <li>Категории</li>
                </ul>
                <div className={'filter-row double'}>
                    <div className={'filter-col'}>
                        <button
                            name={'free'}
                            type="button"
                            className={classNames(['btn', { 'active' : !this.state.free }])}
                            value={'false'}
                            onClick={(e) => this.onFilterChange(e)}
                        >
                            Платные
                        </button>
                    </div>
                    <div className={'filter-col'}>
                        <button
                            name={'free'}
                            type="button"
                            className={classNames(['btn', { 'active' : this.state.free }])}
                            onClick={(e) => this.onFilterChange(e)}
                            value={'true'}
                        >
                            бесплатные
                        </button>
                    </div>
                </div>
                <div className={'filter-row'}>
                    <input name={'point'} type="text" placeholder={'Населенный пункт'} value={this.state.point} onChange={(e) => this.onFilterChange(e)}/>
                </div>
                <div className={'filter-row'}>
                    <input name={'title'} type="text" placeholder={'Название'} value={this.state.title} onChange={(e) => this.onFilterChange(e)} />
                </div>
                <div className={'filter-row'}>
                    <input name={'keywords'} type="text" placeholder={'Ключевые слова'} value={this.state.keywords} onChange={(e) => this.onFilterChange(e)} />
                </div>
                <div className={'filter-row'}>
                    <input name={'organizator'} type="text" placeholder={'Организатор'} value={this.state.organizator} onChange={(e) => this.onFilterChange(e)} />
                </div>
                <div className={'filter-row double'}>
                    <div className={'filter-col'}>
                        <button
                            name={'open'}
                            type="button"
                            className={classNames(['btn', { 'active' : this.state.open }])}
                            onClick={(e) => this.onFilterChange(e)}
                            value={'true'}
                        >
                            Открытые
                        </button>
                    </div>
                    <div className={'filter-col'}>
                        <button
                            name={'open'}
                            type="button"
                            className={classNames(['btn', { 'active' : !this.state.open }])}
                            onClick={(e) => this.onFilterChange(e)}
                            value={'false'}
                        >
                            Закрытие
                        </button>
                    </div>
                </div>
                <div className={'filter-row'}>
                    <button className={'btn'}>Дата</button>
                </div>
            </div>
        );
    }

}

export default Filter;
