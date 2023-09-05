import * as React from 'react';
import OldAgeMap from './OldAgeMap.js';
import NgoList from '../Newngo/NgoList.js';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const NewNgo = () => {

    const [value, setValue] = React.useState(0);
    const [Store, setStore] = React.useState(true);
    const [Event, setEvent] = React.useState(false);

    const Navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const EventMethod = () => {
        setEvent(true);
        setStore(false);
    };

    const StoreMethod = () => {
        setEvent(false);
        setStore(true);
    };
    const styles = {
        tab: {
            cursor: 'pointer',
            marginRight: '6px', // Adjust this as needed
        },
    };

    return (
        <>
            <div style={{ backgroundColor: "#EAE7DC", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            boxShadow: 3,
                            padding: 10,
                            borderRadius: 8,
                            backgroundColor: '#f5f5f5',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            backgroundColor: "#3A3845",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Box
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 5,
                                    margin: 3,
                                    backgroundColor: "#FF6B6B",
                                    color: "white",
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 0px 20px rgba(255, 107, 107, 0.7)',
                                    },
                                }}
                                onClick={() => Navigate("/oldagemap")}
                            >
                                <Typography sx={{ textAlign: "center", marginTop: 4 }} variant='h6' style={styles.tab}>
                                    <b>Map</b>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 5,
                                    margin: 3,
                                    backgroundColor: "#81C784",
                                    color: "white",
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 0px 20px rgba(129, 199, 132, 0.7)',
                                    },
                                }}
                                onClick={() => Navigate("/ngolist")}
                            >
                                <Typography sx={{ textAlign: "center", marginTop: 4 }} variant='h6' style={styles.tab}>
                                    <b>List</b>
                                </Typography>
                            </Box>
                        </div>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default NewNgo;
