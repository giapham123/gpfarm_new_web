import { Box } from "@mui/material";
import { H3 } from "components/Typography";
import { useEffect } from "react";

// ======================================================

// ======================================================

const ProductDescription = ({ product }) => {
  const { id, price, title, desc, slug, thumbnail } = product;
  useEffect(() => {
  })
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: GPFarm Chuyên Nông Sản Sạch Tây Nguyen <br />
        Model: S450 <br />
        <div style={{ whiteSpace: 'pre-line', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          {desc}
        </div>
        Sản Xuất Bởi GPFarm Daklak <br />
      </Box>
    </Box>
  );
};
export default ProductDescription;
