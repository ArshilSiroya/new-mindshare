"use client";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FooterLogo from ".././app/assets/FooterLogo.svg";
import discordIcon from ".././app/assets/discord.png";
import telegramIcon from ".././app/assets/telegramIcon.png";
import medium from ".././app/assets/threedot.png";
import twitter from ".././app/assets/twitterIcon.png";
import bluesky from ".././app/assets/blueskyIcon.png";
import mastodom from ".././app/assets/mastodomIcon.png";
import { styled } from "@mui/material/styles";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const WhiteBorderTextField = styled(TextField)`
    & label.Mui-focused {
      color: white;
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  `;
  return (
    <Box>
      <Box
        sx={{
          height: { md: "86px" },
          background: "#0084FD",
          display: "flex",
          paddingBottom: "11px",
          alignItems: { xs: "center", md: "end" },
          justifyContent: "space-between",
          paddingLeft: { md: "50px" },
          paddingRight: { md: "50px" },
          flexDirection: { xs: "column", md: "unset" },
        }}
      >
        <Box
          sx={{
            marginTop: { xs: "65px", md: "unset" },
            marginBottom: { xs: "40px", md: "unset" },
          }}
        >
          <Image
            src={FooterLogo}
            alt="banner"
            style={{ width: "200px", height: "20px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "unset" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "400",
              color: "#fff",
              marginTop: "10px",
              marginRight: "12px",
              marginBottom: { xs: "16px", md: "" },
            }}
          >
            Join our newsletter
          </Typography>
          <Button
            size="small"
            sx={{
              marginBottom: { xs: "16px", md: "" },
              color: "#fff",
              marginLeft: "7px",
              borderRadius: "53px",
              paddingInline: "20px",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid white",
              // marginTop: "30px",
              height: "38px",
              width: "309px",
              marginRight: "8px",
              // marginBottom: "98px",
            }}
          ></Button>

          <Button
            size="small"
            sx={{
              marginBottom: { xs: "48px", md: "unset" },
              color: "#fff",
              marginLeft: "7px",
              borderRadius: "53px",
              paddingInline: "20px",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid white",
              // marginTop: "30px",
              // marginBottom: "98px",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: { md: "space-between" },
          height: { sm: "120px", xs: "120px", md: "128px" },
          background: "#0084FD",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
          flexFlow: "column-reverse",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginBottom: { xs: "2.5rem", md: "0px" },
            marginTop: { xs: "25px", md: "" },
          }}
        >
          <Button
            sx={{
              color: "#fff",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "300",
              marginLeft: { xs: "", md: "48px" },
            }}
          >
            Veiovia © 2022
          </Button>
          <Link href="https://www.google.com" target="_blank">
            <Button
              sx={{
                color: "#fff",
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: "300",
                marginInline: "12px",
                cursor: "pointer",
              }}
            >
              | terms & Conditions
            </Button>
          </Link>
          <Link href="https://www.google.com" target="_blank">
            <Button
              sx={{
                color: "#fff",
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: "300",
              }}
            >
              | Privacy Statement
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            marginTop: { sm: "2px", md: "0" },
            marginRight: { md: "45px" },
          }}
        >
          <Link href="https://discord.gg/gCM8gYR4qb" target="_blank">
            <Image
              src={discordIcon}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://t.me/VeioviaLimited" target="_blank">
            <Image
              src={telegramIcon}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link
            href="https://bsky.app/profile/veiovia.bsky.social"
            target="_blank"
          >
            <Image
              src={bluesky}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://mastodon.social/@Veiovia" target="_blank">
            <Image
              src={mastodom}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://medium.com/veiovia" target="_blank">
            <Image
              src={medium}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
            />
          </Link>
          <Link href="https://t.me/VeioviaLimited" target="_blank">
            <Image
              src={twitter}
              alt="banner"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
