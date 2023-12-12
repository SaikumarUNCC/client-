import * as React from "react";
import './HomePage.css'
import AppBarComponent from "../AppBarComponent/AppBarComponent";
import Hero from "../Hero/Hero";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomePage() {

  const redirectToLink = (value) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect to a link for authenticated users
      window.location.href = value.link.authenticated;
    } else {
      // Redirect to a link for unauthenticated users
      window.location.href = value.link.unauthenticated;
    }
  };

  const sections = [
    {
      title: 'Functionality 1',
      description: 'Users can add, edit, and delete the budgets.',
      function: 'View Budgets',
      link: {
        authenticated: '/mybudgets',
        unauthenticated: '/signup',
      },
    },
    // ... (rest of the sections remain unchanged)
  ];

  return (
    <div>
      <AppBarComponent />
      <Hero />

      <Box
        sx={{
          width: '50%',
          margin: 'auto',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: 3,
          backgroundColor: '#e6e6e6',
          textAlign: 'center',
          mt: 3,
          p: 3,
        }}
      >
        <h2 style={{ color: '#555', fontSize: '24px' }}>
        The Personal Budget app serves as a valuable tool for organizing and planning expenses. It enables users to establish budgets for various items based on specific months. Additionally, users can visualize and track their budgets effectively.
        </h2>
        <Typography variant="h5" align='center' gutterBottom style={{ color: 'orange', fontSize: '18px', marginTop: '10px' }}>
          Functionalities
        </Typography>
        <hr style={{ backgroundColor: 'Yellow', height: '3px', border: 'none', margin: '25px auto', width: '70%' }} />
        <List sx={{ width: '90%', bgcolor: 'transparent' }}>
          {sections.map((value) => (
            <ListItem
              key={value.description}
              disableGutters
              secondaryAction={
                <Button onClick={() => redirectToLink(value)}
                  variant="contained"
                  style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px', color: 'Light Red', backgroundColor: 'Light red', width: '150px' }}>
                  {value.function}
                </Button>
              }
            >
              <ListItemText primary={value.description} style={{ color: '#333', fontSize: '14px' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
