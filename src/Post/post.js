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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, background: '#f0f0f0', position: 'relative' }}>
            {/* Top Left Corner Ad */}
            <div style={{ position: 'absolute', top: '0', left: '0', width: '300px', height: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                {/* <img src="your_ad_image_url" alt="Advertisement" style={{ width: '100%' }} /> */}
                <div className="elementor-image-box-wrapper">
                    <img
                        decoding="async"
                        loading="lazy"
                        width="83"
                        height="72"
                        src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.29-PM.png"
                        className="attachment-full size-full wp-image-133"
                        alt=""
                        style={{ marginTop: "-3%", marginLeft: "25%" }}
                    />
                    <div className="elementor-image-box-content">
                        <h6 className="elementor-image-box-title" style={{ color: "#2F569B", fontWeight: "bold" }}>
                            Instead of cash, are there other means to help?
                        </h6>
                        <p className="elementor-image-box-description">
                            We provide wide varieties of options. You can use enlisted stores to purchase things, or you can upload coupons, or you can arrange any other non-cash help by coordinating with our backend team.
                        </p>
                    </div>
                </div>
            </div>

            {/* Top Right Corner Ad */}
            <div style={{ position: 'absolute', top: '0', right: '0', width: '300px', height: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}></p>
                {/* <img src="your_ad_image_url" alt="Advertisement" style={{ width: '100%' }} /> */}
                <div className="elementor-image-box-wrapper">
                    <img
                        decoding="async"
                        loading="lazy"
                        width="81"
                        height="73"
                        src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.19-PM.png"
                        className="attachment-full size-full wp-image-132"
                        alt=""
                        style={{ marginTop: "-3%", marginLeft: "29%" }}
                    />
                    <div className="elementor-image-box-content">
                        <h6 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                            Paying online is dangerous, too many frauds going on
                        </h6>
                        <p className="elementor-image-box-description">
                            A 128-bit encrypted payment gateway is provided, with 100% compliance of data security
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Left Corner Ad */}
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '300px', height: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}></p>
                {/* <img src="your_ad_image_url" alt="Advertisement" style={{ width: '100%' }} /> */}
                <div className="elementor-image-box-wrapper">
                    <img
                        decoding="async"
                        loading="lazy"
                        width="68"
                        height="62"
                        src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.44-PM.png"
                        className="attachment-full size-full wp-image-134"
                        alt=""
                        style={{ marginTop: "-3%", marginLeft: "29%" }}
                    />
                    <div className="elementor-image-box-content">
                        <h6 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                            How can we be sure that our help has indeed reached the intended beneficiaries?
                        </h6>
                        <p className="elementor-image-box-description">
                            You will get timely alerts about the fulfillment of your contribution, also you will get a citation from the NGO also, two-way communication is facilitated.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Right Corner Ad */}
            <div style={{ position: 'absolute', bottom: '0', right: '0', width: '300px', height: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}></p>
                {/* <img src="your_ad_image_url" alt="Advertisement" style={{ width: '100%' }} /> */}
                <div className="elementor-image-box-wrapper">
                    <img
                        decoding="async"
                        loading="lazy"
                        width="67"
                        height="60"
                        src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.43.20-PM.png"
                        className="attachment-full size-full wp-image-135"
                        alt=""
                        style={{ marginTop: "-3%", marginLeft: "35%" }}
                    />
                    <div className="elementor-image-box-content">
                        <h6 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                            Getting tax-related documents for contribution is cumbersome, and is not timely
                        </h6>
                        <p className="elementor-image-box-description">
                            It's our responsibility to send you immediate payment acknowledgments, and any tax benefit certificates wherever applicable.
                        </p>
                    </div>
                </div>
            </div>

            {/* Center Content */}
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', marginTop: '50px' }}>
                <form>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Description</label>
                        <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="phone" onChange={(e) => setPlace(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '1px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Upload Image and Video</label>
                        <input type="file" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" multiple onChange={(e) => setImage(e.target.files)} />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 15px', fontSize: '14px' }} onClick={ResidenceFunction}>Send</button>
                </form>
            </div>
        </div>
    </>
}

export default Post;