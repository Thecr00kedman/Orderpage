import React from "react";
import { About, Services, usefulLinks, GetInTouch } from "../../assets/Data";
import { Grid, Button, TextField } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
  import {FooterContainer,
  FooterHeading,
  Content,
  FooterContent,
  Section,SubFooter} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={2.4} md={2.4} sm={12}>
          <Section>
            <FooterHeading>SUBSCRIBE TO OUR NEWSLETTER</FooterHeading>
            <FooterContent>
              <Content>
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necessbus enim
              </Content>
              <Content>
                <TextField type="text" name="search" />
              </Content>
              <Button variant="contained">Subscribe</Button>
            </FooterContent>
          </Section>
        </Grid>

        <Grid item xs={12} lg={2.4} md={2.4} sm={12}>
          <Section>
            <FooterHeading>About Us</FooterHeading>
            {About.map((item) => (
              <FooterContent key={item.id}>
                <Content>{item.Name}</Content>
              </FooterContent>
            ))}
          </Section>
        </Grid>

        <Grid item xs={12} lg={2.4} md={2.4} sm={12}>
          <Section>
            <FooterHeading>Our Services</FooterHeading>
            {Services.map((item) => (
              <FooterContent key={item.id}>
                <Content>{item.Name}</Content>
              </FooterContent>
            ))}
          </Section>
        </Grid>

        <Grid item xs={12} lg={2.4} md={2.4} sm={12}>
          <Section>
            <FooterHeading>Useful Links</FooterHeading>
            {usefulLinks.map((item) => (
              <FooterContent key={item.id}>
                <Content>{item.Name}</Content>
              </FooterContent>
            ))}
          </Section>
        </Grid>
        <Grid item xs={12} lg={2.4} md={2.4} sm={12}>
          <Section>
            <FooterHeading>GET IN TOUCH</FooterHeading>
            {GetInTouch.map((item) => (
              <FooterContent key={item.id}>
                <Content>{item.Name}</Content>
              </FooterContent>
            ))}
          </Section>
        </Grid>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <Section>
            <FooterHeading>CHAPERONE</FooterHeading>
            <FooterContent>
              <Content>
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necessitatibus enim ut internos accusantium a numquam autem
                ab rerum omnis. Non molestiae ratione et laborum doloribus aut
                molestiae voluptates ut porro excepturi sit molestiae obcaecati
                qui quis beatae est voluptatem eius. Et architecto nihil id
                labore omnis hic iste deleniti et porro aspernatur.
              </Content>
            </FooterContent>
          </Section>
        </Grid>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <Section>
            <FooterHeading>Follow-us</FooterHeading>
            <SubFooter>
              <Content><InstagramIcon/></Content>
              <Content><LinkedInIcon/></Content>
              <Content><GitHubIcon/></Content>
              <Content><YouTubeIcon/></Content>
            </SubFooter>
          </Section>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
