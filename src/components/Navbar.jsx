import React from 'react'
import { Button, Menu, Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BuldOutlined,
  FundOutlined,
  MenuOutlined
} from '@ant-design/icons'
import  icon  from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link>CryptoVerse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">

          </Button> */}
      </div>
    </div>
  )
}

export default Navbar
