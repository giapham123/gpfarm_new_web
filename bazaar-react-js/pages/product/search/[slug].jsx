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
  const {  product, title, weight } = props;
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
            <H5>Tìm kiếm “ {title} ”</H5>
            <Paragraph color="grey.600">{product.length} sản phẩm</Paragraph>
          </Box>
          <Box>
            <H5>Trọng Lượng “ {weight} ”</H5>
            {/* <Paragraph color="grey.600">{product.length} sản phẩm</Paragraph> */}
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
export const getStaticPaths = async () => {
  const paths = await api.getSlugs();
  return {
    paths: paths,
    //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export const getStaticProps = async ({ params }) => {
  const product = await api.getProductSearch(params.slug);
  var titleName = "";
  var weight = "";
  if(params.slug == "hat-ngu-coc"){
    titleName= "Hạt Ngũ Cốc"
    weight = "500gr"
  }else if(params.slug == "trai-cay-say"){
    titleName= "Trái Cây Sấy"
    weight = "500gr"
  }else if(params.slug == "nong-san-theo-mua"){
    titleName= "Nông Sản Theo Mùa"
    weight = "1Kg"
  }else if(params.slug == "banh-dinh-duong"){
    titleName= "Bánh Dinh Dưỡng"
    weight = "250gr"
  }else if(params.slug == "granola"){
    titleName= "Granola"
    weight = "500gr"
  }
  else if(params.slug == "mat-ong-nghe"){
    titleName= "Mật Ong Và Nghệ"
    weight = "1 Lít và 500gr"
  }
  return {
    props: {
      product,
      title: titleName,
      weight: weight
    },
  };
};
export default ProductSearchResult;
