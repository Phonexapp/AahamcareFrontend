import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PetList = () => {

    const [OrphanAgeData, setOrphanAgeData] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        //There Is No Ngo API Need To Be Developed
        axios.get("http://localhost:4000/api/v1/user/pet")
            .then((RES) => {
                // console.log(RES.data.UserPet);
                setOrphanAgeData(RES.data.UserPet);
            })
    }, [])

    return <><br />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "20px" }}>
            {OrphanAgeData.map((value, index) => (
                <Box
                    key={value._id}
                    sx={{
                        width: "100%",
                        height: 100,
                        margin: "5px 0",
                        padding: 2,
                        border: 1,
                        borderRadius: 10,
                        backgroundColor: `hsl(${index * 30}, 70%, 50%)`, // Colorful backgrounds
                        boxShadow: 3,
                        cursor: "pointer",
                        transition: "transform 0.2s, background-color 0.2s",
                        "&:hover": {
                            backgroundColor: `hsl(${index * 30}, 70%, 40%)`, // Slightly darker on hover
                            transform: "scale(1.05)",
                        },
                    }}
                    onClick={() => Navigate(`/Pet/${value._id}`)}
                >
                    <Typography sx={{ textAlign: "center", fontSize: 24, fontWeight: "bold", color: "white" }}>
                        {value.name}
                    </Typography>
                    <Typography sx={{ textAlign: "center", fontSize: 14, fontWeight: "bold", color: "white" }}>
                        {value.place}
                    </Typography>
                </Box>
            ))}
        </div>
    </>
}
export default PetList;