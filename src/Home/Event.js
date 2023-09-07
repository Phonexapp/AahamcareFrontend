import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@material-ui/core';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import UserImage from "../Image/MOVIE.jpg";
import Aahamcare1 from "../Image/Aahamcare1.png";
import Aahamcare2 from "../Image/Aahamcare2.png";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Adhipurash from "../Image/Adhipurash.jpg";
import BahuBali from "../Image/BahuBali.jpg";
import King from "../Image/King.jpg";
import AdhipurashImage from "../Image/Adhipurash.png";
import BahuBaliImage from "../Image/BahuBali.png";
import KingImage from "../Image/King.png";
import Avaengare from "../Image/Avaengare.webp";
import pathan from "../Image/pathan.jpg";


const Event = () => {
    const [storeData, setStoreData] = useState([]);
    const [cardCounts, setCardCounts] = useState({});
    const [cardPriceCounts, setCardPriceCounts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [UserImage, setUserImage] = useState([Adhipurash, BahuBali, King]);


    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/user/event")
            .then((res) => {
                console.log("Event", res.data);
                setStoreData(res.data);
            });
    }, []);

    const handleAddClick = (id, unitPrice) => {
        setCardCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }));

        setCardPriceCounts(prevCounts => ({
            ...prevCounts,
            [unitPrice]: (prevCounts[unitPrice] || 0) + unitPrice
        }));
    };

    const handleClick = (id, unitPrice) => {
        if (cardCounts[id]) {
            setCardCounts(prevCounts => ({
                ...prevCounts,
                [id]: prevCounts[id] - 1
            }));

            setCardPriceCounts(prevCounts => ({
                ...prevCounts,
                [unitPrice]: (prevCounts[unitPrice] || 0) - unitPrice
            }));
        }
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

    const items = [
        {
            name: "Pathaan",
            // description: "and always receive without forgetting.",
            image: pathan,
        },
        {
            name: "Avengers Endgame",
            // description: "❝Happiness doesn't result from what we get, but from what we give",
            image: Avaengare
        }
        ,
        {
            name: "King Movie",
            // description: "❝Happiness doesn't result from what we get, but from what we give",
            image: King
        }
    ]

    return (
        <>
            <Carousel
                autoPlay={true}
                interval={5000} // Set your desired interval (in milliseconds)
                animation="slide" // Change to your desired animation type
                navButtonsAlwaysVisible={true} // Show navigation buttons always
                indicators={false} // Hide slide indicators
                height="565px" // Increase the height as needed
                sx={{ marginTop: 0 }}
            >
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </Carousel>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '20px', paddingLeft: '20px', paddingTop: '40px' }}>
                {storeData.map((value, index) => (
                    <Card sx={{ width: 250, borderRadius: 3, overflow: 'hidden', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={King}
                                alt="Event Photo"
                                sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}
                            />
                            <CardContent sx={{ backgroundColor: 'white', padding: '16px' }}>
                                <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 'bold', marginBottom: '8px' }}>
                                    {value.event}
                                </Typography>
                                <Typography variant="h6" sx={{ marginBottom: '8px', color: "black" }}>
                                    ₹{cardPriceCounts[value.unitPrice] || value.unitPrice}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                                    <IconButton onClick={() => handleClick(value._id, value.unitPrice)} sx={{ color: '#FF0000' }}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography variant="body1" color="text.primary" sx={{ marginLeft: '8px', marginRight: '8px', fontWeight: 'bold' }}>
                                        {cardCounts[value._id] || 1}
                                    </Typography>
                                    <IconButton onClick={() => handleAddClick(value._id, value.unitPrice)} sx={{ color: '#00AA00' }}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                                <Typography variant="body2" color="error" sx={{ marginTop: '16px', fontWeight: 'bold' }}>
                                    {value.remainingTickets} Tickets Left. Hurry Up!
                                </Typography>
                                <Typography variant="body2" color="primary" sx={{ marginTop: '16px', color: "#969493" }}>
                                    Start Date: {value.startDateTime} - End Date: {value.endDateTime}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', backgroundColor: "black" }}>
                            Checkout
                        </Button>
                    </Card>
                ))}
            </Box>
        </>
    );
};

export default Event;
