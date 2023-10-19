"use client";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  IconButton,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import landingBanner from "../assets/landingBanner.png";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Message from "../assets/message.svg";
import Computer from "../assets/computer.png";
import Clock from "../assets/Clock.png";
import bannerMob from "../assets/bannerMob.png";
import lefttArrow from "../assets/lefttArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import messageMob from "../assets/messageMob.png";
import computerMob from "../assets/computerMob.png";
import clockMob from "../assets/clockMob.png";
import modalLogo from ".././assets/modalLogo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Home = () => {
  const [anchorLog, setAnchorLog] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    country: "",
  };

  const validateSchema = Yup.object({
    firstname: Yup.string()
      .min(2)
      .max(25)
      .required("Please enter your First name"),
    lastname: Yup.string()
      .min(2)
      .max(25)
      .required("Please enter your Last name"),
    email: Yup.string().email().required("Please enter your email"),
    country: Yup.string()
      .min(2)
      .max(100)
      .required("Please enter your country of residence"),
  });
  const theme = useTheme();

  const Root = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "646px",
      marginBottom: "86px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "673px",
      marginBottom: "56px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "673px",
    },
  }));

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleOpenLog = (event: any) => {
    console.log("hello", event.currentTarget);

    setAnchorLog(event.currentTarget);
  };
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseLog = () => {
    setAnchorLog(null);
  };
  const data = {
    firstname: "firstname",
    lastname: "lastname",
  };
  const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validateSchema,
      onSubmit: (values, action) => {
        // axios
        //   .post(
        //     "https://api.hubapi.com/crm/v3/objects/contacts",
        //     {
        //       lastname: "lastname",
        //       firstname: "firstname",
        //     },
        //     {
        //       withCredentials: false,
        //     }
        //   )
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        axios
          .post("https://api.hubapi.com/crm/v3/objects/contacts", data, {
            headers: {
              authorization:
                "Bearer pat-eu1-3876988c-ba4c-4e1b-814a-b8aa2c8b0608",
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // return  response;
            console.log("response", response);
          })
          .catch((error) => {
            console.log("error", error);

            //return  error;
          });
      },
    });

  return (
    <Box>
      <Root>
        {matches == true ? (
          <Image
            src={landingBanner}
            alt="banner"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
        ) : (
          <Image
            src={bannerMob}
            alt="banner"
            style={{ width: "100%", height: "97%", position: "absolute" }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              width: { xs: "375px", md: "910px" },
              height: { xs: "151px", md: "65px" },
              fontWeight: { xs: "500", md: "700" },
              lineHeight: { xs: "52px", md: "70px" },
            }}
          >
            Veiovia’s Mindshare Series
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: { xs: "500", md: "400" },
              width: { xs: "316px", md: "981px" },
              height: { xs: "214px", md: "104px" },
              lineHeight: { xs: "26px", md: "35px" },
              marginTop: { xs: "32px", md: "24px" },
            }}
          >
            Free monthly conferences featuring cutting edge research directly
            from scientists, innovators and technologists. Brought to you in an
            accessible and actionable format that is open to all.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "30px",
              marginTop: { xs: "24px", md: "40px" },
              paddingInline: "30px",
              paddingBlock: "16px",
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: "700",
            }}
          >
            Launching Jan 2024
          </Typography>
          <Card
            // className={classes.card}
            sx={{
              width: { xs: "326px", md: "837px" },
              height: { xs: "342px", md: "288px" },
              position: "absolute",
              marginTop: { xs: "56rem", md: "46rem" },
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: "",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: "400",
                color: "#0084FD",
              }}
            >
              Reserve a ticket
            </Typography>
            <Typography
              sx={{
                marginBlock: "35px",
                fontSize: "24px",
                fontWeight: "400",
                color: "#7D848A",
                lineHeight: "26px",
              }}
            >
              Register on the waitlist for priority access
            </Typography>
            <Button
              size="small"
              onClick={handleOpenLog}
              sx={{
                color: "#fff",
                backgroundColor: "#F57E59",
                marginLeft: "7px",
                borderRadius: "53px",
                paddingInline: "20px",
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid white",
                "&:hover": {
                  background: "#F57E59",
                },
              }}
            >
              Join the whitelist
            </Button>
          </Card>
        </Box>
      </Root>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop: "14rem",
            // marginBottom: "20rem",
            flexDirection: "column",
            width: { md: "889px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              width: { xs: "256px", md: "unset" },
              lineHeight: "52px",
              fontWeight: "600",
              color: "#0084FD",
              marginTop: { xs: "64px", md: "unset" },
            }}
          >
            Dive into the Future
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: "400",
              lineHeight: { xs: "17px", md: "26px" },
              marginTop: { xs: "24px", md: "40px" },
              color: "#000",
              width: { xs: "304px", md: "unset" },
            }}
          >
            Our monthly conference series is first and foremost a safe space for
            learning and discussion. We’re uniting innovative thinkers and
            builders from academia, business and Web3. Historically, such groups
            are either a little siloed, or mingle at corporate-sponsored events
            with subtle agendas. That is not the objective with Mindshare. No
            one, including Veiovia, will be selling products and services here.{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: "400",
              lineHeight: { xs: "17px", md: "26px" },
              marginTop: { xs: "12px", md: "20px" },
              width: { xs: "304px", md: "unset" },

              color: "#000",
            }}
          >
            The type people who attend and speak at Mindshare are those keen to
            make a difference and who want to change the world for the better.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "40px",
            gap: "16px",
            flexDirection: { xs: "column", md: "unset" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Card
              sx={{
                height: { xs: "94px", md: "94px" },
                width: { xs: "342px", md: "420px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#0084FD",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Circular Economics
              </Typography>
            </Card>
            <Card
              sx={{
                height: { xs: "94px", md: "94px" },
                width: { xs: "342px", md: "420px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#0084FD",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Digital Privacy
              </Typography>
            </Card>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Card
              sx={{
                height: { xs: "94px", md: "94px" },
                width: { xs: "342px", md: "420px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#0084FD",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Self-Sovereign Identity
              </Typography>
            </Card>
            <Card
              sx={{
                height: { xs: "94px", md: "94px" },
                width: { xs: "342px", md: "420px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#0084FD",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                And more...
              </Typography>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "4px solid #0084FD",
            borderBottom: "4px solid #0084FD",
            marginTop: { xs: "56px", md: "120px" },
            width: { xs: "342px", md: "1300px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "16px", md: "88px" },
            paddingBlock: { xs: "40px", md: "80px" },
            flexDirection: { xs: "column", md: "unset" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "64px" },
              width: { xs: "268px", md: "483px" },
              lineHeight: { xs: "24px", md: "70px" },
              fontWeight: "600",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span style={{ color: "#0084FD" }}> What is Veiovia </span> and why
            are we doing this?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: "400",
              lineHeight: { xs: "17px", md: "26px" },
              width: { xs: "311px", md: "631px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span style={{ fontWeight: "600" }}>Veiovia </span> is a spin-out
            company from the University of York in the UK. We are a deep tech
            startup incorporating peer-reviewed and proprietary technology that
            intersects with core elements of Web3.
            <br></br>
            <br></br>
            Our purpose is advanced through greater awareness of the potential
            benefits that decentralized technology can bring to everyone.
            Mindshare is a component of that strategy.
            <br></br>
            <br></br>
            Supporting and collaborating with aligned projects, businesses,
            academics and individuals helps us towards our collective goals by
            enhancing its credibility through rigorous debate, discussion and
            critical thinking.
          </Typography>
        </Box>
        <Box
          sx={{
            borderBottom: "4px solid #0084FD",
            width: { md: "1300px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: { md: "98px" },
            paddingTop: { xs: "40px", md: "110px" },
            // marginBlock: "98px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              fontWeight: "600",
              width: { xs: "272px", md: "unset" },
              lineHeight: "52px",
            }}
          >
            Who should attend?
          </Typography>
          <Box sx={{ marginTop: { xs: "24px", md: "55px" }, display: "flex" }}>
            <Button
              size="small"
              sx={{
                color: "#fff",
                backgroundColor: "#0084FD",
                marginLeft: "7px",
                borderRadius: "53px",
                paddingInline: "20px",
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid white",
                width: "166px",
                "&:hover": {
                  background: "#0084FD",
                },
              }}
            >
              Futurist
            </Button>
            <Button
              size="small"
              sx={{
                display: { xs: "none", md: "flex" },
                // flexDirection: "column",
                color: "#0084FD",
                marginLeft: "7px",
                borderRadius: "53px",
                paddingInline: "20px",
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid #0084FD",
                width: "166px",
              }}
            >
              Academic
            </Button>
            <Button
              size="small"
              sx={{
                display: { xs: "none", md: "flex" },
                color: "#0084FD",
                marginLeft: "7px",
                borderRadius: "53px",
                paddingInline: "20px",
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid #0084FD",
                width: "166px",
              }}
            >
              Builder
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "24px", md: "40px" },
              width: { xs: "311px", md: "797px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: "400",
                lineHeight: { xs: "17px", md: "26px" },
              }}
            >
              You are a futurist, whether you’re just starting to discover how
              the intersection of technology and creative thinking can change
              the world, or an experienced tech enthusiast that has already
              experimented for themselves. The Mindshare series promises a
              continual roster of experts operating at the frontier of
              technological and societal change; sharing their experiences,
              insights, successes and failures.  <br></br>
              <br></br> Delivered through an accessible and friendly format that
              enables everyone to increase their understanding of each subject
              matter, make connections and obtain even greater agency.
            </Typography>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                marginTop: { xs: "24px", md: "unset" },
              }}
            >
              <IconButton
                size="large"
                edge="end"
                color="primary"
                // onClick={() => {
                //   sideScroll(contentWrapper.current, 25, 200, -10);
                // }}
              >
                <Image src={lefttArrow} alt="" />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                color="primary"
                // onClick={() => {
                //   sideScroll(contentWrapper.current, 25, 200, -10);
                // }}
              >
                <Image src={rightArrow} alt="" />
              </IconButton>
            </Box>
            <Button
              size="small"
              sx={{
                color: "#fff",
                backgroundColor: "#F57E59",
                marginLeft: "7px",
                borderRadius: "53px",
                paddingInline: "20px",
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid white",
                marginTop: { xs: "32px", md: "80px" },
                marginBottom: { xs: "40px", md: "unset" },
                "&:hover": {
                  background: "#F57E59",
                },
              }}
            >
              Secure your spot
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              fontWeight: "600",
              color: "#0084FD",
              marginTop: { xs: "40px", md: "100px" },
              marginBottom: { md: "48px" },
            }}
          >
            Format
          </Typography>
          <Box
            sx={{
              marginTop: { xs: "32px", md: "48px" },
              display: "flex",
              flexDirection: {
                xs: "column",
                //   sm: "column",
                //   md: "column",
                lg: "row",
              },
              alignItems: "center",
              gap: { xs: "24px", md: "16px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "310px", md: "438px" },
                height: { xs: "391px", md: "482px" },
                border: "4px solid #0084FD",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {matches == true ? (
                <Image src={Message} alt="banner" />
              ) : (
                <Image src={messageMob} alt="banner" />
              )}
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: { xs: "400", md: "400" },
                  textAlign: "center",
                  lineHeight: { xs: "17px", md: "26px" },
                  width: { xs: "276px", md: "unset" },
                }}
              >
                Speakers will usually present sequentially followed by audience
                participation.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "310px", md: "438px" },
                height: { xs: "391px", md: "482px" },
                border: "4px solid #0084FD",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {matches == true ? (
                <Image src={Computer} alt="banner" />
              ) : (
                <Image src={computerMob} alt="banner" />
              )}
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: { xs: "400", md: "400" },
                  textAlign: "center",
                  lineHeight: { xs: "17px", md: "26px" },
                  width: { xs: "245px", md: "381px" },
                }}
              >
                The events will be held virtually and full joining details will
                be issued with your ticket.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "310px", md: "438px" },
                height: { xs: "391px", md: "482px" },
                border: "4px solid #0084FD",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {matches == true ? (
                <Image src={clockMob} alt="banner" />
              ) : (
                <Image src={Clock} alt="banner" />
              )}
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: { xs: "400", md: "400" },
                  textAlign: "center",
                  lineHeight: { xs: "17px", md: "26px" },
                  width: { xs: "190px", md: "257px" },
                }}
              >
                Agenda and timings will be confirmed in advance of each
                conference.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                marginTop: { xs: "40px", md: "98px" },
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "400",
                width: { xs: "326px", md: "798px" },
                lineHeight: { xs: "26px", md: "35px" },
              }}
            >
              Attend these expert-led discussions to learn all about the
              progress to date and the possibilities for tomorrow
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#fff",
              backgroundColor: "#F57E59",
              marginLeft: "7px",
              borderRadius: "53px",
              paddingInline: "20px",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid white",
              marginTop: "30px",
              marginBottom: "98px",
              "&:hover": {
                background: "#F57E59",
              },
            }}
          >
            Join the waiting list
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dialog
          open={Boolean(anchorLog)}
          onClose={handleCloseLog}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "343px", md: "558px" },
                height: { xs: "560px", md: "670px" },
                alignItems: "center",
              }}
            >
              <Image
                src={modalLogo}
                width={200}
                height={20}
                alt="Picture of the author"
                style={{ marginTop: "55px" }}
              />
              <Typography
                sx={{
                  marginTop: "33px",
                  marginBottom: "56px",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                Join the waiting list
              </Typography>
              <TextField
                value={values.firstname}
                onChange={handleChange}
                id="firstname"
                label="First name"
                name="firstname"
                // onBlur={handleBlur}
                sx={{
                  marginBottom: "15px",
                  width: { xs: "311px", md: "400px" },
                }}
              />
              {errors.firstname && touched.firstname ? (
                <Typography sx={{ color: "red" }}>
                  {errors.firstname}
                </Typography>
              ) : null}
              <TextField
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                id="lastname"
                label="Last name"
                name="lastname"
                sx={{
                  marginBottom: "15px",
                  // marginTop: "15px",
                  width: { xs: "311px", md: "400px" },
                }}
              />
              {errors.lastname && touched.lastname ? (
                <Typography sx={{ color: "red" }}>{errors.lastname}</Typography>
              ) : null}
              <TextField
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                label="E-mail"
                name="email"
                sx={{
                  marginBottom: "15px",
                  // marginTop: "15px",
                  width: { xs: "311px", md: "400px" },
                }}
              />
              {errors.email && touched.email ? (
                <Typography sx={{ color: "red" }}>{errors.email}</Typography>
              ) : null}
              <TextField
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                label="Country of residence"
                name="country"
                sx={{
                  marginBottom: "15px",
                  // marginTop: "15px",
                  width: { xs: "311px", md: "400px" },
                }}
              />
              {errors.country && touched.country ? (
                <Typography sx={{ color: "red" }}>{errors.country}</Typography>
              ) : null}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  marginBottom: { xs: "5px", md: "unset" },
                }}
              >
                <Checkbox
                  name="checkbox"
                  // value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Typography
                  sx={{
                    marginRight: { xs: "20px", md: "unset" },
                    fontSize: "16px",
                    fontWeight: "400",
                    width: "280px",
                  }}
                >
                  By signing up, you agree to VEIOVIA Terms and Conditions &
                  Privacy Policy
                </Typography>
              </Box>
              <Button
                size="small"
                sx={{
                  color: "#fff",
                  backgroundColor: "#F57E59",
                  "&:hover": {
                    background: "#F57E59",
                  },
                  marginLeft: "7px",
                  borderRadius: "53px",
                  paddingInline: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "1px solid white",
                  width: { xs: "311px", md: "416px" },
                  marginTop: "20px",
                  marginBottom: "55px",
                }}
                type="submit"
              >
                Secure your spot
              </Button>
            </Box>
          </form>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Home;
