import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function PopOverMenu({shareValues}) {
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
    const handleMenuItemClick = (value) => {
        console.log("ff",value); // Log the clicked menu item's value to the console
        shareValues(value)
        setAnchorEl(null); // Close the menu after selecting a menu item
    };

    const SharesMenus = ["Shares", "Revenues", "Assets"]
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
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
                {SharesMenus?.map((shares) => (
                    <MenuItem key={shares} onClick={() => handleMenuItemClick(shares)}>
                        {shares}
                    </MenuItem>))}

            </Menu>
        </div>
    );
}