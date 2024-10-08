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

export default function SignUp({ isAuthenticated, signUp }) {
  const navigate = useNavigate();
  const [signUpFail, setSignUpFail] = React.useState("ㅤ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const name = data.get("lastName").concat(data.get("firstName"));

      if (data.get("firstName") === "") {
        setSignUpFail("이름이 입력되지 않았습니다.");
        return;
      } else if (data.get("email") === "") {
        //추후 메일인증 추가시 인증방식으로 검사
        setSignUpFail("이메일이 입력되지 않았습니다.");
        return;
      } else if (data.get("email").indexOf("@") === -1) {
        setSignUpFail("이메일의 형식에 맞춰주세요.");
        return;
      } else if (data.get("password") === "") {
        setSignUpFail("패스워드가 입력되지 않았습니다.");
        return;
      } else if (data.get("password").length < 6) {
        setSignUpFail("패스워드는 6자리 이상으로 입력해주세요.");
        return;
      }

      await signUp(
        {
          email: data.get("email"),
          password: data.get("password"),
          //한국인은 성이 앞에 오므로 lastName+fistName
          userName: name,
        },
        navigate
      );
    } catch (e) {
      if (e.response.status === 400) {
        setSignUpFail(e.response.data);
        return;
      } else {
        setSignUpFail(e.response.data);
      }
      return;
    }

    navigate("/");
  };
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // 인증이 되있을시 메인페이지로 리다이렉트
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
              회원가입
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="이름"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="성(선택)"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                {/*<Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
                {/* 이메일 동의 기능이 필요할때 사용 */}
              </Grid>
              <Typography sx={{ fontSize: "0.7em", color: "red" }}>
                {signUpFail}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>
              <Grid container justifyContent="flex-end">
                <Link to="/login" variant="body2">
                  <Grid item>이미 아이디가 있으신가요?</Grid>
                </Link>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    </Box>
  );
}
