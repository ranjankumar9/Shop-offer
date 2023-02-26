import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin:"auto"}}>
      <Typography variant="overline" display="block" gutterBottom>
        {/* Made by <a href="https://ranjankumar9.github.io/">Ranjan Kumar</a> */}
      </Typography>
    </div>
  );
}
