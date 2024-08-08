import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
//해당 component는 머티리얼 ui의 템플릿을 사용한 코드입니다.

const pages = ["회원 관리", "도서관리", "대출내역 조회"];
const settings = ["마이 페이지", "로그아웃"];

const ResponsiveAppBar = ({ isAuthenticated, token, logout }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigite = useNavigate();
  const role = token ? jwtDecode(token).role : false;
  const handleOpenUserMenu = (event) => {
    if (isAuthenticated) {
      setAnchorElUser(event.currentTarget);
    } else {
      navigite("/login");
    }
  };

  const handleCloseNavMenu = (page) => {
    switch (page) {
      case pages[0]: {
        navigite("/userlist");
        break;
      }
      case pages[1]: {
        navigite("/bookmanagement");
        break;
      }
      case pages[2]: {
        navigite("/loanlist");
        break;
      }

      default:
        break;
    }
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    switch (setting) {
      case settings[0]: {
        navigite("/mypage");
        break;
      }
      case settings[1]: {
        logout();
        navigite("/login");
        break;
      }

      default:
        break;
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/"
          >
            <HomeIcon />
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {isAuthenticated && role[0].authority === "ROLE_ADMIN"
              ? pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))
              : ""}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon />
              </IconButton>
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
                //후에 리듀서 처리
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
