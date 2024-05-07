import { Card, Container, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} padding={2}>
            <Card raised sx={{ height: 100, padding: 12 }}>
              <EmailTwoToneIcon></EmailTwoToneIcon>
              {/* <Typography> */}
               {" "} Email:{" "}
                <Link to={"mailto://gagan.chatu@gmail.com"} target="_blank">
                  gagan.chatu@gmail.com
                </Link>
              {/* </Typography> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} padding={2}>
            <Card raised sx={{ height: 100, padding: 12 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <LinkedInIcon/>
                </Grid>
                <Grid item>
                    LinkedIn:{" "}
                    <a 
                      href="https://www.linkedin.com/in/gaganchowdarychatu/"
                      target="_blank"
                    >
                      Gagan Chatu
                    </a>
              </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
