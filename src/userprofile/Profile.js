import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const id = localStorage.getItem("LoginID");

    const Navigate=useNavigate();

    const Method=(Name,Phone,Email)=>{
       Navigate(`/Editprofile/${Name}/${Phone}/${Email}`);
    }

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/api/v1/user/user/${id}`)
                .then((response) => {
                    setUserData(response.data.user);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, [id])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, marginTop: -95 }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', marginTop: '50px' }}>
                <form>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Name</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="name" value={userData?.name || ''} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" value={userData?.email || ''} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Phone Number</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="phone" value={userData?.phone_no || ''} />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 15px', fontSize: '14px' }} onClick={()=>Method(userData?.name,userData?.email,userData?.phone_no)}>Edit</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
