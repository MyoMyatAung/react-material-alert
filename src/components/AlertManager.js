import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AlertManagerContainer } from "../styles";
import AlertComponent from "./AlertComponent";

export const useAlertReducer = () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);
  useEffect(() => {
    setState(alerts);
  },[alerts]);
  return [state, dispatch];
}

const AlertManager = () => {
  const [alerts, dispatch] = useAlertReducer();
  return <AlertManagerContainer>
    {
      alerts.reverse().map((alert) => {
        return <AlertComponent alert={alert} key={alert.id} />
      })
    }
  </AlertManagerContainer>
}

export default AlertManager;