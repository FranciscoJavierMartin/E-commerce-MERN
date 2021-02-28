import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from '../../constants/routes';
const { SubMenu, Item } = Menu;

const Header: React.FC = () => {
  const [current, setCurrent] = useState<string>('');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Item key='home' icon={<HomeOutlined />}>
        <Link to={HOME_PAGE_ROUTE}>Home</Link>
      </Item>
      <Item key='register' className='float-right' icon={<UserAddOutlined />}>
        <Link to={REGISTER_PAGE_ROUTE}>Register</Link>
      </Item>
      <Item key='login' className='float-right' icon={<UserOutlined />}>
        <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
      </Item>
      <SubMenu icon={<SettingOutlined />} title='Username'>
        <Item key='setting:1'>Option 1</Item>
        <Item key='setting:2'>Option 2</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
