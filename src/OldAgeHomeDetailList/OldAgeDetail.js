import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const OldAgeHomeDetailList = (props) => {
    const [OldAgeHomeDetail, setHomeAgeDetail] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/user/oldageHome")
            .then((RES) => {
                console.log(RES.data.oldAgeHomes);
                setHomeAgeDetail(RES.data.oldAgeHomes);
            })
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
            {OldAgeHomeDetail.map((value, index) => {
                if (value._id === props.Id) {
                    return (
                        <><br/><br/>
                            <CssBaseline key={value._id} />
                            <Container maxWidth="sm">
                                <Box
                                    sx={{
                                        boxShadow: 5,
                                        padding: 20,
                                        borderRadius: 10,
                                        backgroundColor: "#fff", // White background
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px", // Increased gap
                                        alignItems: "center", // Center align content
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: "#1F6E8C" }}>
                                        {value.name}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: "#555" }}>
                                        Email: {value.email}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: "#555" }}>
                                        Place: {value.place}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: "#555" }}>
                                        Type: {value.type}
                                    </Typography>
                                    <Typography variant="body1">
                                        {value.description}
                                    </Typography>
                                </Box>
                            </Container>
                        </>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default OldAgeHomeDetailList;
