import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import { Avatar } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CustomButton from "../../components/Button/CustomButton";

export type CustomCardProps = {
  avatar: string;
  title: string;
  content: string;
  actionLabel: string;
  disabled?: boolean;
  done: boolean;
  model: "text" | "disabled" | "primary" | "secondary";
  actionId?: string;
  onClick?: () => void;
  learnArticle: string;
};

const CustomCard = ({
  avatar,
  title,
  content,
  actionLabel,
  disabled,
  done,
  model,
  actionId,
  onClick,
  learnArticle,
}: CustomCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "#000", color: "#fff" }}>
            {avatar}
          </Avatar>
        }
        className="flex-col !pt-7 !pb-0"
      />
      <CardContent className="!pt-[20px] sm:h-[158px] md:h-[274px]">
        <p className="text-center card-title">{title}</p>
        <p className="text-center paragraph-text">{content}</p>
        <Link to={learnArticle}>
          <CustomButton
            type="button"
            variant="text"
            model="text"
            label="Learn more"
            fontColor="#096CE0"
            className="!text-lg"
            onClick={() => console.log("hi")}
            endIcon={
              <ArrowForwardIosIcon
                sx={{ color: "#096CE0", fontSize: "14px !important" }}
              />
            }
          />
        </Link>
      </CardContent>
      <CardActions className="justify-center !pb-6">
        <CustomButton
          id={actionId ?? ""}
          disabled={done || disabled}
          type="button"
          variant="contained"
          model={model}
          className="!py-[14px] !px-6 !text-lg !leading-5"
          label={done ? "DONE" : actionLabel}
          onClick={onClick}
          startIcon={done ? <CheckCircleIcon /> : ""}
        />
      </CardActions>
    </Card>
  );
};

export default CustomCard;
