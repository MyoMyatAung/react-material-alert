import { Alert, AlertTitle, Link } from "@mui/material";
import { useEffect } from "react";
import { action_remove_alert } from "../redux/actions/AlertAction";
import { AlertComponentContainer } from "../styles";
import { useAlertReducer } from "./AlertManager";

const AlertComponent = ({ alert }) => {
  const [alerts, dispatch] = useAlertReducer();

  useEffect(() => {
    let t1 = setTimeout(() => {
      dispatch(action_remove_alert(alert.id));
    }, parseInt(alert.timeLimit) * 1000);
    return () => {
      clearTimeout(t1);
    };
  }, []);

  return (
    <AlertComponentContainer>
      <Link href={alert.link} underline="none">
        <Alert variant="filled" severity={alert.alertType}>
          <AlertTitle>{alert.alertTitle}</AlertTitle>
          {alert.text}
        </Alert>
      </Link>
    </AlertComponentContainer>
  );
};

export default AlertComponent;
