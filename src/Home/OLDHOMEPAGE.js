import React, { useState } from "react";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Card,
    Avatar,
    ThemeProvider,
    AvatarGroup,
} from "@mui/material";
import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
} from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { CssBaseline } from '@mui/material';

const data = [
    { name: "Profile", icon: <AccountCircleIcon sx={{ color: "white" }} /> },
    { name: "About", icon: <PersonIcon sx={{ color: "white" }} /> },
    { name: "Support", icon: <HeadsetMicIcon sx={{ color: "white" }} /> },
];

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function OLDHOMEPAGE() {
    const [PostData, setPostData] = useState([]);
    const [open, setOpen] = useState(false);
    const [LoginData, setLoginData] = React.useState([]);
    const [UserLoginId, setUserLoginId] = React.useState("");


    const Navigate = useNavigate();

    const avatarsData = [
        { name: 'SE', color: 'purple', text: 'Store and Events' },
        { name: 'OH', color: 'purple', text: 'Oldage Homes' },
        { name: 'OA', color: 'purple', text: 'OrphanAge' },
        { name: 'NG', color: 'purple', text: 'New Ngo' },
        { name: 'PT', color: 'purple', text: 'Pet' }
    ];

    const LikeMethod = (PostId, Id) => {
        axios.post("http://localhost:4000/api/v1/user/reaction", {
            reactionType: "like",
            postId: PostId,
            userId: Id
        })
    }

    const DislikeMethod = (PostId, Id) => {
        axios.post("http://localhost:4000/api/v1/user/reaction", {
            reactionType: "dislike",
            postId: PostId,
            userId: Id
        })
    }


    const handleTabClick = (Name) => {
        if (Name == "Profile") {
            Navigate("/profile");
        }
        else if (Name == "About") {
            // Navigate("/profile");
        }
        else if (Name == "Support") {
            Navigate("/support");
        }
    }

    useEffect(() => {
        // Fetch posts when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getpost')
                console.log("LoginData", response);
                setPostData(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const styles = {
        tab: {
            cursor: 'pointer',
            marginRight: '6px', // Adjust this as needed
        },
    };

    useEffect(() => {
        // Fetch posts when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getregister')
                console.log("post", response);
                setLoginData(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
        setUserLoginId(localStorage.getItem("LoginID"));
    }, []);


    return (
        <>
            
            {
                PostData.map((value, index) => {
                    return <><br />
                        <Card sx={{ maxWidth: 345, marginLeft: 65, boxShadow: 3 }} key={index}>

                            <CardMedia
                                component="img"
                                height="194"
                                image={`http://localhost:4000/${value.image}`}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {value.discription}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <ThumbUpOffAltIcon onClick={() => LikeMethod(value._id, UserLoginId)} />
                                </IconButton>
                                {value.like && Array.isArray(value.like) && value.like.map((uservalue, index) => {
                                    return LoginData.map((userData, Index) => {
                                        if (uservalue == userData._id) {
                                            return (
                                                <AvatarGroup key={Index}>
                                                    <Avatar
                                                        alt="User Avatar"
                                                        src={`http://localhost:4000/${userData.image}`}
                                                        style={{ width: '15px', height: '15px' }}
                                                    />
                                                </AvatarGroup>
                                            );
                                        }
                                        return null; // Return null if there's no match
                                    });
                                })}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <IconButton aria-label="add to favorites">
                                    <ThumbDownOffAltIcon onClick={() => DislikeMethod(value._id, UserLoginId)} />
                                </IconButton>
                                {value.like && Array.isArray(value.like) && value.like.map((uservalue, index) => {
                                    return LoginData.map((userData, Index) => {
                                        if (uservalue == userData._id) {
                                            return (
                                                <AvatarGroup key={Index}>
                                                    <Avatar
                                                        alt="User Avatar"
                                                        src={`http://localhost:4000/${userData.image}`}
                                                        style={{ width: '15px', height: '15px' }}
                                                    />
                                                </AvatarGroup>
                                            );
                                        }
                                        return null; // Return null if there's no match
                                    });
                                })}
                            </CardActions>

                        </Card>
                    </>
                })
            }
        </>
    );
}

export default OLDHOMEPAGE;
