import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


export const sidebarOptions = [
    {
        title: "",
        icon: <TwitterIcon style={{color: "#fff", borderRadius: "90px"}} />,
        path: "/home"
    },
    {
        title: "Inicio",
        icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Explorar",
        icon: <TwitterIcon />,
        path: "/explorer"
    },
    {
        title: "Notificaciones",
        icon: <NotificationsNoneIcon />,
        path: "/notifications"
    },
    {
        title: "Mensajes",
        icon: <MailOutlineIcon />,
        path: "/messages"
    },
    {
        title: "Guardados",
        icon: <BookmarkBorderIcon />,
        path: "/bookmark"
    },
    {
        title: "Listas",
        icon: <ListAltIcon />,
        path: "/lists"
    },
    {
        title: "Perfil",
        icon: <PersonOutlineIcon />,
        path: "/profile"
    },
    {
        title: "Más opciones",
        icon: <MoreHorizIcon />,
        path: "/options"
    },
];