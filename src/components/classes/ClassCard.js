import React from "react";
import { Route, NavLink } from "react-router-dom";
// import CardDescription from "./CardDescription";

//START Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 10,
    marginRight: 10
  }
});
//END Material UI

function ClassCard(props) {
  const classes = useStyles();

  // console.log(item);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Cross Fit"
          height="140"
          image="https://www.wellandgood.com/wp-content/uploads/2019/08/GettyImages-931805226-crossfitgames-alvarez.jpg"
          title="Cross Fit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.class_details.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.class_details.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ClassCard;
