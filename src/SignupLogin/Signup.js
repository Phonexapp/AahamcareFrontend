import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import axios from "axios";
import { FormControl, FormLabel, Input } from '@mui/material';

function Sign() {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Phonenumber, setPhonenumber] = useState("");
    const [Password, setPassword] = useState("");
    const [ShowEmailAlert, setShowEmailAlert] = useState(false);
    const [EmailMessage, setEmailMessage] = useState("");
    const [UserImage, setUserImage] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", Username);
        formdata.append("email", Email);
        formdata.append("phone_no", Phonenumber);
        formdata.append("password", Password);
        for (var i = 0; i < UserImage.length; i++) {
            formdata.append("PostImage", UserImage[i]);
        }
        const response = await axios.post("http://localhost:4000/register", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res.data.message);
            if (res.data.message == "Registretionsuccessfullycompleted") {
                Navigate(`/login/${res.data.message}`);
            } else if (res.data.message == "This email address already exists") {
                setEmailMessage(response.data.message);
                setShowEmailAlert(true);
            }
        })
    };



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formdata = new FormData();
    //     formdata.append("name", Username);
    //     formdata.append("email", Email);
    //     formdata.append("phone_no", Phonenumber);
    //     formdata.append("password", Password);
    //     formdata.append("email", Email);
    //     for (var i = 0; i < UserImage.length; i++) {
    //         formdata.append("PostImage", UserImage[i]);
    //     }
    //     axios.post("http://localhost:4000/register",
    //         formdata, {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //     })
    //         .then((Res) => {
    //             if (Res.data.message == "Registretion successfully completed") {
    //                 Navigate(`/login/${Res.data.message}`);
    //             }
    //             else if (Res.data.message == "This email address already exists") {
    //                 setEmailMessage(Res.data.message);
    //                 setShowEmailAlert(true);
    //             }
    //         })

    setTimeout(() => {
        setShowEmailAlert(false);
    }, 3000);

    return (
        <>

            {
                ShowEmailAlert ? (
                    <Alert variant="filled" severity="error" style={{ width: "25%", marginLeft: "39%" }}>
                        {EmailMessage}
                    </Alert>
                ) : null
            }
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        marginTop: 3,
                    }}
                >
                    <Grid container>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: "url(https://source.unsplash.com/random)",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) =>
                                    t.palette.mode === "light"
                                        ? t.palette.grey[50]
                                        : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={5}
                            component={Paper}
                            elevation={6}
                            square
                        >
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    Sign Up
                                </Typography>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit}
                                    sx={{ mt: 1 }}
                                >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="name"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="Phone"
                                        label="Phone Number"
                                        type="text"
                                        id="phone"
                                        autoComplete="Phone"
                                        autoFocus
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div style={{ marginBottom: '1px' }}>
                                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '1px' }}>Select Image</label>
                                        <input type="file" style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }} id="email" defaultValue={UserImage} onChange={(e) => setUserImage(e.target.files)} />
                                    </div>
                                    {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container>
                                        <Grid item>
                                            <Link href="/" variant="body2">
                                                {"Do you have an account? Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Sign;