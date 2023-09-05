import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const NewNgoDetaillit = (props) => {
    console.log("props", props);
    const [OldAgeHomeDetail, setHomeAgeDetail] = useState([]);

    useEffect(() => {
        //NEED TO DO API FOR BACKEND FOR NGO
        axios.get("http://localhost:4000/api/v1/user/ngo")
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
                        <Box sx={{textAlign:"center"}}>
                            <Typography sx={{fontFamily:"cursive"}}>
                                Name:{value.name}
                            </Typography><br />
                            <Typography sx={{fontFamily:"cursive"}}>
                                Email:{value.email}
                            </Typography><br />
                            <Typography sx={{fontFamily:"cursive"}}>
                                Place:{value.place}
                            </Typography><br />
                            <Typography sx={{fontFamily:"cursive"}}>
                                {value.type}
                            </Typography><br />
                            <Typography sx={{fontFamily:"cursive"}}>
                                {value.discription}
                            </Typography>
                        </Box>
                    </>
                }
            })
        }
    </>
}

export default NewNgoDetaillit;