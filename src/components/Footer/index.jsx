import React from "react";
import { Container, Grid } from "@material-ui/core";
import logo from "../../assets/images/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid container>
        <Grid container item sm={12} lg={4}>
          <img src={logo} alt="log-footer" width="150px" />
          <div style={{ marginTop: "1em" }}>
            <span className="footer__welcome">Welcome to my Page</span>
          </div>
        </Grid>
        <Grid container item sm={12} lg={8}>
        <Grid item lg={3} sm={12}>
          <ol className="footer__list">
            <li>THE BASICS</li>
            <li>Giới thiệu về TMDb</li>
            <li>Contact Us</li>
            <li>API</li>
            <li>System Status</li>
          </ol>
        </Grid>
        <Grid item lg={3} sm={12}>
          <ol className="footer__list">
            <li>GET INVOLVED</li>
            <li>Contribution Bible</li>
            <li>Ứng dụng bên thứ 3</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ol>
        </Grid>
        <Grid item lg={3} sm={12}>
          <ol className="footer__list">
            <li>COMMUNITY</li>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ol>
        </Grid>
        <Grid item lg={3} sm={12}>
          <ol className="footer__list">
            <li>LEGAL</li>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ol>
        </Grid>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}
