import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

const Example = () => {
  const intl = useIntl();
  return (
    <Grid container>
      <Grid
        container
        m={4}
        gap={2}
        justifyContent="center"
        p={4}
        maxWidth={1200}
      >
        <Grid item xs={12}>
          <Typography fontSize={32} textAlign="center" fontWeight="bold">
            {intl.formatMessage({ id: "contact.title" })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={26} textAlign="center">
            {intl.formatMessage({ id: "contact.content" })}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Example;
