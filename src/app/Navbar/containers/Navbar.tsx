import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HelpCenter, HomeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ListAltOutlined, ShoppingCart } from "@material-ui/icons";


export default function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, ["left"]: open });
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        <Link to={"/"}>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to={"/about"}>
          <ListItem>
            <ListItemIcon>
              <HelpCenter />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </Link>
        <Link to={"/order"}>
          <ListItem>
            <ListItemIcon>
              <ListAltOutlined />
            </ListItemIcon>
            <ListItemText primary={"Order"} />
          </ListItem>
        </Link>
        <Link to={"/cart"}>
          <ListItem>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary={"Cart"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box position='fixed'>
      <Button onClick={toggleDrawer( true)}>MENU</Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer( false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
