import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import "./header.css";
import { LoginContext } from "./ContextProvider/Context";
import {Menu,MenuItem,Button} from "@mui/material";
// import MenuItem from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const { logindata } = useContext(LoginContext);
  // console.log(logindata)

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutuser = async () => {
    let token = localStorage.removeItem("token");
    console.log("token",token)
    history('/')
  };

  // const goDash = () => {
  //   history("/dash");
  // };

  // const goError = () => {
  //   history("*");
  // };

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">
            <h1>Admin</h1>
          </NavLink>
          <div className="avtar">
            {logindata.ValidUserOne ? (
              <Avatar
                style={{
                  background: "blue",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={handleClick}
              >
                {logindata.ValidUserOne.fname[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar style={{ background: "blue" }} onClick={handleClick} />
            )}
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* {logindata.ValidUserOne ? ( */}
              {/* <div>
                <MenuItem
                  onClick={() => {
                    goDash();
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  
                >
                  Logout
                </MenuItem>
              </div>
            ) : ( */}
              <div>
                <MenuItem
                  
                  
                ><Button onClick={logoutuser}>
                  Logout
                </Button>
                </MenuItem>
              </div>
            {/* )} */}
          </Menu>
        </nav>
      </header>
    </div>
  );
};

export default Header;
