import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const PasswordReset = () => {
    const [Mobile, setMobile] = useState("");

    const UpdateFunction = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/api/v1/auth/getOtp`, {
            phone_no: Mobile,
        });
    }

    return (
        <div style={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, marginTop: -59 }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '1px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', marginTop: '50px' }}>
                <form>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Enter your mobile number</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="name" onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <Button variant="contained" onClick={UpdateFunction}>
                        SendOtp
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default PasswordReset;