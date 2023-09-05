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
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ShowAlert, setShowAlert] = useState(false);
    const [Message, setMessage] = useState("");
    const [EmailAlert, setEmailAlert] = useState(false);
    const [PasswordAlert, setPasswordAlert] = useState(false);

    const param = useParams();
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:4000/api/v1/auth/login", {
            email: Email,
            password: Password
        }).then((Res) => {
            localStorage.setItem("LoginID", Res.data.user._id);
            if (Res.data.message == "Login successfully") {
                Navigate(`/Home`);
            }
            else if (Res.data.message == "Email does not exist") {
                setEmail(true);
            }
            else if (Res.data.message == "Incorrect Password") {
                setPasswordAlert(true);
            }
        }).catch((err) => {
            if (err.response.status == 401) {
                setPasswordAlert(true);
            }
            // console.log(err.response.status);
        })
    };
    setTimeout(() => {
        setShowAlert(false);
        setEmailAlert(false);
        setPasswordAlert(false);
    }, 3000);

    useEffect(() => {
        if (param.Data == "" || "" || null) {
            setShowAlert(false);
        }
        else if (param.Data == "Registretionsuccessfullycompleted") {
            setShowAlert(true);
            setMessage(param.Data);
        }
    }, [])

    return (
        <>
            {
                ShowAlert ? (
                    <Alert variant="filled" severity="success" style={{ width: "25%", marginLeft: "39%" }}>
                        Registretion successfully completed
                    </Alert>
                ) : null
            }
            {
                EmailAlert ? (
                    <Alert variant="filled" severity="error" style={{ width: "25%", marginLeft: "39%" }}>
                        Email does not exist
                    </Alert>
                ) : null
            }
            {
                PasswordAlert ? (
                    <Alert variant="filled" severity="error" style={{ width: "25%", marginLeft: "39%" }}>
                        Incorrect Email or Password
                    </Alert>
                ) : null
            }
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        marginTop: 8,
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
                                    Sign in
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
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
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
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            {/* <Link href="/Resetpassword" variant="body2">
                                                Forgot password?
                                            </Link> */}
                                        </Grid>
                                        <Grid item>
                                            <Link href="/Signup" variant="body2">
                                                {"Don't have an account? Sign Up"}
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

export default Login;