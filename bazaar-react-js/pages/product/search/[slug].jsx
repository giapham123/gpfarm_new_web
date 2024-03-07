import { useEffect, useCallback, useState } from "react";
import { Apps, FilterList, ViewList } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidenav from "components/Sidenav";
import { FlexBox } from "components/flex-box";
import { H5, Paragraph } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductList1 from "components/products/ProductList1";
import ProductList2 from "components/products/ProductList2";
import ProductFilterCard from "pages-sections/product-details/ProductFilterCard";
import productDatabase from "data/product-database";
import api from "utils/__api__/products";
import apiGrocery from "utils/__api__/grocery1-shop";
import { useRouter } from "next/router";
const ProductSearchResult = (props) => {
  const {  product, title } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <ShopLayout1>
      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}
        >
          <Box>
            <H5>Searching for “ {title} ”</H5>
            <Paragraph color="grey.600">{product.length} results found</Paragraph>
          </Box>
        </Card>
        <Grid container spacing={3}>
          {/* PRODUCT FILTER SIDEBAR AREA */}
          {/* <Grid
            item
            md={3}
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <ProductFilterCard />
          </Grid> */}

          {/* PRODUCT VIEW AREA */}
          <Grid item md={12} xs={12}>
          <ProductList1 products={product}/>
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};
// export const getStaticPaths = async () => {
//   const paths = await api.getSlugs();
//   return {
//     paths: paths,
//     //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };
export const getStaticProps = async ({ params }) => {
  const product = await apiGrocery.getProductsGrocery("hat-ngu-coc");
  var titleName = "";
  if(params.slug == "hat-ngu-coc"){
    titleName= "Hạt Ngũ Cốc"
  }else if(params.slug == "trai-cay-say"){
    titleName= "Trái Cây Sấy"
  }else if(params.slug == "nong-san-theo-mua"){
    titleName= "Nông Sản Theo Mùa"
  }else if(params.slug == "banh-dinh-duong"){
    titleName= "Bánh Dinh Dưỡng"
  }else if(params.slug == "granola"){
    titleName= "Granola"
  }
  return {
    props: {
      product,
      title: titleName
    },
  };
};
export default ProductSearchResult;
