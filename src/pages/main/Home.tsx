import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

import CustomButton from "../../components/Button/CustomButton";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <>
      <div className="text-white relative flex home-back">
        <Grid container alignItems="start" className="">
          <Grid item container justifyContent="center" className="px-5 py-10">
            <Grid item>
              <Link to="/">
                <img
                  src="/assets/logo/logo-default.png"
                  alt="Finally Fund Admin Logo"
                ></img>
              </Link>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="text-center pb-[40px] bg-yellow"
          >
            <div className="hero-text text-center pt-2 mx-2">
              Your Internal Ally For Fund Administration
            </div>
            <p className="summary-text text-center pt-2">
              Please click the button below to proceed through the brief KYC/AML
              process
            </p>
            <div className="py-2 pt-8 lg:pt-[40px]">
              <Link to="/verify">
                <CustomButton
                  style={{ width: "18rem", fontSize: "1.15rem" }}
                  type="button"
                  model="primary"
                  variant="contained"
                  label="Verify your identity"
                  className="w-36 uppercase"
                  endIcon={<ArrowForwardIosIcon sx={{ color: "#D3D3D3" }} />}
                />
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
