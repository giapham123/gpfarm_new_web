// AboutUs.js

import React from 'react';
import { Container, Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';
import ShopLayout1 from "components/layouts/ShopLayout1";
const AboutUs = () => {
  return (
    <ShopLayout1>
    <Container maxWidth="md">
    <Wrapper>
      <Box mt={5} mb={2}>
        <Typography variant="h4" align="center" gutterBottom>GP Farm</Typography>
        <Typography variant="h5" align="center" gutterBottom>Nông Sản Sạch Tây Nguyên</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="body1">
          Tại nông trại của chúng tôi, chúng tôi tận dụng tinh hoa thiên nhiên của vùng đất Tây Nguyên để tạo ra những sản phẩm sạch, dinh dưỡng và đậm đà hương vị. Với tâm huyết và cam kết với sức khỏe cộng đồng, chúng tôi không chỉ cung cấp những loại thực phẩm an toàn, mà còn góp phần vào sự phát triển bền vững của nông nghiệp và nguồn lợi nguyên liệu tự nhiên.
          </Typography>
          <Box mt={2}>
          <Typography variant="body1">
          Nông trại của chúng tôi chuyên tập trung vào việc sản xuất hạt ngũ cốc chất lượng cao, từ quá trình chăm sóc đến thu hoạch và chế biến. Chúng tôi tự hào với việc sử dụng phương pháp trồng trọt hữu cơ và bền vững, không sử dụng hóa chất độc hại hay phân bón hóa học, để mang lại những sản phẩm an toàn và giàu dinh dưỡng nhất cho gia đình bạn.
          </Typography>
          </Box>
          <Box mt={2}>
          <Typography variant="body1">
          Ngoài việc sản xuất hạt ngũ cốc chất lượng, Nông trại Sản phẩm Sạch Tây Nguyên còn tự hào là nguồn cung cấp uy tín của cafe và cacao đặc biệt từ vùng đất đồi núi phong phú của Tây Nguyên. Chúng tôi đặc biệt chú trọng vào quy trình chăm sóc, thu hoạch và chế biến để tạo ra những sản phẩm cà phê và ca cao đẳng cấp, đậm đà hương vị và giàu dinh dưỡng.
          </Typography>
          </Box>
          <Box mt={2}>
          <Typography variant="body1">
          Ngoài ra, chúng tôi cũng tạo ra những sản phẩm ca cao chất lượng cao từ những hạt cacao tươi ngon nhất của Tây Nguyên. Với quy trình chế biến độc đáo và cẩn thận, chúng tôi giữ nguyên hương vị tự nhiên và giá trị dinh dưỡng của ca cao, mang lại cho bạn một trải nghiệm thưởng thức tuyệt vời và tinh thần sảng khoái.
          </Typography>
          </Box>
          <Box mt={2}>
          <Typography variant="body1">
          Chúng tôi cam kết duy trì tiêu chuẩn cao nhất về chất lượng và an toàn thực phẩm, để mỗi sản phẩm của chúng tôi không chỉ là một sự lựa chọn ngon miệng, mà còn là sự tin tưởng và an tâm của quý khách hàng. Hãy đồng hành cùng chúng tôi trên hành trình chăm sóc sức khỏe và sống khỏe mạnh mỗi ngày!
          </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">Chi Nhánh 1: Buôn Trấp, Krông Ana, Daklak</Typography>
            <Typography variant="body1">Chi Nhánh 2: 161 Đường Số 4, Phường 16, Quận Gò Vấp</Typography>
            <Typography variant="body1">Điện Thoại & Zalo: 0949.246.147</Typography>
            <Typography variant="body1">Facebook: https://www.facebook.com/gp.farm47</Typography>
          </Box>
        </Grid>
      </Grid>
      </Wrapper>
    </Container>
    </ShopLayout1>
  );
};

export default AboutUs;
