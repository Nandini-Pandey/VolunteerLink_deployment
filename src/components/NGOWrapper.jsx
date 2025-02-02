import { CssBaseline, ThemeProvider, Box, Container, Drawer, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { useState } from "react";
import theme from "../Theme";
import NGODashboard from "../components/NGODashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NGOWrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar function called! Sidebar state before:", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Pass onProfileClick to Navbar */}
      <Navbar onProfileClick={toggleSidebar} />
      
      <Container maxWidth="lg" sx={{ display: "flex", paddingY: 4 }}>
        {/* Main Dashboard Content */}
        <Box sx={{ 
          flexGrow: 1, 
          padding: 3, 
          backgroundColor: 'background.paper', 
          borderRadius: '8px', 
          boxShadow: 3, 
          marginRight: 4 }}>
          <NGODashboard />
        </Box>

 {/* Sidebar Drawer */}
<Drawer 
  anchor="right" 
  open={isSidebarOpen} 
  onClose={toggleSidebar} 
  PaperProps={{ sx: { width: 350, padding: 3, backgroundColor: "#f5f5f5", borderRadius: "10px" } }}>
  
  {/* Sidebar Header */}
  <Box sx={{ textAlign: "center", marginBottom: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
      NGO Profile
    </Typography>
    <Typography variant="body2" sx={{ fontStyle: "italic", color: "#666" }}>
      Helping Hands Foundation
    </Typography>
  </Box>

  {/* NGO Details */}
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
        <Typography variant="body2" sx={{ color: "#333" }}>Helping Hands Foundation</Typography>
      </Box>
    </ListItem>

    {/* Mission Card (Yellow) */}
    <ListItem sx={{ mb: 2 }}>
      <Box sx={{ 
        width: "100%", 
        padding: 2, 
        backgroundColor: "#fff9c4", 
        borderRadius: 2, 
        boxShadow: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Mission:</Typography>
        <Typography variant="body2" sx={{ color: "#333" }}>Empowering underprivileged children through education and healthcare.</Typography>
      </Box>
    </ListItem>

    {/* Team Size Card (Green) */}
    <ListItem sx={{ mb: 2 }}>
      <Box sx={{ 
        width: "100%", 
        padding: 2, 
        backgroundColor: "#c8e6c9", 
        borderRadius: 2, 
        boxShadow: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Team Size:</Typography>
        <Typography variant="body2" sx={{ color: "#333" }}>25 Members</Typography>
      </Box>
    </ListItem>

    {/* Volunteer Needs Card (Yellow) */}
    <ListItem sx={{ mb: 2 }}>
      <Box sx={{ 
        width: "100%", 
        padding: 2, 
        backgroundColor: "#fff9c4", 
        borderRadius: 2, 
        boxShadow: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Volunteer Needs:</Typography>
        <List sx={{ paddingLeft: 2 }}>
          <ListItem><Typography variant="body2" sx={{ color: "#333" }}>- Teaching & Mentorship</Typography></ListItem>
          <ListItem><Typography variant="body2" sx={{ color: "#333" }}>- Event Planning & Coordination</Typography></ListItem>
          <ListItem><Typography variant="body2" sx={{ color: "#333" }}>- Fundraising & Grant Writing</Typography></ListItem>
        </List>
      </Box>
    </ListItem>

    {/* Verified NGO Card (Green) */}
    <ListItem sx={{ mb: 2 }}>
      <Box sx={{ 
        width: "100%", 
        padding: 2, 
        backgroundColor: "#c8e6c9", 
        borderRadius: 2, 
        boxShadow: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>Verified ?:</Typography>
        <Typography variant="body2" sx={{ color: "#333" }}>✅ Yes</Typography>
      </Box>
    </ListItem>
  </List>

  {/* Update Profile Button */}
  <Button 
    variant="contained" 
    color="primary" 
    fullWidth 
    sx={{ marginTop: 2, borderRadius: 2, paddingY: 1 }}>
    Update Profile
  </Button>
</Drawer>


      </Container>
      
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default NGOWrapper;

