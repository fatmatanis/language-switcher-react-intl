import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";
import useIntl from "react-intl/src/components/useIntl";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { AppContext } from "@/context/AppContext";
import { AppActions } from "@/context/actions";
import {
  getLanguageFromLocalStorage,
  navigationLinks,
  setLanguageLocalStorage,
} from "@/utils/helpers";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const Header = () => {
  const { dispatch } = useContext(AppContext);
  const intl = useIntl();

  const handleChangeLanguage = (selectedLanguage: string) => {
    dispatch({
      type: AppActions.ACTION_SET_LANGUAGE,
      data: { language: selectedLanguage },
    });
    setLanguageLocalStorage(selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = getLanguageFromLocalStorage();
    if (savedLanguage) {
      dispatch({
        type: AppActions.ACTION_INITIALIZE_LANGUAGE,
        data: { language: savedLanguage },
      });
    }
  }, [dispatch]);

  return (
    <header className={lora.className}>
      <Grid container justifyContent="space-between" alignItems="center" p={2}>
        {navigationLinks.map(({ href, id }) => (
          <Link href={href} key={href}>
            <h2>{intl.formatMessage({ id })}</h2>
          </Link>
        ))}
        <Grid item display="flex" gap={2}>
          <IconButton
            color="inherit"
            onClick={() => handleChangeLanguage("tr")}
          >
            <Image
              width={36}
              height={36}
              src="/images/turkish.png"
              alt="Türkçe"
            />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleChangeLanguage("en")}
          >
            <Image
              width={36}
              height={36}
              src="/images/english.png"
              alt="English"
            />
          </IconButton>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
