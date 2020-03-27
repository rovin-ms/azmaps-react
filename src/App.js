import React from "react";
import AzureMap from "./components/AzureMap";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="news">
            Azure Maps Sandbox for React
          </Typography>
        </Toolbar>
      </AppBar>

      <AzureMap />
    </div>
  );
}

export default App;
