import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';
import s from './style.module.css';
import {DIFFICULTIES} from './constants';

const MenuList = (props) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => (
				<MenuListItem
        key={difficulty}
        difficulty={difficulty}
        onItemClick={props.onMenuItemClick}
        isSelected={props.difficulty === difficulty}
      />
			))}
    </div>
  );
};

export default MenuList;
