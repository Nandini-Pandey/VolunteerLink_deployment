import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, Typography, LinearProgress, Button, List, ListItem, ListItemText } from '@mui/material';
import { People, Task, Event, AttachMoney, MonetizationOn, AccessTime, CheckCircle, EventNote, RateReview, Share, PersonAdd, BarChart, PendingActions, AdUnits } from '@mui/icons-material';

function NGODashboard() {
  const [showJobs, setShowJobs] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const jobList = [
    "Volunteer at Book Donation Drive",
    "Help with Fundraising Campaign for Education",
    "Assist in Community Outreach Program",
  ];

  const feedbackList = [
    "Great support and easy communication.",
    "Looking forward to more opportunities!",
    "Loved the event, would volunteer again."
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", padding: 3, backgroundColor: "#fafafa" }}>
      {/* Dashboard Header */}
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4, color: "#333", textAlign: 'center' }}>
        NGO Dashboard
      </Typography>
      
      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {/* Volunteers Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#f0f8ff", height: '220px' }}>
            <CardContent>
              <People fontSize="large" sx={{ color: "#4caf50" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Volunteers</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4caf50" }}>150</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Ongoing Tasks Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#fff8e1", height: '220px' }}>
            <CardContent>
              <Task fontSize="large" sx={{ color: "#ff9800" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Ongoing Tasks</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ff9800" }}>12</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#e8f5e9", height: '220px' }}>
            <CardContent>
              <Event fontSize="large" sx={{ color: "#388e3c" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Upcoming Events</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#388e3c" }}>5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Funds Raised Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#ffe0b2", height: '220px' }}>
            <CardContent>
              <AttachMoney fontSize="large" sx={{ color: "#ff5722" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Funds Raised</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ff5722" }}>$25,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Cards Grid */}
      <Grid container spacing={3} sx={{ flexGrow: 1, mt: 4 }}>
        {/* Donors Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#c8e6c9", height: '220px' }}>
            <CardContent>
              <MonetizationOn fontSize="large" sx={{ color: "#43a047" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Donors</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#43a047" }}>200</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Volunteer Hours Logged Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#bbdefb", height: '220px' }}>
            <CardContent>
              <AccessTime fontSize="large" sx={{ color: "#2196f3" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Volunteer Hours</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2196f3" }}>1,200 hrs</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Task Completion Rate Card */}
        <Grid item xs={12} sm={6} md={3}>
  <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#fff3e0", height: '220px' }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <CheckCircle fontSize="large" sx={{ color: "#ffb74d" }} />
      <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Completion Rate</Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ffb74d" }}>80%</Typography>
    </CardContent>
  </Card>
</Grid>

        {/* Upcoming Meetings Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4, borderRadius: 2, backgroundColor: "#e3f2fd", height: '220px' }}>
            <CardContent>
              <EventNote fontSize="large" sx={{ color: "#1e88e5" }} />
              <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>Upcoming Meetings</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1e88e5" }}>3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Current Tasks Progress */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "#f1f8e9", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Task Progress</Typography>
        <LinearProgress variant="determinate" value={60} sx={{ height: 12, borderRadius: 5, backgroundColor: "#c8e6c9" }} />
      </Box>

      {/* Available Jobs Section */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Available Volunteering Jobs</Typography>
        <Button variant="contained" color="primary" onClick={() => setShowJobs(!showJobs)} sx={{ boxShadow: 2 }}>
          {showJobs ? "Hide Jobs" : "View All Jobs"}
        </Button>
        {showJobs && (
          <List sx={{ mt: 2 }}>
            {jobList.map((job, index) => (
              <ListItem key={index}>
                <ListItemText primary={job} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Feedback Section */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Feedback</Typography>
        <Button variant="contained" color="primary" onClick={() => setShowFeedback(!showFeedback)} sx={{ boxShadow: 2 }}>
          {showFeedback ? "Hide Feedback" : "View All Feedback"}
        </Button>
        {showFeedback && (
          <List sx={{ mt: 2 }}>
            {feedbackList.map((feedback, index) => (
              <ListItem key={index}>
                <ListItemText primary={feedback} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}

export default NGODashboard;

