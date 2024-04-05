import React, { useState } from 'react';
import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaThList, FaBars, FaTh, FaUserAlt } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/productlist",
            name: "Productlist",
            icon: <FaThList />
        },
    ]

    return (
        <div className='sidebarContainer'>
            <div style={{ width: isOpen ? "200px" : "65px" }} className='sidebar'>
                <div className='top_section' style={{ padding: isOpen ? '10px' : '25px' }}>
                    <ListItemButton style={{ display: isOpen ? "flex" : "none" }}>
                        <ListItemAvatar>
                            <Avatar
                                alt={'R'}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={'Dany'} />
                    </ListItemButton>
                    <FaBars onClick={toggle} />
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{ width: isOpen ? '' : 'fit-content' }}>
                        <div className='icon'>{item.icon}</div>
                        <div className='sidebarText' style={{ display: isOpen ? "block" : "none"}}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;