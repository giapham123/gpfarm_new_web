import Link from "next/link";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";
import Tiktok from "../icons/Tiktok";
import Zalo from "../icons/Zalo";
import Messager from "../icons/Messager";

// styled component
const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));
const Footer1 = () => {
  return (
    <footer>
      <Box bgcolor="#222935">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <Image height={44} mb={2.5} src="/assets/images/gpfarm/logo.jpg" alt="logo" />
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                Chi Nhánh 1: Buôn Trấp, Krông Ana, Daklak<br />
                  Chi Nhánh 2: 161 Đường số 4, Phường 16, Quận Gò Vấp<br />
                  {/* Phone & Zalo: 0949.246.147<br /> */}
                  Tiktok: @gpfarm47<br />
                  Facebook: https://www.facebook.com/gp.farm47
                </Paragraph>

                {/* <AppStore /> */}
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  About Us
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Customer Care
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Contact Us
                </Box>

                <Box py={0.6} color="grey.500">
                  Buôn Trấp, Krông Ana, Daklak
                </Box>

                {/* <Box py={0.6} color="grey.500">
                  Email: uilib.help@gmail.com
                </Box> */}

                <Box py={0.6} mb={2} color="grey.500">
                  Phone: 0949.246.147
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon
                          fontSize="inherit"
                          sx={{
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];
const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/gp.farm47",
  },
  {
    icon: Tiktok,
    url: 'https://www.tiktok.com/@gpfarm47',
  },
  {
    icon: Messager,
    url: "https://m.me/gp.farm47",
  },
  // {
  //   icon: Google,
  //   url: "https://www.google.com/search?q=ui-lib.com",
  // },
  // {
  //   icon: Instagram,
  //   url: "https://www.instagram.com/uilibofficial/",
  // },
];
export default Footer1;
