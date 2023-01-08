import React from "react";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../styles/jss/nextjs-material-kit/components/typographyStyle";
import { ReactChildrenProps } from "../../types/global";

const useStyles = makeStyles(styles);

export default function Info(props: ReactChildrenProps) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}
