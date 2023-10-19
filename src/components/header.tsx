"use client";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from ".././app/assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   AuthenticationDetails,
//   CognitoUser,
//   CognitoUserSession,
// } from "amazon-cognito-identity-js";
// import useHandler from "./useHandler";

const initialValues = {
  email: "",
  password: "",
};

// const validateSchema = Yup.object({
//   email: Yup.string().email().required("Please enter your email"),
//   password: Yup.string().min(2).required("Please enter your password"),
// });

const Header = () => {
  const router = useRouter();
  // const { userPool, getAttributes } = useHandler();
  // const { getAuthenticatedUser, setLoad } = useHandler();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [jwtToken, setJwtToken] = React.useState("");
  console.log("jwtToken", jwtToken);

  const [data, setData] = React.useState<any>();

  const [anchorLog, setAnchorLog] = React.useState(null);
  const [state, setState] = useState({
    email: "",
    password: "",
    error: undefined,
  });
  const { email, password, error } = state;

  const pages = [
    "home",
    // "about",
    // "future",
    "contact",
    // "past",
    // "profile",
    // "event",
  ];

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLog = (event: any) => {
    setAnchorLog(event.currentTarget);
  };

  const handleCloseLog = () => {
    setAnchorLog(null);
  };
  // const userData = {
  //   Username: email,
  //   Pool: userPool,
  // };
  // const congnitoUser = new CognitoUser(userData);
  // useEffect(() => {
  //   if (localStorage.getItem("jwtToken")) {
  //     setJwtToken("data");
  //   } else {
  //     setJwtToken(null);
  //   }
  //   setLoad(false);
  // // }, []);

  // const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
  //   useFormik({
  //     initialValues: initialValues,
  //     validationSchema: validateSchema,
  //     onSubmit: (values, action) => {
  //       // e.preventDefault();
  //       var authenticationData = {
  //         Username: values.email,
  //         Password: values.password,
  //       };

  //       console.log("errors", errors);

  //       const authDetails = new AuthenticationDetails(authenticationData);
  //       const userData = {
  //         Username: values.email,
  //         Pool: userPool,
  //       };
  //       const congnitoUser = new CognitoUser(userData);
  //       action.resetForm;

  //       congnitoUser.authenticateUser(authDetails, {
  //         onSuccess(result: CognitoUserSession) {
  //           // console.log("this is result", result.getAccessToken().payload);
  //           // console.log("bahvin", getAttributes());

  //           congnitoUser.getUserAttributes(function (err, result) {
  //             if (err) {
  //               alert(err.message || JSON.stringify(err));
  //               return;
  //             }
  //             // console.log("result", result);
  //             // for (i = 0; i < result.length; i++) {
  //             //   console.log(
  //             //     "attribute " +
  //             //       result[i].getName() +
  //             //       " has value " +
  //             //       result[i].getValue()
  //             //   );
  //             // }
  //           });

  //           if (result) {
  //             console.log("result", result);
  //             console.log("token", result.getAccessToken().payload);
  //             // console.log("token", result.accessToken.jwtToken);
  //             // @ts-ignore
  //             localStorage.setItem("jwtToken", result?.accessToken?.jwtToken);
  //             setJwtToken("token");
  //           }
  //         },
  //         onFailure(err) {
  //           const { message } = err;
  //           setState({ ...state, error: message });
  //           console.log("failure from login", message);
  //         },
  //       });
  //       setState({
  //         ...state,
  //         email: "",
  //         password: "",
  //       });

  //       handleCloseLog(), router.push("/");
  //     },
  //   });

  return (
    <Box>
      <Box
        sx={{
          // marginTop: { xs: "30px", md: "40px" },
          // marginBottom: { xs: "43px", md: "48px" },
          marginInline: { xs: "20px", md: "57px" },
        }}
      >
        <Box position="static" color="transparent">
          <Toolbar>
            <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
              <Image
                src={Logo}
                width={200}
                height={20}
                alt="Picture of the author"
                onClick={() => router.push("/")}
              />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {pages.map((item) => (
                <>
                  <Button
                    key={item}
                    sx={{
                      color: "#7D848A",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                    onClick={() =>
                      item === "home"
                        ? router.push("/")
                        : router.push(`/${item}`)
                    }
                  >
                    {item}
                  </Button>
                </>
              ))}
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                onClick={handleOpenNavMenu}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
