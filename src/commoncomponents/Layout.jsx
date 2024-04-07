import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaThList, FaBars, FaTh, FaUserAlt } from "react-icons/fa"
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Navbar from './Navbar';

function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen) // Corrected toggle logic
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
        <div className='row' style={{ marginRight: '0px', background: '#FAFAFA' }}>
            <div className='col-md-2 col-sm-12 w-100' style={{ display: isOpen ? 'block' : 'none' }}>
                <div className='sidebar'>
                    <div className='top_section' style={{ padding: isOpen ? '10px' : '25px' }}>
                        <ListItemButton style={{ display: isOpen ? "flex" : "none" }}>
                            <ListItemAvatar>
                                <Avatar alt={'R'} />
                            </ListItemAvatar>
                            <ListItemText primary={'Dany'} />
                        </ListItemButton>
                        <FaBars onClick={toggle} />
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active" style={{ width: isOpen ? '' : 'fit-content' }}>
                            <div className='icon'>{item.icon}</div>
                            <div className='sidebarText' style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='col-md-10 w-100' style={{ marginLeft: '-10px' }}>
                <Navbar />
                <main>

                    {children}</main>
            </div>
        </div>
    );
}

export default Layout;
