import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Facebook from "./icons/Facebook";
import Tiktok from "./icons/Tiktok";
import Zalo from "./icons/Zalo";
import Messager from "./icons/Messager";

const actions = [
  { key: 1, icon: <PhoneInTalkOutlinedIcon />, name: '0949.246.147' },
  { key: 2, icon: <Facebook />, name: 'https://www.facebook.com/gp.farm47' },
  { key: 5, icon: <Messager />, name: 'https://m.me/gp.farm47' },
  { key: 3, icon: <Tiktok />, name: 'https://www.tiktok.com/@gpfarm47' },
  { key: 4, icon: <Zalo />, name: '0949.246.147' },
];
export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickOpen = (param) => () => {
    window.open(param, "_blank", "noreferrer");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.key}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClickOpen(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
