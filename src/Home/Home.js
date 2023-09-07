import React, { useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Aahamcare1 from "../Image/Aahamcare1.png";
import Aahamcare2 from "../Image/Aahamcare2.png";

const NavigationItem = ({ text, link, style, subMenuItems }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubMenuOpen(false);
    };

    return (
        <Box
            sx={{
                width: 200,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out",
                margin: "0 10px", // Add margin to create space between items
                position: "relative", // Position relative for sub-menu positioning
                "&:hover": {
                    backgroundColor: "#34282C", // Change to your desired hover color
                    color: "#fff", // Change to your desired text color on hover
                },
                ...style, // Merge additional styles passed via the style prop
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
            {subMenuItems && subMenuItems.length > 0 && isSubMenuOpen && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: 200,
                        backgroundColor: "#34282C", // Change to your desired sub-menu background color
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 999, // Set a higher z-index value
                    }}
                >
                    {subMenuItems.map((subMenuItem, index) => (
                        <Link
                            key={index}
                            to={subMenuItem.link}
                            style={{
                                color: "#fff", // Change to your desired sub-menu text color
                                textDecoration: "none",
                                padding: "10px",
                            }}
                        >
                            {subMenuItem.text}
                        </Link>
                    ))}
                </Box>
            )}
        </Box>
    );
};

function Item(props) {
    const itemStyle = {
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        height: '600px',
    };

    const nameStyle = {
        fontSize: '50px', // Adjust the font size as needed
        fontWeight: 'bold',
        marginBottom: '10px',
        marginTop: "15%"
    };

    const descriptionStyle = {
        fontSize: '16px', // Adjust the font size as needed
        fontWeight: 'bold'
    };

    return (
        <Paper style={itemStyle}>
            <h2 style={nameStyle}>{props.item.name}</h2>
            <p style={descriptionStyle}>{props.item.description}</p>
        </Paper>
    )
}

const Home = () => {

    const items = [
        {
            name: "❝" + "Always give without remembering",
            description: "and always receive without forgetting.",
            image: Aahamcare1,
        },
        {
            name: "❝" + "No one has ever become poor from giving",
            description: "❝Happiness doesn't result from what we get, but from what we give",
            image: Aahamcare2
        }
    ]
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#B040A0", // Change to your desired background color
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "10px", // Add padding as needed
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                <Link style={{ color: "white", textDecoration: "none" }}>
                    <NavigationItem
                        text="Ngo"
                        subMenuItems={[
                            { text: "Oldagehome", link: "/OladAgeHome" },
                            { text: "Orphanage", link: "/OrphanAge" },
                            { text: "Pet", link: "/Pet" }
                        ]}
                    />
                </Link>
                <Link to="/store" style={{ color: "white", textDecoration: "none" }}>
                    <NavigationItem text="Store" link="/store" />
                </Link>
                <Link to="/Event" style={{ color: "white", textDecoration: "none" }}>
                    <NavigationItem text="Event" link="/Event" />
                </Link>
{/* 
                <Link to="/residence" style={{ color: "white", textDecoration: "none" }}>
                    <NavigationItem text="Residence" link="/residence" />
                </Link> */}
                <Link to="/post" style={{ color: "white", textDecoration: "none" }}>
                    <NavigationItem text="Post" link="/residence" />
                </Link>
                <Link to="/PostPostPost" style={{ color: "white", textDecoration: "none" }}>
                    <FavoriteIcon sx={{ marginTop: 2 }} />
                </Link>
            </Box>

            <Carousel
                autoPlay={true}
                interval={5000} // Set your desired interval (in milliseconds)
                animation="slide" // Change to your desired animation type
                navButtonsAlwaysVisible={true} // Show navigation buttons always
                indicators={false} // Hide slide indicators
                height="565px" // Increase the height as needed
            >
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </Carousel>



            {/* HelpSection */}

            <div className="container">
                <div className="row">
                    {/* HelpSection */}
                    <div className="col-md-6">
                        <div className="elementor-widget-wrap elementor-element-populated" style={sectionStyle}>
                            <div className="elementor-element elementor-element-682f5d2 elementor-widget elementor-widget-image" data-id="682f5d2" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                    <img decoding="async" width="307" height="66" src="https://aahamcare.com/wp-content/uploads/2023/04/Screen_Shot_2023-04-03_at_3.03.28_PM-removebg-preview-1-1.png" className="attachment-large size-large wp-image-121" alt="" srcSet="https://aahamcare.com/wp-content/uploads/2023/04/Screen_Shot_2023-04-03_at_3.03.28_PM-removebg-preview-1-1.png 307w, https://aahamcare.com/wp-content/uploads/2023/04/Screen_Shot_2023-04-03_at_3.03.28_PM-removebg-preview-1-1-300x64.png 300w" sizes="(max-width: 307px) 100vw, 307px" style={imageStyle} />
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-40a3c04 elementor-widget elementor-widget-heading" data-id="40a3c04" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default" style={{ fontWeight: "bold", color: "red" }}>What is help?</h2>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-bff7cc3 elementor-widget elementor-widget-heading" data-id="bff7cc3" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default" style={{ color: "#2F539B", fontWeight: "bold" }}>Make it easier or possible for (someone) to do something by offering one's services or resources</h4>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-ba6fd4f elementor-widget elementor-widget-text-editor" data-id="ba6fd4f" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="page" title="Page 1">
                                        <div className="section">
                                            <div className="layoutArea">
                                                <div className="column">
                                                    <p>So, help as much as you can when you can because life is a cycle which comes back around. You help, you are helped – some materialistic, some motivationally. It’s a good feeling to have and it’s a good deed to do.</p>
                                                    <p>Help is not just a word; it’s a thought process to help someone, one needs to have a heart and mindset to do so. HELP is a motivation for others and a satisfaction to the one who is doing it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-8991492 elementor-widget elementor-widget-heading" data-id="8991492" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default" style={{ color: "#2F539B", fontWeight: "bold", textAlign: "center" }}>Bringing Together Care</h4>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-cc30c66 elementor-widget elementor-widget-text-editor" data-id="cc30c66" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="page" title="Page 1">
                                        <div className="section">
                                            <div className="layoutArea">
                                                <div className="column">
                                                    <p>Wanting to do your part for those unfortunate ones you care about but holding yourself back? You are not alone. Our survey has shown that 83% of people stop short of doing good for just one reason – “Trust”.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-e2153fd elementor-widget elementor-widget-image" data-id="e2153fd" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container" style={{ marginLeft: "17%" }}>
                                    <img decoding="async" fetchPriority="high" width="336" height="208" src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-2.36.50-PM.png" className="attachment-large size-large wp-image-126" alt="" srcSet="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-2.36.50-PM.png 336w, https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-2.36.50-PM-300x186.png 300w" sizes="(max-width: 336px) 100vw, 336px" />
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-53b7d2a elementor-widget elementor-widget-text-editor" data-id="53b7d2a" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="page" title="Page 1">
                                        <div className="section">
                                            <div className="layoutArea">
                                                <div className="column">
                                                    <p>At Aahamcare, you can trust every NGO on our platform. They are pre-qualified, scrutinized, and audited to ensure that your love reaches those who you care.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-c015af5 elementor-widget elementor-widget-text-editor" data-id="c015af5" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="page" title="Page 1">
                                        <div className="section">
                                            <div className="layoutArea">
                                                <div className="column" style={{ textAlign: "center" }}>
                                                    <p>Search for a charity</p>
                                                    <p>Select a requirement</p>
                                                    <p>Click to Contribute</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="col-md-6">
                        <div className="elementor-widget-wrap elementor-element-populated" style={sectionStyle}>
                            <div className="elementor-element elementor-element-dba0ee2 elementor-widget elementor-widget-heading" data-id="dba0ee2" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default" style={headingStyle}>Why should you choose us?</h4>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-caf2bcd elementor-widget elementor-widget-text-editor" data-id="caf2bcd" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <p style={textStyle}>
                                        AahamCare brings every charitable organization out there to showcase their work and seek donors to support their causes. All the organizations fulfill rigorous criteria and legal scrutiny.
                                    </p>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-3ff91d5 elementor-widget elementor-widget-heading" data-id="3ff91d5" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default" style={headingStyle}>
                                        Give care at the click of a button!
                                    </h4>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-173f63a elementor-widget elementor-widget-text-editor" data-id="173f63a" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="page" title="Page 1">
                                        <div className="section">
                                            <div className="layoutArea">
                                                <div className="column">
                                                    <div className="page" title="Page 2">
                                                        <div className="section">
                                                            <div className="layoutArea">
                                                                <div className="column">
                                                                    <div className="page" title="Page 2">
                                                                        <div className="section">
                                                                            <div className="layoutArea">
                                                                                <div className="column">
                                                                                    <p style={textStyle}>
                                                                                        Do-gooders can now simply find a suitable charity through an AI-based search that will help them reach the exact organization. You will be able to help from anywhere, anytime!
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-63c50fc elementor-widget elementor-widget-heading" data-id="63c50fc" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default" style={headingStyle}>
                                        Wide varieties of formats to help
                                    </h4>
                                    <p style={textStyle}>
                                        You can help monetarily using a secure payment gateway. Or you can choose to help through hundreds of enlisted stores. Have material help to give away? That is also facilitated through our dedicated team of professionals.
                                    </p>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-e6f9034 elementor-widget elementor-widget-heading" data-id="e6f9034" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default" style={{ color: "#2F539B", fontWeight: "bold", textAlign: "center" }}>Complete accountability</h4>
                                    <p style={textStyle}>
                                        You can help monetarily using a secure payment gateway. Or you can choose to help through hundreds of enlisted stores. Have material help to give away? That is also facilitated through our dedicated team of professionals.                                    </p>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-724dbc5 elementor-widget elementor-widget-text-editor" data-id="724dbc5" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="page" title="Page 1">
                                        <div className="section">
                                            <div className="layoutArea">
                                                <div className="column">
                                                    <div className="page" title="Page 2">
                                                        <div className="section">
                                                            <div className="layoutArea">
                                                                <div className="column">
                                                                    <div className="page" title="Page 2">
                                                                        <div className="section">
                                                                            <div className="layoutArea">
                                                                                <div className="column">
                                                                                    <p style={textStyle}>
                                                                                        You can help monetarily using a secure payment gateway. Or you can choose to help through hundreds of enlisted stores. Have material help to give away? That is also facilitated through our dedicated team of professionals.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-1cc4a3e elementor-widget elementor-widget-image" data-id="1cc4a3e" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                    <img
                                        decoding="async"
                                        width="640"
                                        height="429"
                                        src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.40.02-PM.png"
                                        className="attachment-large size-large wp-image-129"
                                        alt=""
                                        srcSet="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.40.02-PM.png 654w, https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.40.02-PM-300x201.png 300w"
                                        sizes="(max-width: 640px) 100vw, 640px"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 14 }}>
                <Box
                    sx={{
                        width: 400,
                        height: 300,
                        boxShadow: 0,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center content horizontally
                        justifyContent: 'center', // Center content vertically
                        textAlign: 'center', // Align text center
                    }}
                >
                    <figure className="elementor-image-box-img">
                        <img
                            decoding="async"
                            loading="lazy"
                            width="87"
                            height="69"
                            src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.41.53-PM.png"
                            className="attachment-full size-full wp-image-130"
                            alt=""
                        />
                    </figure>
                    <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                            It's not easy to find active charities; most of them don't have complete information (including contact info) online
                        </h3>
                        <p className="elementor-image-box-description">We have a comprehensive search engine with up-to-date data, very easy to use</p>
                    </div>
                </Box>

                <Box
                    sx={{
                        width: 400,
                        height: 300,
                        boxShadow: 0,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center content horizontally
                        justifyContent: 'center', // Center content vertically
                        textAlign: 'center', // Align text center
                    }}
                >
                    <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                            <img
                                decoding="async"
                                loading="lazy"
                                width="74"
                                height="72"
                                src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.03-PM.png"
                                className="attachment-full size-full wp-image-131"
                                alt=""
                            />
                        </figure>
                        <div className="elementor-image-box-content">
                            <h3 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                                How do we know that charity is active? how can I find testimonials? what help do they want?
                            </h3>
                            <p className="elementor-image-box-description">
                                That's exactly what we evaluate before we put up the NGO on our platform, you can see all the work they do, and also their immediate requirements
                            </p>
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        width: 400,
                        height: 300,
                        boxShadow: 0,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center content horizontally
                        justifyContent: 'center', // Center content vertically
                        textAlign: 'center', // Align text center
                        marginTop: -3
                    }}
                >
                    <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                            <img
                                decoding="async"
                                loading="lazy"
                                width="81"
                                height="73"
                                src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.19-PM.png"
                                className="attachment-full size-full wp-image-132"
                                alt=""
                            />
                        </figure>
                        <div className="elementor-image-box-content">
                            <h3 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                                Paying online is dangerous, too many frauds going on
                            </h3>
                            <p className="elementor-image-box-description">
                                A 128-bit encrypted payment gateway is provided, with 100% compliance of data security
                            </p>
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        width: 400,
                        height: 300,
                        boxShadow: 0,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center content horizontally
                        justifyContent: 'center', // Center content vertically
                        textAlign: 'center', // Align text center
                    }}
                >
                    <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                            <img
                                decoding="async"
                                loading="lazy"
                                width="83"
                                height="72"
                                src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.29-PM.png"
                                className="attachment-full size-full wp-image-133"
                                alt=""
                            />
                        </figure>
                        <div className="elementor-image-box-content">
                            <h3 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                                Instead of cash, are there other means to help?
                            </h3>
                            <p className="elementor-image-box-description">
                                We provide wide varieties of options. You can use enlisted stores to purchase things, or you can upload coupons, or you can arrange any other non-cash help by coordinating with our backend team.
                            </p>
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        width: 400,
                        height: 300,
                        boxShadow: 0,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center content horizontally
                        justifyContent: 'center', // Center content vertically
                        textAlign: 'center', // Align text center
                    }}
                >
                    <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                            <img
                                decoding="async"
                                loading="lazy"
                                width="68"
                                height="62"
                                src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.42.44-PM.png"
                                className="attachment-full size-full wp-image-134"
                                alt=""
                            />
                        </figure>
                        <div className="elementor-image-box-content">
                            <h3 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                                How can we be sure that our help has indeed reached the intended beneficiaries?
                            </h3>
                            <p className="elementor-image-box-description">
                                You will get timely alerts about the fulfillment of your contribution, also you will get a citation from the NGO also, two-way communication is facilitated.
                            </p>
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        width: 400,
                        height: 300,
                        boxShadow: 0,
                        marginLeft: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center content horizontally
                        justifyContent: 'center', // Center content vertically
                        textAlign: 'center', // Align text center
                    }}
                >
                    <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                            <img
                                decoding="async"
                                loading="lazy"
                                width="67"
                                height="60"
                                src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-4.43.20-PM.png"
                                className="attachment-full size-full wp-image-135"
                                alt=""
                            />
                        </figure>
                        <div className="elementor-image-box-content">
                            <h3 className="elementor-image-box-title" style={{ color: "#2F539B", fontWeight: "bold" }}>
                                Getting tax-related documents for contribution is cumbersome, and is not timely
                            </h3>
                            <p className="elementor-image-box-description">
                                It's our responsibility to send you immediate payment acknowledgments, and any tax benefit certificates wherever applicable.
                            </p>
                        </div>
                    </div>
                </Box>

            </Box>

            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-7dd9fcc elementor-widget elementor-widget-heading" data-id="7dd9fcc" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default text-center" style={{ color: "#2F539B", fontWeight: "bold" }}>Purpose Statement</h2>
                    </div>
                </div>
                <div className="elementor-element elementor-element-bc5d338 elementor-widget elementor-widget-text-editor" data-id="bc5d338" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                        <div className="page" title="Page 1">
                            <div className="section">
                                <div className="layoutArea">
                                    <div className="column" style={{ textAlign: "center" }}>
                                        <p>We live in an era where, thanks to connectivity enabled by technology, we are exposed to suffering of fellow humans in a much higher frequency than previous times. It brings forth in our hearts a strong desire to do our bit for the less fortunate. And, ironically, it’s the same technology-based connectivity that provides us the means to do good.</p>
                                        <p>AahamCare empowers you, like never before, to be the hero that brings joy to the most vulnerable fellow humans.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-f053d49 elementor-widget elementor-widget-image" data-id="f053d49" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            loading="lazy"
                            width="439"
                            height="284"
                            src="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-2.37.04-PM.png"
                            className="attachment-large size-large wp-image-127 mx-auto d-block" // Center the image using mx-auto and d-block
                            alt=""
                            srcSet="https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-2.37.04-PM.png 439w, https://aahamcare.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-03-at-2.37.04-PM-300x194.png 300w"
                            sizes="(max-width: 439px) 100vw, 439px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
const sectionStyle = {
    padding: '20px',
    backgroundColor: 'white',
    marginBottom: '20px',
};

const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: "#2F539B",
    fontWeight: "bold",
    textAlign: "center"
};

const textStyle = {
    fontSize: '16px',
    lineHeight: '1.5'
};

const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
};

export default Home;


