import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Post = () => {
    const [UserID, setUserID] = useState("");
    const [Place, setPlace] = useState("");
    const [Image, setImage] = useState("");

    const param = useParams();
    console.log("uservalue", param);

    const ResidenceFunction = (e) => {
        e.preventDefault();
        const FormUserData = new FormData();
        FormUserData.append("id", UserID);
        FormUserData.append("discription", Place);
        for (var i = 0; i < Image.length; i++) {
            FormUserData.append("PostImage", Image[i]);
        }
        axios.post("http://localhost:4000/userpost", FormUserData);
        alert("Video Uploaded Sucessfully");
    }

    useEffect(() => {
        setUserID(localStorage.getItem("LoginID"));
    }, [])

    return <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, marginTop: -95 }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', marginTop: '50px' }}>
                <form>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Discription</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="phone" onChange={(e) => setPlace(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Upload Image and Video</label>
                        <input type="file" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" multiple onChange={(e) => setImage(e.target.files)} />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 15px', fontSize: '14px' }} onClick={ResidenceFunction}>send</button>
                </form>
            </div>
        </div>
    </>
}

export default Post;