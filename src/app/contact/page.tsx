"use client";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

import Twitter from ".././assets/twitter.png";
import Telegram from ".././assets/telegram.png";
import Mastdom from ".././assets/mastodom.png";
import Bluesky from ".././assets/bluesky.png";
import Discord from ".././assets/discord.png";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const initialValues = {
  firstname: "",
  lastname: "",
  description: "",
  email: "",
};

const validateSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your First name"),
  lastname: Yup.string().min(2).max(25).required("Please enter your Last name"),
  email: Yup.string().email().required("Please enter your email"),
  description: Yup.string()
    .min(25)
    .max(100)
    .required("Please enter your description"),
});

const Page = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validateSchema,

      onSubmit: (values, action) => {
        action.resetForm;
        console.log("values", values);
      },
    });
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: { xs: "48px", md: "56px" },
          marginTop: { xs: "107px", md: "110px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "24px", md: "48px" },
            fontWeight: { xs: "500", sm: "500", md: "400" },
            lineHeight: { xs: "30px", sm: "40px", md: "40px" },
            width: { xs: "311px", sm: "500px", md: "100%" },
            color: "#0084FD",
          }}
        >
          Have any questions about the Veiovia Series?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "32px" },
            fontWeight: { xs: "400", md: "400" },
            marginTop: { xs: "24px", md: "50px" },
          }}
        >
          We’ll be happy to help
        </Typography>

        <Box sx={{ marginTop: "56px" }}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: { xs: "311px", md: "400px" } }}
                />
                {errors.firstname && touched.firstname ? (
                  <Typography sx={{ color: "red" }}>
                    {errors.firstname}{" "}
                  </Typography>
                ) : null}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    marginLeft: { md: "24px" },
                    marginTop: { xs: "16px", sm: "16px", md: "0" },
                    width: { xs: "311px", md: "400px" },
                  }}
                />
                {errors.lastname && touched.lastname ? (
                  <Typography sx={{ color: "red" }}>
                    {errors.lastname}
                  </Typography>
                ) : null}
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "311px", md: "824px" },
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ width: { xs: "311px", md: "100%" } }}
              />
              {errors.email && touched.email ? (
                <Typography sx={{ color: "red" }}>{errors.email}</Typography>
              ) : null}
              <Box sx={{ width: "100%", height: "189px", paddingTop: "1px" }}>
                <TextareaAutosize
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minRows={3}
                  style={{ width: "100%", height: "100%" }}
                />
                {errors.description && touched.description ? (
                  <Typography sx={{ color: "red", marginInline: "5px" }}>
                    {errors.description}
                  </Typography>
                ) : null}
              </Box>
              <Button
                size="large"
                type="submit"
                sx={{
                  color: "#fff",
                  width: "100%",
                  backgroundColor: "#0084FD",
                  marginLeft: "7px",
                  borderRadius: "53px",
                  paddingBlock: "10px",
                  paddingInline: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "1px solid white",
                  marginBlock: "10px",
                }}
              >
                <Typography
                  sx={{
                    marginLeft: "15px",
                    fontSize: { md: "16px" },
                    fontWeight: "400",
                  }}
                >
                  Send message
                </Typography>
              </Button>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: { xs: "5px", md: "0px" },
                  }}
                >
                  <Checkbox
                    name="checkbox"
                    // value={values.confirmpassword}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                  <Typography
                    sx={{
                      marginRight: {
                        xs: "20px",
                        md: "unset",
                      },
                      fontSize: "16px",
                      fontWeight: "400",
                      width: { xs: "289px", md: "unset" },
                      textAlign: { xs: "start", md: "unset" },
                    }}
                  >
                    By signing up, you agree to VEIOVIA Terms and Conditions &
                    Privacy Policy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: { xs: "5px", md: "53px" },
                  }}
                >
                  <Checkbox
                    name="checkbox"
                    // value={values.confirmpassword}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                  <Typography
                    sx={{
                      marginRight: { xs: "20px", md: "unset" },
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Subscribe to Veiovia newsletter
                  </Typography>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
        <Box
          sx={{
            width: { xs: "305px", md: "560px" },
            // height: "108px",
            display: "flex",
            alignItems: "center",
            // marginTop: { xs: "60px", md: "100px" },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
              },
              fontWeight: { md: "400" },
              lineHeight: "26px",
              // width: "560px",
              marginTop: { xs: "58px", md: "unset" },
            }}
          >
            If you'd like to explore speaking at one of our conferences please
            contact us above.
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #5EB1FF",
            width: { xs: "311px", sm: "311px", md: "1229px", lg: "1229px" },
            marginTop: { xs: "40px", md: "56px" },
            // marginBottom: "48px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "column" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: { md: "814px" },
              marginTop: { xs: "40px" },
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Box>
              <Box
                sx={{
                  width: { xs: "311px", md: "400px" },
                  height: { xs: "222px", md: "222px" },
                  border: "1px solid #5EB1FF",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: { xs: "column", md: "column" },
                  paddingTop: "23px",
                  paddingLeft: "22px",
                }}
              >
                <Image src={Twitter} alt="" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "24px" },
                      fontWeight: "500",
                      color: "#0084FD",
                      marginTop: { xs: "29px", md: "48px" },
                    }}
                  >
                    <Link
                      href="https://twitter.com/veiovia"
                      target="_blank"
                      style={{ textDecoration: "unset", color: "#0084FD" }}
                    >
                      Follow Us
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "16px" },
                      fontWeight: { xs: "400", md: "400" },
                      marginBlock: "14px",
                    }}
                  >
                    contact us on Twitter
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "16px" },
                      fontWeight: { xs: "700", md: "700" },
                    }}
                  >
                    @veiovia
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: { xs: "311px", md: "400px" },
                  height: { xs: "222px", md: "222px" },
                  border: "1px solid #5EB1FF",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  paddingTop: "23px",
                  paddingLeft: "22px",
                  marginTop: "16px",
                }}
              >
                <Image src={Mastdom} alt="" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "24px" },
                      fontWeight: "500",
                      color: "#0084FD",
                      marginTop: { xs: "29px", md: "48px" },
                    }}
                  >
                    <Link
                      href="https://mastodon.social/@Veiovia"
                      target="_blank"
                      style={{ textDecoration: "unset", color: "#0084FD" }}
                    >
                      Follow Us
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "16px" },
                      fontWeight: { xs: "400", md: "400" },
                      marginBlock: "14px",
                    }}
                  >
                    contact us on Mastodom
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "16px" },
                      fontWeight: { xs: "700", md: "700" },
                    }}
                  >
                    @veiovia
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "311px", md: "400px" },
                  height: { xs: "222px", md: "222px" },
                  border: "1px solid #5EB1FF",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  paddingTop: "23px",
                  paddingLeft: "22px",
                }}
              >
                <Image src={Telegram} alt="" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "24px" },
                      fontWeight: "500",
                      color: "#0084FD",
                      marginTop: { xs: "29px", md: "48px" },
                    }}
                  >
                    <Link
                      href="https://t.me/VeioviaLimited"
                      target="_blank"
                      style={{ textDecoration: "unset", color: "#0084FD" }}
                    >
                      Follow Us
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "16px" },
                      fontWeight: { xs: "400", md: "400" },
                      marginBlock: "14px",
                    }}
                  >
                    contact us on Telegram
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "16px" },
                      fontWeight: { xs: "700", md: "700" },
                    }}
                  >
                    @veiovia
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "16px",
                  width: { xs: "311px", md: "400px" },
                  height: { xs: "222px", md: "222px" },
                  border: "1px solid #5EB1FF",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  paddingTop: "23px",
                  paddingLeft: "22px",
                }}
              >
                <Image src={Bluesky} alt="" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "24px" },
                      fontWeight: "500",
                      color: "#0084FD",
                      marginTop: { xs: "29px", md: "48px" },
                    }}
                  >
                    <Link
                      href="https://bsky.app/profile/veiovia.bsky.social"
                      target="_blank"
                      style={{ textDecoration: "unset", color: "#0084FD" }}
                    >
                      Follow Us
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "16px" },
                      fontWeight: { xs: "400", md: "400" },
                      marginBlock: "14px",
                    }}
                  >
                    contact us on Bluesky
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "16px" },
                      fontWeight: { xs: "700", md: "700" },
                    }}
                  >
                    @veiovia
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                },
                fontWeight: { md: "400" },
                lineHeight: "26px",
                width: { xs: "305px", md: "721px" },
                marginTop: "40px",
              }}
            >
              Join our Discord to continue the conversation and follow us to
              learn more about upcoming events
            </Typography>
            <Button
              size="small"
              sx={{
                color: "#fff",
                width: "332px",
                backgroundColor: "#0084FD",
                marginLeft: "7px",
                borderRadius: "53px",
                paddingInline: "20px",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "32px",
                border: "1px solid white",
              }}
            >
              <Image src={Discord} alt="" />
              <Typography
                sx={{
                  marginLeft: "15px",
                  fontSize: { md: "24px" },
                  fontWeight: "500",
                }}
              >
                Join our Discord
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
