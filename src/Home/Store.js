import React, { useState } from 'react';
import StoreData from './StoreData.js';
import EventFile from './Event.js';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


const Store = () => {
    const [value, setValue] = useState(0);
    const [storeTab, setStoreTab] = useState(true);
    const [eventTab, setEventTab] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const switchToEventTab = () => {
        setEventTab(true);
        setStoreTab(false);
    };

    const switchToStoreTab = () => {
        setEventTab(false);
        setStoreTab(true);
    };

    const tabStyles = {
        cursor: 'pointer',
        marginRight: '20px', // Adjust this as needed
        fontWeight: 'bold',
        fontSize: '18px',
        color: 'white',
        opacity: 0.8,
        transition: 'opacity 0.3s',
        '&:hover': {
            opacity: 1,
        },
    };

    return (
        <>
            {/* <AppBar position="fixed" style={{ backgroundColor: '#2E3B4E' }}>
                <Toolbar variant="dense">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        style={{ flexGrow: 1 }}
                    >
                        <Tab label="Store" onClick={switchToStoreTab} style={tabStyles} />
                        <Tab label="Event" onClick={switchToEventTab} style={tabStyles} />
                    </Tabs>
                </Toolbar>
            </AppBar> */}
            <div style={{ paddingTop: '70px' }}>
                {storeTab && <StoreData />}
                {eventTab && <EventFile />}
            </div>
        </>
    );
}

export default Store;
