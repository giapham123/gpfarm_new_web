import Link from "next/link";
import { useState } from "react";
import {
  Add,
  ExpandMore,
  Facebook,
  Instagram,
  Remove,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  IconButton,
  MenuItem,
  styled,
} from "@mui/material";
// import Facebook from "./icons/Facebook";
import Tiktok from "./icons/Tiktok";
import Zalo from "./icons/Zalo";
import Messager from "./icons/Messager";
import TouchRipple from "@mui/material/ButtonBase";
import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
import BazaarMenu from "components/BazaarMenu";
import { layoutConstant } from "utils/constants";
import { useRouter } from "next/router";

// styled component
const TopbarWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "bgColor",
})(({ theme, bgColor, expand }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  color: theme.palette.secondary.contrastText,
  background: bgColor || theme.palette.grey[900],
  transition: "height 300ms ease",
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .expand": {
    display: "none",
    padding: 0,
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
  [theme.breakpoints.down("sm")]: {
    height: expand ? 80 : layoutConstant.topbarHeight,
    "& .topbarRight": {
      display: expand ? "flex" : "none",
      paddingBottom: 5,
    },
    "& .expand": {
      display: "block",
      height: layoutConstant.topbarHeight,
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}));
const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    flexDirection: "column",
  },
}));

// ===========================================

// ===========================================

const Topbar = ({ bgColor }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [expand, setExpand] = useState(false);
  const [language, setLanguage] = useState(router.locale);
  const handleLanguageClick = (lang) => () => {
    setLanguage(lang);
    router.push(
      {
        pathname,
        query,
      },
      asPath,
      {
        locale: lang,
      }
    );
  };
  return (
    <TopbarWrapper bgColor={bgColor} expand={expand ? 1 : 0}>
      <StyledContainer>
        <FlexBetween width="100%">
          <FlexBox alignItems="center" gap={1}>
            <Chip
              label="HOT"
              size="small"
              sx={{
                color: "white",
                fontWeight: 700,
                backgroundColor: "primary.main",
                "& .MuiChip-label": {
                  pl: ".8rem",
                  pr: ".8rem",
                },
              }}
            />
            <Span className="title">0949.246.147 | Copyright by GPFarm</Span>
          </FlexBox>
          <IconButton
            disableRipple
            className="expand"
            onClick={() => setExpand((state) => !state)}
          >
            {expand ? <Remove /> : <Add />}
          </IconButton>
        </FlexBetween>
        <FlexBox className="topbarRight" alignItems="center">
          <FlexBox alignItems="center" gap={1.5}>
            {socialLinks.map(({ id, Icon, url }) => (
              <Link href={url} key={id}>
                <Icon
                  sx={{
                    fontSize: 16,
                  }}
                />
              </Link>
            ))}
          </FlexBox>
        </FlexBox>
      </StyledContainer>
    </TopbarWrapper>
  );
};
const socialLinks = [
  {
    id: 1,
    Icon: Tiktok,
    url: "https://www.tiktok.com/@gpfarm47",
  },
  {
    id: 2,
    Icon: Facebook,
    url: "https://www.facebook.com/gp.farm47",
  },
  {
    id: 3,
    Icon: Zalo,
    url: "#",
  },
  {
    id: 4,
    Icon: Messager,
    url: "https://m.me/gp.farm47",
  },
];
const languageList = [
  {
    title: "EN",
    value: "en",
  },
  {
    title: "DE",
    value: "de",
  },
];
export default Topbar;
