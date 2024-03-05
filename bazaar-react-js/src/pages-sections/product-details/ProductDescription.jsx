import { Box } from "@mui/material";
import { H3 } from "components/Typography";
import { useEffect } from "react";

// ======================================================

// ======================================================

const ProductDescription = ({ product }) => {
  const { id, price, title, desc, slug, thumbnail } = product;
  useEffect (()=>{
  })
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: GPFarm Chuyên Nông Sản Sạch Tây Nguyen <br />
        Model: S450 <br />
        Wireless Bluetooth Headset <br />
        FM Frequency Response: 87.5 – 108 MHz <br />
        Feature: FM Radio, Card Supported (Micro SD / TF) <br />
        Made in China <br />
      </Box>
    </Box>
  );
};
export default ProductDescription;
