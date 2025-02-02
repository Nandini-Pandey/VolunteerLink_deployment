import React, { useState } from "react";
import Navbar from "./Navbar";
import CurrTasks from "./CurrTasks";
import Recommendation from "./Recommendation";
import ImpactDash from "./ImpactDash";
import AllJobs from "./AllJobs";
import Feature from "./Feature";
import { Drawer, Typography, List, ListItem, ListItemText, Button, Box } from "@mui/material";
import "./dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar function called! Sidebar state before:", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar onProfileClick={toggleSidebar} />
      <ImpactDash />
      <div className="all-cards">
        <Recommendation />
        <Feature />
        <AllJobs />
      </div>
      <CurrTasks />

      {/* Profile Sidebar */}
      <Drawer 
        anchor="right" 
        open={isSidebarOpen} 
        onClose={toggleSidebar} 
        PaperProps={{
          sx: {
            width: 350,
            padding: 3,
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: 3,
          },
        }}>
        
        <Box sx={{ textAlign: "center", marginBottom: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
            Volunteer Profile
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic", color: "#666" }}>
            John Doe
          </Typography>
        </Box>

        <List>
          {/* Name Card (Green) */}
          <ListItem sx={{ mb: 2 }}>
            <Box sx={{ 
              width: "100%", 
              padding: 2, 
              backgroundColor: "#c8e6c9", 
              borderRadius: 2, 
              boxShadow: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Name:</Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>John Doe</Typography>
            </Box>
          </ListItem>

          {/* Location Card (Yellow) */}
          <ListItem sx={{ mb: 2 }}>
            <Box sx={{ 
              width: "100%", 
              padding: 2, 
              backgroundColor: "#fff9c4", 
              borderRadius: 2, 
              boxShadow: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Current Location:</Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>New York, USA</Typography>
            </Box>
          </ListItem>

          {/* Skills Card (Green) */}
          <ListItem sx={{ mb: 2 }}>
            <Box sx={{ 
              width: "100%", 
              padding: 2, 
              backgroundColor: "#c8e6c9", 
              borderRadius: 2, 
              boxShadow: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Skills:</Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>Teaching, Fundraising, Event Management</Typography>
            </Box>
          </ListItem>

          {/* Preferred Volunteering Card (Yellow) */}
          <ListItem sx={{ mb: 2 }}>
            <Box sx={{ 
              width: "100%", 
              padding: 2, 
              backgroundColor: "#fff9c4", 
              borderRadius: 2, 
              boxShadow: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Preferred Volunteering:</Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>Offline</Typography>
            </Box>
          </ListItem>

          {/* Hours Contributed Card (Green) */}
          <ListItem sx={{ mb: 2 }}>
            <Box sx={{ 
              width: "100%", 
              padding: 2, 
              backgroundColor: "#c8e6c9", 
              borderRadius: 2, 
              boxShadow: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Hours Contributed:</Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>50 Hours</Typography>
            </Box>
          </ListItem>

          {/* Verified Volunteer Card (Yellow) */}
          <ListItem sx={{ mb: 2 }}>
            <Box sx={{ 
              width: "100%", 
              padding: 2, 
              backgroundColor: "#fff9c4", 
              borderRadius: 2, 
              boxShadow: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Verified Volunteer:</Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>✅ Yes</Typography>
            </Box>
          </ListItem>
        </List>

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ marginTop: 2, borderRadius: 2, paddingY: 1 }}>
          Update Profile
        </Button>
      </Drawer>
    </>
  );
};

export default Dashboard;
