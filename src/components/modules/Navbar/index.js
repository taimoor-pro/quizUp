import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/images/loyal_university.jpg";
import AdminLogo from "../../../assets/images/user_image.png";
import { Link } from "react-router-dom";
import ProfileModal from "../Modals/modal";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar(props) {
  const {
    id,
    feildsData,
    button,
    title,
    show,
    handleCloseModal,
    updateProfile,
    inputFeildsData,
    select,
  } = props;

  console.log(feildsData, "asocuxsa");

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }} >
        <Container maxWidth="xl" style={{padding:"10px"}}>
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  marginRight: "8px", // Add some spacing between the image and text
                  width: "60px", // Adjust the width as needed
                  height: "60px", // Adjust the height as needed
                }}
              />
            </Typography>

            {/* All Links */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {feildsData?.map((page) => (
                <>
                  <Link
                    key={page.id}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontWeight: 100,
                    }}
                    className="text-white text-decoration-none mx-3"
                    to={page.url}
                    style={{fontSize:"17px"}}
                  >
                    {page.link}
                  </Link>
                  {console.log(page.url)}
                </>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} className="me-4">
              <Tooltip title="Open settings">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Admin" src={AdminLogo} />
                  </IconButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ marginLeft: "8px" }}>{title} Area</span>
                    <span
                      style={{
                        marginLeft: "8px",
                        fontSize: "0.8rem",
                        color: "#bbb",
                        fontWeight: 500,
                      }}
                    >
                      {title} role
                    </span>
                  </div>
                </div>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {button.map((btn) => {
              return (
                <Button
                  type="button"
                  key={btn.id}
                  variant="contained"
                  className="mx-1"
                  style={{ backgroundColor: "#8b003a" }}
                  onClick={btn.onClick}
                >
                  {btn.buttonText}
                </Button>
              );
            })}
          </Toolbar>
        </Container>
      </AppBar>

      <ProfileModal
        show={show}
        handleClose={handleCloseModal}
        id={id}
        title={updateProfile}
        inputFeildsData={inputFeildsData}
        select={select}
      />
    </>
  );
}
export default NavBar;
