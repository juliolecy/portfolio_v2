import * as k from './styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ReactSwitch from 'react-switch';
import { MdOutlineDarkMode } from 'react-icons/md';
import { FaRegSun } from 'react-icons/fa';

const Toggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <k.Container>
      <MdOutlineDarkMode />

      <ReactSwitch
        onChange={toggleTheme}
        checked={theme.title === 'dark' ? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor="#ffffff"
        onHandleColor="#00d9ff"
        offColor="#e8e8e8"
        offHandleColor="#3c3c3c"
      ></ReactSwitch>

      <FaRegSun />
    </k.Container>
  );
};

export default Toggle;
