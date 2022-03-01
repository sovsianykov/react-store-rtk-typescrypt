import React, { FunctionComponent} from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";


interface ImageProps {
  url : string;
  height : number;
}



const useStyles = makeStyles(() =>({
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  image : {
    display:"block",
    width: "100%"
  }

}))

const WrappedImage:FunctionComponent<ImageProps> = ({url,height}) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <img src={url} alt={url} className={classes.image} style={{ height: height}}/>
      </Box>
  );
};

export default WrappedImage;