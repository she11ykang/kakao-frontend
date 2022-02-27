import { Container, Grid } from "@mui/material";

const Test = (): JSX.Element => {
  return (
    <Container sx={{ backgroundColor: "#022fff" }}>
      <Grid container style={{ backgroundColor: "#ff2fff" }}>
        <Grid item xs={12}>
          xs-12
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#ff9fff" }}>
        <Grid item xs={6} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6}>
          xs-6
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#ff9fff" }}>
        <Grid item xs style={{ backgroundColor: "#ffff2f" }}>
          xs-auto
        </Grid>
        <Grid item xs={4}>
          xs-4
        </Grid>
        <Grid item xs style={{ backgroundColor: "#ffff2f" }}>
          xs-auto
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
