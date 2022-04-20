import { styled } from "@mui/system";

export const FormContainer = styled("form")({
  maxWidth: "50%",
  border: "1px solid #ccc",
  borderRadius: 8,
  boxShadow: "1px 1px 8px #ccc",
  padding: "8px",
  margin: "auto",
});

export const FieldContainer = styled("div")({
  margin: "12px auto",
});

export const AlertManagerContainer = styled("div")({
  position: "fixed",
  top: 4,
  right: 4,
  width: "25%",
  zIndex: 1,
});

export const AlertComponentContainer = styled("div")({
  margin: "12px auto",
});
