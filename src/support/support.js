import React from "react";
import { useState } from "react";
import axios from "axios";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const Support = () => {
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [Subject, setSubject] = useState("");
    const [Text, setText] = useState("");

    const UpdateFunction = (e) => {
        axios.post(`http://localhost:4000/api/v1/user/Email`, {
            From: From,
            To: To,
            Subject: Subject,
            Text: Text
        });
    }

    return (
        <div style={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, marginTop: -59 }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '1px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', marginTop: '50px' }}>
                <form>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Enter Your Email</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="name" onChange={(e) => setFrom(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>To</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setTo(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Subject</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="phone" onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Message</label>
                        <textarea type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setText(e.target.value)} />
                    </div>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={UpdateFunction}>
                        Send
                    </Button>
                    {/* <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '1px 1px' }} onClick={UpdateFunction}>send</button> */}
                </form>
            </div>
        </div>
    );
}
export default Support;