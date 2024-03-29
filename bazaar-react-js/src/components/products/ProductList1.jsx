import { Fragment, useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard1 from "components/product-cards/ProductCard1";
import { Span } from "components/Typography";
// ========================================================

const ProductList1 = ({ products }) => {
  // const [productData, setProductData] = useState([])
  // useEffect(() => { setProductData(products) }, [])
  // useEffect(() => { setProductData(products) }, [products])
  return (
    <Fragment>
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item lg={3} sm={4} xs={12} key={item.id}>
            <ProductCard1
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              rating={item.rating}
              imgUrl={item.thumbnail}
              discount={item.discount}
            />
          </Grid>
        ))}
      </Grid>

      {/* <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of {products.length} Products</Span>
        <Pagination count={countPage} variant="outlined" color="primary" page={page} onChange={handleChange}/>
      </FlexBetween> */}
    </Fragment>
  );
};
export default ProductList1;
