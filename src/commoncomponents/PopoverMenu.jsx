import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function PopOverMenu({ title, shareValues,handleEmployeeClientValues }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showRevenue, setShowRevenue] = useState("")
    const [showAssets, setShowAssets] = useState("")
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleShareRevenueAssetMenuItemClick = (value) => {
        console.log("ff", value); 
        shareValues(value)
        setAnchorEl(null); 
        };

        const handleEmployeeClientMenuItemClick = (value) => {
            console.log("employeclient", value); 
            handleEmployeeClientValues(value)
            setAnchorEl(null); 
            };
    
    const sharesRevenuesAssetsMenus = ["Shares", "Revenues", "Assets"]
    const employeeClientMenus = ["Employees", "Clients"]
    return (
        <div >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{margin:'0 -20px 0 0'}}
            >
                <MoreVertIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {title === "Employees" || title === "Clients" ?
                    <>
                        {employeeClientMenus?.map((employeeClientMenu) => (
                            <MenuItem key={employeeClientMenu} onClick={() => handleEmployeeClientMenuItemClick(employeeClientMenu)}>
                                {employeeClientMenu}
                            </MenuItem>))}
                    </>
                    :
                    <>
                        {sharesRevenuesAssetsMenus?.map((sharesRevenuesAssetsMenu) => (
                            <MenuItem key={sharesRevenuesAssetsMenu} onClick={() => handleShareRevenueAssetMenuItemClick(sharesRevenuesAssetsMenu)}>
                                {sharesRevenuesAssetsMenu}
                            </MenuItem>))}
                    </>
                }


            </Menu>
        </div>
    );
}