import { CustomAddIcon, CustomMinusIcon } from "@/assets/icons";
import { Box, IconButton } from "@mui/material";
import { Field } from "formik";
import { TextField } from "../design-system/TextField";

const IncrementButton = ({ onClick, children, disabled = false }) => {
  return (
    <IconButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#000000",
        "&:hover": {
          backgroundColor: "#000000",
        },
        "&:disabled": {
          backgroundColor: "#D4D7D9",
        },
      }}
    >
      {children}
    </IconButton>
  );
};

const NumberIncrementField = ({
  value,
  onChange,
  min = 0,
}: {
  value: number;
  onChange: (arg: number) => void;
  min?: number;
}) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <IncrementButton
        disabled={value < min + 1}
        onClick={() => onChange(value - 1)}
      >
        <CustomMinusIcon />
      </IncrementButton>
      <Field
        name="quantity"
        type="number"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onBlur={(e: any) => {
          if (e.target.value < min) {
            onChange(min);
          }
        }}
        component={TextField}
        sx={{
          width: "50px",
          textAlign: "center",
          height: "50px",
          borderRadius: "8px",
          borderWidth: "1px",
          margin: "0 8px",
          "& input, &&& fieldset": {
            textAlign: "center",
            borderRadius: "8px",
            borderWidth: "1px",
          },
        }}
      />
      <IncrementButton onClick={() => onChange(value + 1)}>
        <CustomAddIcon />
      </IncrementButton>
    </Box>
  );
};

export default NumberIncrementField;
