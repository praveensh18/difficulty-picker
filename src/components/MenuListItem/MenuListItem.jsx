import React, { useState } from 'react';
import s from './style.module.css';

const MenuListItem = (props) => {
  const [isHover, setIsHover] = useState(false);

  const getBackground = () => {
    if (isHover) {
      return '#a5e9ff';
    } else if(props.isSelected) {
      return '#36b4dc';
    } else {
      return '#ccc';
    }
  };

  const addBackground = () => {
    setIsHover(true);
  };

  const removeBackground = () => {
    setIsHover(false);
  };

  const onSelectDifficulty = () => {
    props.onItemClick(props.difficulty)
  }

  return (
    <div
      onClick={onSelectDifficulty}
      className={s.container}
      style={{ backgroundColor: getBackground() }}
      onMouseEnter={addBackground}
      onMouseLeave={removeBackground}
    >
      Set to : {props.difficulty}
    </div>
  );
};

export default MenuListItem;
