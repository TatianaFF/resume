import React from 'react'
import { Menu, Image, Card } from 'antd'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'

const { Meta } = Card

const Sidebar = ({ firstName, lastName, photo }) => {

    return (
        <Card
            style={ { width: '100%', height: '100%' } }
            cover={ <Image src={ photo } alt='loading'/> }>
            <Meta style={ { textAlign: "center" } } title={ firstName + ' ' + lastName }/>
            <Menu style={ { margin: '30px 10px 10px', fontSize: 16, borderRight: "none" } } defaultSelectedKeys={ ['1'] }>
                <Menu.Item key={ 1 }>
                    <NavLink to="/">Обо мне</NavLink>
                </Menu.Item>
                <Menu.Item key={ 2 }>
                    <NavLink to="/education">Образование</NavLink>
                </Menu.Item>
                <Menu.Item key={ 3 }>
                    <NavLink to="/skills">Технические навыки</NavLink>
                </Menu.Item>
                <Menu.Item key={ 4 }>
                    <NavLink to="/experience">Опыт работы</NavLink>
                </Menu.Item>
            </Menu>
        </Card>
    )
}

export default Sidebar