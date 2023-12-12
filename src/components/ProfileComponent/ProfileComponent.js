import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Collapse from '@mui/material/Collapse';
import FormControlLabel from "@mui/material/FormControlLabel";
import AppBarComponent from '../AppBarComponent/AppBarComponent';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";


const ProfileComponent = () => {
    // ... (Existing code remains the same)

    const defaultTheme = createTheme({
        typography: {
            fontFamily: [
                'Arial',
                'sans-serif'
            ].join(','),
            fontSize: 20,
        },
        palette: {
            primary: {
                main: '#e51c6b',
            },
            secondary: {
                main: '#e91e63',
            },
            text: {
                primary: '#333333',
                secondary: '#666666',
            },
            background: {
                default: '#dc1856',
            },
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            {/* Existing code remains the same */}
        </ThemeProvider>
    );
};

export default ProfileComponent;
