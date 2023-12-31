import Head from "next/head";
import { Inter } from "next/font/google";
import { useIntl } from "react-intl";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "header.home.title" })}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Grid container justifyContent="center" mt={10} p={4}>
          <Typography fontSize={26} textAlign="center">
            {intl.formatMessage({ id: "home.content" })}
          </Typography>
        </Grid>
      </main>
    </>
  );
}
