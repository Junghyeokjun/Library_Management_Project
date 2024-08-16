import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
//해당 component는 머티리얼 ui의 템플릿을 사용한 코드입니다.

const defaultTheme = createTheme();

export default function SignIn({ isAuthenticated, login }) {
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = React.useState("ㅤ");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email") === "") {
      setLoginFail("이메일을 입력해주세요");
      return;
    } else if (data.get("email").indexOf("@") === -1) {
      setLoginFail("올바른 이메일을 입력해주세요");
      return;
    } else if (data.get("password") === "") {
      setLoginFail("패스워드를 입력해주세요");
      return;
    } else if (data.get("password").length < 6) {
      setLoginFail("올바른 패스워드를 입력해주세요");
      return;
    }
    try {
      await login({
        username: data.get("email"),
        password: data.get("password"),
      });
    } catch (e) {
      if (e.response && e.response.status === 401) {
        setLoginFail("잘못된 이메일 또는 비밀번호를 입력하셨습니다.");
      }
    }
  };
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // 로그인 성공 후 이동할 경로
    }
  }, [isAuthenticated, navigate]);
  return (
    <Box
      sx={{
        display: "flex",
        height: "60vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography sx={{ fontSize: "0.7em", color: "red" }}>
                {loginFail}
              </Typography>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="아이디 기억하기"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  비밀번호를 잊으셨나요?
                </Link> */}
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"계정이 없으신가요?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </Box>
  );
}
