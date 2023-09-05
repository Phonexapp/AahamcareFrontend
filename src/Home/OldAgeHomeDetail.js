import React, { useState, useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from "react-router-dom";
import OldAgeHomeDetailList from "../OldAgeHomeDetailList/OldAgeDetail.js";
import OldAgeHomeAttendance from "../OldAgeHomeDetailList/OldAgeHomeAttendance.js";
import OldAgeHomeRequirement from "../OldAgeHomeDetailList/OldAgeHomeRequirement.js";
import Rewsidence from "../Residence/Rewsidence.js";

const OldAgeHomeDetail = () => {
    const [value, setValue] = React.useState(0);
    const [OldAgeDtaillistBoolean, setOldAgeDtaillistBoolean] = React.useState(true);
    const [OldHomeAttendanceBoolean, setOldHomeAttendanceBoolean] = React.useState(false);
    const [OldHomeRequirementBoolen, setOldHomeRequirementBoolen] = React.useState(false);
    const [ResidenceBoolean, setResidenceBoolean] = useState(false);
    const param = useParams();
    console.log("Param", param.id);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const OldHomeAttendance = () => {
        setOldHomeAttendanceBoolean(true);
        setOldAgeDtaillistBoolean(false);
        setOldHomeRequirementBoolen(false);
    };

    const OldAgeHomeList = () => {
        setOldHomeAttendanceBoolean(false);
        setOldHomeRequirementBoolen(false);
        setOldAgeDtaillistBoolean(true);
    };

    const OldHomeRequirment = () => {
        setOldHomeAttendanceBoolean(false);
        setOldAgeDtaillistBoolean(false);
        setOldHomeRequirementBoolen(true);
    };

    useEffect(() => {
        localStorage.setItem("Id", param.id);
    }, [])



    return <>
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                overflowX: 'auto',
                marginLeft: '35%',
                flexDirection: 'column', // Stack tabs vertically on mobile
                marginLeft: '0', // Remove left margin on mobile
            }}
        >
            <Tab label="Details" onClick={OldAgeHomeList} />
            <Tab label="Attendance" onClick={OldHomeAttendance} />
            <Tab label="Requirements" onClick={OldHomeRequirment} />
        </Tabs>


        {
            OldAgeDtaillistBoolean ? (
                <OldAgeHomeDetailList Id={param.id} />
            ) : null
        }

        {
            OldHomeAttendanceBoolean ? (
                <OldAgeHomeAttendance Id={param.id} />
            ) : null
        }

        {
            OldHomeRequirementBoolen ? (
                <OldAgeHomeRequirement Id={param.id} />
            ) : null
        }

    </>
}
export default OldAgeHomeDetail;