import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts() {
  return (
    <Alert
      action={
        <IconButton aria-label="close" color="inherit" size="small">
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      sx={{ mb: 2 }}
    >
      Donation Has Been Submitted Successfully.
    </Alert>
  );
}
