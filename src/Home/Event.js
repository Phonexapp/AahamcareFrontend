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

const Event = () => {
    const [storeData, setStoreData] = useState([]);
    const [cardCounts, setCardCounts] = useState({});
    const [cardPriceCounts, setCardPriceCounts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

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

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '20px', paddingLeft: '20px', paddingTop: '40px' }}>
            {storeData.map((value, index) => (
                <Card key={index} sx={{ width: 180, borderRadius: 16, overflow: 'hidden' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={UserImage}
                            alt="Photo"
                        />
                        <CardContent sx={{ backgroundColor: '#F0F8FF', padding: '12px' }}>
                            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#333333', fontWeight: 'bold' }}>
                                {value.event}
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
                                {value.remainingTickets} Tickets Left. Hurry Up!
                            </Typography>
                            <Typography variant="body2" color="primary" sx={{ marginTop: '8px' }}>
                                Start Date: {value.startDateTime} - End Date: {value.endDateTime}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
                        Checkout
                    </Button>
                </Card>
            ))}
        </Box>
    );
};

export default Event;
