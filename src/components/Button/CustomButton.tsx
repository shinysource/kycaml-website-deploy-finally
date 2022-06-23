import Button, { ButtonProps } from "@mui/material/Button";
import { FormGroup } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useButtonStyles = (fontColor: string, size: string) =>
  makeStyles({
    primary: {
      "&": {
        backgroundColor: "rgb(88, 192, 208) !important",
        borderRadius: "2px",
        color: "#fff !important",
        fontFamily: "PODIUMSharp-49 !important",
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "0.1em !important",
      },
      "&:hover": {
        boxShadow: "0px 5px 15px rgba(88, 114, 232, 0.4)",
      },
      "&:active": {
        background: "rgb(88, 192, 208)",
      },
    },
    secondary: {
      "&": {
        backgroundImage:
          "linear-gradient(85deg, #B996ED 0%, #B9C8FB 33%, #F7E9DA 67%, #C9B1E4 100%)",
        borderColor: "#fff",
        borderRadius: "2px",
        color: "#000000 !important",
        fontFamily: "PODIUMSharp-49",
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "0.1em",
      },
      "&:hover": {
        boxShadow: "0px 5px 15px rgba(166, 95, 247, 0.4)",
      },
    },
    disabled: {
      "&": {
        backgroundImage: "linear-gradient(85deg, #d3d3d3 100%, #d3d3d3 100%)",
        borderColor: "#d3d3d3",
        borderRadius: "2px",
        color: "#000000",
        fontFamily: "PODIUMSharp-49 !important",
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "0.1em",
      },
      "&:hover": {
        boxShadow: "0px 5px 15px rgba(166, 95, 247, 0.4)",
      },
    },
    text: {
      "&": {
        color: fontColor,
        fontFamily: "PODIUMSharp-49 !important",
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "0.1em",
      },
      "&:hover": {},
    },
    small: {
      "&": {
        padding: "7px",
      },
    },
    medium: {
      "&": {
        padding: "7px",
      },
    },
    large: {
      "&": {
        padding: "10px !important",
      },
    },
  });

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export type CustomButtonProps = ButtonProps<
  "button",
  {
    model: "primary" | "secondary" | "text" | "disabled";
    label: string;
    className?: string;
    fontColor?: string;
    size?: string;
  }
>;

const CustomButton = ({
  model,
  label,
  className,
  fontColor,
  onClick,
  size,
  ...rest
}: CustomButtonProps) => {
  const classes = useButtonStyles(fontColor || "", size || "")();

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <Button
          className={`${classes[model]} ${
            classes[size || "large"]
          } ${className}`}
          onClick={onClick}
          {...rest}
        >
          {label}
        </Button>
      </FormGroup>
    </ThemeProvider>
  );
};

export default CustomButton;
