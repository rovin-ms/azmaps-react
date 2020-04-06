import React from "react";
import { MapConfigProvider } from "./MapConfigContext";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import AzureMap from "./components/AzureMap";

console.log(`${process.env.REACT_APP_API_KEY}`);

function App() {
  return (
    <div className="App">
      <SideNav
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i
                className="fa fa-fw fa-home"
                style={{ fontSize: "1.75em", color: "#fff" }}
              />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            {/* <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem> */}
          </NavItem>
        </SideNav.Nav>
      </SideNav>

      <MapConfigProvider>
        <AzureMap />
      </MapConfigProvider>
    </div>
  );
}

export default App;
