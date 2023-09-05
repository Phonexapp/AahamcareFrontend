import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from "react-router-dom";
import NewNgoDetaillit from "../NewNgoDetailList/NewNgoDetaillt";
import NewNgoAttendance from "../NewNgoDetailList/NewNgoAttendance";
import NewNgoRequirement from "../NewNgoDetailList/NewNgoRequirement";

const OrphanAgeDetail = () => {
    const [value, setValue] = React.useState(0);
    const [OldAgeDtaillistBoolean, setOldAgeDtaillistBoolean] = React.useState(true);
    const [OldHomeAttendanceBoolean, setOldHomeAttendanceBoolean] = React.useState(false);
    const [OldHomeRequirementBoolen, setOldHomeRequirementBoolen] = React.useState(false);
    const param = useParams();
    console.log("orphaparams", param.id);


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
                <NewNgoDetaillit Id={param.id} />
            ) : null
        }

        {
            OldHomeAttendanceBoolean ? (
                <NewNgoAttendance Id={param.id} />
            ) : null
        }

        {
            OldHomeRequirementBoolen ? (
                <NewNgoRequirement Id={param.id} />
            ) : null
        }
    </>
}
export default OrphanAgeDetail;