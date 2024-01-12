import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Heading from "../heading";
import Input from "../Input";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 110,
    width: 50,
  },
}));

export default function FieldBar() {
  return (
    <>
      <div style={{ marginTop: "15px"}}>
        <Heading   textAlign="left" textColor="white" title="Upload Case" fontSize={30}  />
      </div>
      <Box
        sx={{
          marginTop: "20px",
         
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: "black", mx: "auto" }}>
          <StyledToolbar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginRight: "160px" }}>
                <Heading textColor="white" title={"Title"} fontSize={20} />
              </div>

              <Input
                placeholder={"Enter the Case Title"}
                width={200}
                type={"text"}
                fontSize={20}
              />
            </div>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
}
