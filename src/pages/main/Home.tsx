import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

import CustomButton from "../../components/Button/CustomButton";
import Footer from "../../layout/Footer";
import { ArrowAnim } from "../../components/Animations/Animations";

const Home = () => {
  return (
    <>
      <div className="text-white">
        <Grid container alignItems="center" className="py-10 home-back">
          <Grid item container justifyContent="center" className="px-5">
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
          >
            <div className="text-animate-content text-4xl font-normal text-center py-2 md:py-4 lg:py-4 w-full sm:w-full md:w-full lg:w-full">
              <div className="text-animate-content-container">
                <ul className="text-animate-content-container-list">
                  <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[180px] sm:w-[160px] lg:w-full">
                    As part of your investment process
                  </li>
                  <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                    Need to proceed with
                  </li>
                  <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                    KYC / AML check
                  </li>
                  <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                    Please click the button below
                  </li>
                  <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[350px] sm:w-[360px] lg:w-full">
                    Proceed through the brief KYC/AML process
                  </li>
                </ul>
              </div>
            </div>
            <div className="summary-text text-center pt-2 w-3/4">
              Finally Is Your Internal Ally For Fund Administration
            </div>
            <div className="py-2 md:py-4 lg:py-4">
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

          <Grid container alignItems="flex-end">
            <ArrowAnim />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          className="text-center bg-white text-black"
        >
          <Grid item xs={12} pt={4}>
            <p className="h2-text">Finally Fund Admin</p>
          </Grid>
          <Grid item xs={11} sm={8} lg={6} xl={4} pt={2}>
            <p className="paragraph-text">
              As part of your investment process, you will need to proceed with
              a Know Your Customer/Anti Money Laundering check. Please click the
              button below to proceed through the brief KYC/AML process
            </p>
          </Grid>
          <Grid item container justifyContent="center" xs={12} pt={2}>
            <Grid item className="pb-12">
              <Link to="/verify">
                <CustomButton
                  style={{ width: "20rem", fontSize: "1.15rem" }}
                  type="button"
                  model="primary"
                  variant="contained"
                  label="Verify your identity"
                  className="w-36 uppercase"
                  endIcon={<ArrowForwardIosIcon sx={{ color: "#D3D3D3" }} />}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className="bg-black1">
          <Grid item sx={{ width: "100%" }}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
