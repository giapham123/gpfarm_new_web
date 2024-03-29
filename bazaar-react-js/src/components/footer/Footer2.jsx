import Link from "next/link";
import { Box, Grid, IconButton, styled } from "@mui/material";
import AppStore from "components/AppStore";
import { FlexBox } from "components/flex-box";
import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";
import Tiktok from "../icons/Tiktok";
import Zalo from "../icons/Zalo";
import Messager from "../icons/Messager";

// styled components
const StyledFooter = styled("footer")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem",
  },
}));
const StyledLink = styled(Link)(({ theme }) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));
const Footer2 = () => {
  return (
    <StyledFooter>
      <Box
        sx={{
          p: "40px",
          bgcolor: "#141850",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <Link href="/">
          <BazaarImage height={44} mb={2.5} src="/assets/images/gpfarm/logo.jpg" alt="logo" />
        </Link>

        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb={2.5} color="grey.500" maxWidth="370px">
            Chi Nhánh 1: Buôn Trấp, Krông Ana, Daklak<br />
                  Chi Nhánh 2: 161 Đường số 4, Phường 16, Quận Gò Vấp<br />
                  Phone & Zalo: 0949.246.147<br />
                  Tiktok: @gpfarm47<br />
                  Facebook: https://www.facebook.com/gp.farm47
            </Paragraph>

            {/* <AppStore /> */}
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <Box mt={-0.6}>
              {customerCareLinks.map((item, ind) => (
                <StyledLink href="/" key={ind}>
                  {item}
                </StyledLink>
              ))}
            </Box>

            <FlexBox className="flex" mx={-0.625} mt={2}>
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
    </StyledFooter>
  );
};
const customerCareLinks = [
  "Help Center",
  "Track Your Order",
  // "Corporate & Bulk Purchasing",
  // "Returns & Refunds",
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/UILibOfficial",
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
  //   icon: Instagram,
  //   url: "https://www.instagram.com/uilibofficial/",
  // },
];
export default Footer2;
