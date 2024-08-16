import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));
const StyledDay = styled(PickersDay)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light,
}));

export default function CustomSlots() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Styled picker"
          slots={{
            openPickerButton: StyledButton,
            day: StyledDay,
          }}
          slotProps={{
            openPickerIcon: { fontSize: "large" },
            openPickerButton: { color: "secondary" },
            textField: {
              variant: "filled",
              focused: true,
              color: "secondary",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
