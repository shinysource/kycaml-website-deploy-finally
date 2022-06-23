import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import ScrollButton from "../../components/Button/ScrollButton";

export function ArrowAnim() {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        component={motion.button}
        animate={{
          y: [0, 15, 0],
          transition: { duration: 3, ease: "easeOut", repeat: Infinity },
        }}
      >
        <ScrollButton />
      </Grid>
    </Grid>
  );
}
