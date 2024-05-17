import useNotificationStore from "../../stores/notification/notification.store";
import { Snackbar, Alert } from "@mui/material";

export default function Notification() {
  const { isOpen, text, severity, setClose } = useNotificationStore();

  const handleClose = () => {
    setClose();
  };
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={1000}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}
