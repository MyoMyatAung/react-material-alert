import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useState } from "react";
// import { useDispatch } from "react-redux";
import { action_add_alert } from "../redux/actions/AlertAction";
import { FieldContainer, FormContainer } from "../styles";
import { useAlertReducer } from "./AlertManager";

const AlertExample = () => {
  const [alert, setAlert] = useState({
    text: "",
    link: "",
    timeLimit: "",
    alertType: "success",
  });

  const [alerts, dispatch] = useAlertReducer();

  const handleSubmitAlert = (e) => {
    e.preventDefault();
    dispatch(action_add_alert(alert.alertType, alert.text, alert.link, alert.timeLimit || 10, alert.alertType));
  };

  const handleOnChange = (e) => {
    setAlert((prev) => {
      return {...prev, [e.target.name]: e.target.value};
    })
  }

  return (
    <FormContainer onSubmit={handleSubmitAlert}>
      <FieldContainer>
        <TextField
          onChange={handleOnChange}
          value={alert?.text}
          label="Text"
          name="text"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
        />
      </FieldContainer>
      <FieldContainer>
        <TextField
          onChange={handleOnChange}
          value={alert?.link}
          label="Link"
          name="link"
          type="url"
          variant="outlined"
          fullWidth
          size="small"
        />
      </FieldContainer>
      <FieldContainer>
        <TextField
          onChange={handleOnChange}
          value={alert?.timeLimit}
          label="Time Limit"
          name="timeLimit"
          variant="outlined"
          fullWidth
          type="number"
          size="small"
        />
      </FieldContainer>
      <FieldContainer>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Alert Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleOnChange}
            value={alert?.alertType}
            label="Alert type"
            size="small"
            name="alertType"
          >
            {["success", "warning", "info", "error"].map((type, index) => {
              return (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </FieldContainer>
      <Button type="submit" onClick={handleSubmitAlert} variant="contained">
        Add Alert
      </Button>
    </FormContainer>
  );
};

export default AlertExample;
