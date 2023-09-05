import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

const NewNgoRequirement = (props) => {
    const [OldAgeHomeDetail, setHomeAgeDetail] = useState([]);
    const [cardPriceCounts, setCardPriceCounts] = useState({});

    useEffect(() => {
        //NEED TO DO API FOR BACKEND FOR NGO
        axios.get("http://localhost:4000/api/v1/user/ngo")
            .then((RES) => {
                setHomeAgeDetail(RES.data.ngo);
            })
    }, [])

    const handleQuantityChange = (e, requirement) => {
        const inputValue = parseFloat(e.target.value);
        if (!isNaN(inputValue)) {
            setCardPriceCounts((prevCounts) => ({
                ...prevCounts,
                [requirement.unitPrice]: inputValue * requirement.unitPrice,
            }));
        }
    };

    // Calculate the total amount sum
    const totalAmountSum = Object.values(cardPriceCounts).reduce(
        (total, amount) => total + amount,
        0
    );

    console.log("TotalAmountSum", totalAmountSum);

    return (
        <>
            <div style={{ height: "400px", overflowY: "auto" }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price per Unit</TableCell>
                                <TableCell>Total Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {OldAgeHomeDetail.map((value, index) => {
                                if (value._id === props.Id) {
                                    return value.requirement.map((requirement, i) => (
                                        <TableRow key={i}>
                                            <TableCell>{requirement.item}</TableCell>
                                            <TableCell>
                                                <FormControl fullWidth>
                                                    <InputLabel>Quantity</InputLabel>
                                                    <Select
                                                        value={cardPriceCounts[requirement.unitPrice] || ""}
                                                        onChange={(e) => handleQuantityChange(e, requirement)}
                                                    >
                                                        {[1, 2, 3, 4, 5].map((quantity) => (
                                                            <MenuItem key={quantity} value={quantity}>
                                                                {quantity}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </TableCell>
                                            <TableCell>{`₹${requirement.unitPrice}`}</TableCell>
                                            <TableCell>{`₹${(
                                                cardPriceCounts[requirement.unitPrice] || 0
                                            ).toFixed(2)}`}</TableCell>
                                        </TableRow>
                                    ));
                                }
                                return null;
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Box display="flex" justifyContent="flex-end" p={2}>
                <Typography variant="h6" sx={{ paddingRight: "20px" }}>
                    Total Amount: ₹{totalAmountSum.toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary">
                    Pay
                </Button>
            </Box>
        </>
    );
}

export default NewNgoRequirement;








