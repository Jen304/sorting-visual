import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SortDisplay from "./components/SortDisplay";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Sorting Visualization</Typography>{" "}
        </Toolbar>
      </AppBar>
      <SortDisplay />
    </div>
  );
}

export default App;
