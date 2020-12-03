import { Box, Paper, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function SuggestedMatches() {
  return (
    <div>
      <h2 align="left">Suggested Matches</h2>
      <Box pt={2} pr={1} pb={20} pl={2}>
        <Paper elevation={0}>
          <Grid container spacing={2} alignItems="top">
            <Grid item xs={12} wrap="nowrap">
              <h3 color="textPrimary">
                Edit your preferences on the left and press "Search" to see
                suggested matches!
              </h3>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor="primary.main"></Box>
            </Grid>
            <Grid item>
              <Typography paddingBottom={40}>
                <strong></strong>
              </Typography>
              <Typography paddingBottom={40}>
                <strong></strong>
              </Typography>
              <Typography paddingBottom={40}>
                <strong></strong>
              </Typography>
              <Typography paddingBottom={40}>
                <strong></strong>
              </Typography>
              <Typography paddingBottom={40}>
                <strong></strong>
              </Typography>

              <Typography>
                <strong></strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="flex-end"></Grid>
        </Paper>
      </Box>
    </div>
  );
}
