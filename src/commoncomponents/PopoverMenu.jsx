import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function PopOverMenu({ title, shareValues, handleEmployeeClientValues }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const sharesRevenuesAssetsMenus = ["Shares", "Revenues", "Assets"]
    const employeeClientMenus = ["Employees", "Clients"]

    // popoverMenu click function to open
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // popoverMenu click function to close
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Share the ShareRevenueAsset Datas to CardHeader component by using call back function. 
    const handleShareRevenueAssetMenuItemClick = (value) => {
        shareValues(value)
        setAnchorEl(null);
    };

    // Share the EmployeeClient Datas to CardHeader component by using call back function. 
    const handleEmployeeClientMenuItemClick = (value) => {
        handleEmployeeClientValues(value)
        setAnchorEl(null);
    };

    return (
        <div >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ margin: '0 -20px 0 0' }}
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
                                <PermIdentityIcon />
                                <Typography sx={{ fontSize: '12px', marginLeft: '10px' }}>{employeeClientMenu}</Typography>
                            </MenuItem>))}
                    </>
                    :
                    <>
                        {sharesRevenuesAssetsMenus?.map((sharesRevenuesAssetsMenu) => (
                            <MenuItem key={sharesRevenuesAssetsMenu} onClick={() => handleShareRevenueAssetMenuItemClick(sharesRevenuesAssetsMenu)}>
                                <MonetizationOnIcon />
                                <Typography sx={{ fontSize: '12px', marginLeft: '10px' }}>{sharesRevenuesAssetsMenu}</Typography>
                            </MenuItem>))}
                    </>
                }
            </Menu>
        </div>
    );
}