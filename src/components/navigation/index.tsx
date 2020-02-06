import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <ul>
            <li><NavLink className={'btn'} to={'/'} exact >Список</NavLink></li>
            <li><NavLink className={'btn'} to={'/view'} >Просмотр</NavLink></li>
            <li><NavLink className={'btn'} to={'/users'} exact >Участники</NavLink></li>
            <li><NavLink className={'btn'} to={'/feedback'} exact >Написать админу</NavLink></li>
            <li><NavLink className={'btn'} to={'/block'} exact >Заблокировать</NavLink></li>
        </ul>
        <ul>
            <li><NavLink className={'btn'} to={'/invite'} exact >Пригласить</NavLink></li>
            <li><NavLink className={'btn'} to={'/create'} exact >Создать</NavLink></li>
        </ul>
    </div>
  );
}

export default Navigation;
