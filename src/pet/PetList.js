import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Aahamcare1 from "../Image/Aahamcare1.png";
import Aahamcare2 from "../Image/Aahamcare2.png";

const PetList = () => {
    const [isSearchBarActive, setSearchBarActive] = useState(true);
    const [OrphanAgeData, setOrphanAgeData] = useState([]);
    const [Search, setSearch] = useState("");

    const toggleSearchBar = () => {
        setSearchBarActive(!isSearchBarActive);
    };
    const Navigate = useNavigate();

    useEffect(() => {
        //There Is No Ngo API Need To Be Developed
        axios.get("http://localhost:4000/api/v1/user/pet")
            .then((RES) => {
                // console.log(RES.data.UserPet);
                setOrphanAgeData(RES.data.UserPet);
            })
    }, [])


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
            <Carousel
                autoPlay={true}
                interval={5000}
                animation="slide"
                navButtonsAlwaysVisible={true}
                indicators={false}
                height="565px"
            >
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </Carousel>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f0f0f0",
                    padding: "20px",
                }}
            >
                <div
                    style={{
                        height: '100vh',
                        width: '100%',
                        margin: '0',
                        padding: '0',
                        background: '#ECE3E3',
                        borderRadius: "1%",
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' // Example values for the box shadow
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', marginTop: "-17%" }}>
                        <div
                            className="searchbar"
                            style={{
                                marginBottom: 'auto',
                                marginTop: 'auto',
                                height: '60px',
                                backgroundColor: '#353b48',
                                borderRadius: '30px',
                                padding: '10px',
                            }}
                        >
                            <input
                                className="search_input"
                                type="text"
                                name=""
                                placeholder="Search..."
                                style={{
                                    color: 'white',
                                    border: '0',
                                    outline: '0',
                                    background: 'none',
                                    width: isSearchBarActive ? '450px' : '0',
                                    caretColor: 'transparent',
                                    lineHeight: '40px',
                                    transition: 'width 0.4s linear'
                                }}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <a
                                href="#"
                                className="search_icon"
                                // onClick={toggleSearchBar}
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    float: 'right',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                    color: 'white',
                                    textDecoration: 'none',
                                    background: isSearchBarActive ? 'white' : 'none',
                                    color: isSearchBarActive ? '#e74c3c' : 'white',
                                }}
                            >
                                <i className="fas fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {OrphanAgeData.filter((value) => {
                    if (value.name.toLowerCase().includes(Search.toLowerCase()) || value.place.toLowerCase().includes(Search.toLowerCase())) {
                        return value
                    }
                }).map((value, index) => (
                    <Box
                        key={value._id}
                        sx={{
                            width: "calc(25% - 20px)",
                            height: "100px",
                            margin: "5px",
                            padding: "10px",
                            border: "1px solid #ccc",
                            marginTop: -110,
                            borderRadius: "10px",
                            backgroundColor: `hsl(${index * 30}, 70%, 50%)`,
                            boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.5)",
                            cursor: "pointer",
                            transition: "transform 0.2s, background-color 0.2s",
                            "&:hover": {
                                backgroundColor: `hsl(${index * 30}, 70%, 40%)`,
                                transform: "scale(1.05)",
                            },
                        }}
                        onClick={() => Navigate(`/Pet/${value._id}`)}
                    >
                        <Typography sx={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold", color: "white" }}>
                            {value.name}
                        </Typography>
                        <Typography sx={{ textAlign: "center", fontSize: "0.75rem", fontWeight: "bold", color: "white" }}>
                            {value.place}
                        </Typography>
                    </Box>
                ))}
            </div>
        </>
    );
}

export default PetList;