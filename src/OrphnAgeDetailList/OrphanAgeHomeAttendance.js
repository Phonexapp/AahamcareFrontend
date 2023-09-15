import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Avatar } from "@material-ui/core";

const OrphanAgeHomeAttendance = (props) => {
    const [OldAgeHomeDetail, setHomeAgeDetail] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/user/orphanage")
            .then((RES) => {
                // console.log(RES.data.orphanges);
                setHomeAgeDetail(RES.data.orphanges);
            })
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {OldAgeHomeDetail.map((value, index) => {
                if (value._id === props.Id) {
                    return value.residence.map((residence, i) => (
                        <Flippy
                            flipOnHover={true} // Enable flip on hover
                            flipDirection="horizontal"
                            key={residence._id}
                            style={{
                                width: '200px',
                                height: '280px', // Adjust the height to fit the video
                                margin: '10px',
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Add box shadow for a 3D effect
                                transition: 'transform 0.3s', // Add smooth transition
                                transformStyle: 'preserve-3d', // Enable 3D transform
                                cursor: 'pointer', // Show pointer cursor on hover
                            }}
                        >
                            <FrontSide style={{ backgroundColor: '#B040A0', padding: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '10px' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={`http://localhost:4000/${residence.photo}`}
                                    sx={{ width: 56, height: 56, marginLeft: 8 }}
                                />
                                <div style={{ textAlign: "center", marginTop: "0%", color: "white" }}>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: '5px' }}>Name: {residence.name}</Typography>
                                    <Typography sx={{ fontWeight: "bold", marginBottom: '5px' }}>Age: {residence.age}</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>Place: {residence.place}</Typography>
                                </div>
                                <div>
                                    <button onClick={() => { }}>
                                        Click to know about me
                                    </button>
                                </div>
                            </FrontSide>
                            <BackSide style={{ backgroundColor: 'black', padding: '10px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <video src={`http://localhost:4000/${residence.video}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} controls></video>
                            </BackSide>
                        </Flippy>
                    ));
                }
                return null;
            })}
        </div>
    );
}
export default OrphanAgeHomeAttendance;






