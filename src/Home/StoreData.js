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
import Aahamcare1 from "../Image/Aahamcare1.png";
import Aahamcare2 from "../Image/Aahamcare2.png";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import StoreOne from "../Image/StoreOne.jpg";
import StoreTwo from "../Image/StoreTwo.jpg";

const StoreData = () => {
    const [storeData, setStoreData] = useState([]);
    const [cardCounts, setCardCounts] = useState({});
    const [cardPriceCounts, setCardPriceCounts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/user/store")
            .then((res) => {
                console.log("Store", res.data.stores);
                setStoreData(res.data.stores);
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
                name: "❝" + "Discover a world of endless",
                description: " possibilities at our store.",
                image: StoreTwo,
            },
            {
                name: "❝" + "We're not just a store",
                description: "❝we're your shopping destination",
                image: StoreOne
            }
        ]


    return (<>
        <Carousel
            autoPlay={true}
            interval={5000} // Set your desired interval (in milliseconds)
            animation="slide" // Change to your desired animation type
            navButtonsAlwaysVisible={true} // Show navigation buttons always
            indicators={false} // Hide slide indicators
            height="565px" // Increase the height as needed
            sx={{marginTop:-9}}
        >
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '20px', paddingTop: '40px', paddingLeft: '20px' }}>
            {storeData.map((value, index) => (
                <Card key={index} sx={{ width: 200, borderRadius: 3, overflow: 'hidden' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={value.photo}
                            alt="Photo"
                        />
                        <CardContent sx={{ backgroundColor: '#F0F8FF', padding: '12px' }}>
                            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#333333', fontWeight: 'bold' }}>
                                {value.item}
                            </Typography>
                            <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 'bold', marginBottom: '6px' }}>
                                ₹{cardPriceCounts[value.unitPrice] || value.unitPrice}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <RemoveIcon onClick={() => handleClick(value._id, value.unitPrice)} sx={{ cursor: 'pointer', color: '#FF0000' }} />
                                <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '6px', marginRight: '6px', fontWeight: 'bold' }}>
                                    {cardCounts[value._id] || 1}
                                </Typography>
                                <AddIcon onClick={() => handleAddClick(value._id, value.unitPrice)} sx={{ cursor: 'pointer', color: '#00AA00' }} />
                            </Box>
                            <Typography variant="body2" color="error" sx={{ marginTop: '8px', fontWeight: 'bold' }}>
                                {value.remaining} Pcs Left. Hurry Up!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button variant="contained" fullWidth sx={{ borderRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', backgroundColor: 'black' }}>
                        Checkout
                    </Button>
                </Card>
            ))}
        </Box>
    </>
    );
};

export default StoreData;
