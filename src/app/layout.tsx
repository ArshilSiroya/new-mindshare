"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { baselightTheme } from "../../src/utils/theme/DefaultColors";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          {/* {load == true ? (
          <h1>Loading...</h1>
        ) : ( */}
          <>
            <Header />
            {children}
            <Footer />
            {/* <Footer /> */}
          </>
          {/* )} */}
        </ThemeProvider>
      </body>
    </html>
  );
}
