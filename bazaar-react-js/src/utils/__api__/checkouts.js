import axios from "axios";

const botToken = '7029408777:AAF97Ei5KjmVL1Y_OTlymyJeYn6qihzOHyM';
// ID of the chat where you want to send the message
const chatId = '5853155594';
export const sendEmailFunc = async (param) => {
  // const response = await axios.post("/api/send-email", param);
  try {
    const mailOptions = 
     "Điện Thoại: " + param.phone + 
     "\n Tên Khách Hàng: " + param.customerName + 
     "\n Địa Chỉ: " + param.address + 
     "\n Note: " + param.note +
     "\n Sản Phẩm: " + param.productOrder
    ;
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: mailOptions
    });
    console.log('Message sent:', response);
  return response;
} catch (error) {
    console.error('Error sending message:', error.response.data);
    return null;
}
};
export default {
  sendEmailFunc
};
