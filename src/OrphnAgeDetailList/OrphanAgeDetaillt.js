import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const OrphanAgeDetaillit = (props) => {
    console.log("props", props);
    const [OldAgeHomeDetail, setHomeAgeDetail] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/user/orphanage")
            .then((RES) => {
                // console.log(RES.data.orphanges);
                setHomeAgeDetail(RES.data.orphanges);
            })
    }, [])

    return <>
        {
            OldAgeHomeDetail.map((value, index) => {
                if (value._id == props.Id) {
                    return <><br/><br/>
                        <React.Fragment>
                            <CssBaseline />
                            <Container maxWidth="sm">
                                <Box
                                    sx={{
                                        boxShadow: 5,
                                        padding: 10,
                                        borderRadius: 8,
                                        backgroundColor: '#f5f5f5',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}
                                >
                                    <Typography>
                                        Name: {value.name}
                                    </Typography>
                                    <Typography>
                                        Email: {value.email}
                                    </Typography>
                                    <Typography>
                                        Place: {value.place}
                                    </Typography>
                                    <Typography>
                                        Type: {value.type}
                                    </Typography>
                                    <Typography>
                                        Description: {value.description}
                                    </Typography>
                                </Box>
                            </Container>
                        </React.Fragment>
                    </>
                }
            })
        }
    </>
}

export default OrphanAgeDetaillit;