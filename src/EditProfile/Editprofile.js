import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Editprofile = () => {

    const param = useParams();
    console.log("param", param);

    const [Name, setName] = useState("" || param.Name);
    const [Dob, setDob] = useState("");
    const [Work, setwork] = useState("");
    const [LiveAt, setLineAt] = useState("");
    const [Email, setEmail] = useState("" || param.Email);
    const [Phone, setPhone] = useState("" || param.Phone);
    const [AdharNumber, setAdharNumber] = useState("");
    const [Pancard, setPancard] = useState("");


    const id = localStorage.getItem("LoginID");


    const UpdateFunction = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", Name);
        formdata.append("dateOfBirth", Dob);
        formdata.append("work", Work);
        formdata.append("address", LiveAt);
        formdata.append("email", Email);
        formdata.append("phone_no", Phone);
        formdata.append("aadharNo", AdharNumber);
        formdata.append("panCardNo", Pancard);
        axios.put(`http://localhost:4000/userupdate/${id}`, formdata)
            .catch(error => {
                console.error("Error updating user:", error);
            })
    }

    return (
        <div style={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, marginTop: -59 }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '1px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', marginTop: '50px' }}>
                <form>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Name</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="name" defaultValue={param.Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Email</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" defaultValue={param.Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Phone Number</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="phone" defaultValue={param.Phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>DOB</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setDob(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Work</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setwork(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Lives At</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setLineAt(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Adhar Number</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setAdharNumber(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Pancard Number</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" onChange={(e) => setPancard(e.target.value)} />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '1px 1px', fontSize: '14px' }} onClick={UpdateFunction}>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Editprofile;
