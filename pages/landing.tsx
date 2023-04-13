import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";
import Link from "next/link";

import { List, ListItem } from "@material-ui/core";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Kaptcha Me"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Wishlist
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="/login">
                <Button
                  className={classes.registerNavLink}
                  color="primary"
                  size="lg"
                  color="rose"
                  round
                >
                  Login/Register
                </Button>
              </Link>
            </ListItem>
          </List>
        }
      />
      <Parallax filter responsive image="/img/doubleTroubleActionShot.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>You're not a bot. Prove it.</h1>
              <h3>Who doesn't love image challenge CAPTCHAs? Just kidding.</h3>
              <h4>
                Everyone is pretty much sick of CAPTCHAs that ask you to choose
                all the images containing exactly 37 chicken feathers or
                whatever it prompts you with. Improve your bot detection user
                experience with the new kaptcha-me DaVinci flow.
              </h4>
              <br />
              <Button
                className={classes.registerNavLink}
                color="primary"
                size="lg"
                color="rose"
                round
              >
                Try it out now
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
