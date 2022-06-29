import { useState, useEffect, FormEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import api from "../../service/api";
import SumsubWebSdk from "@sumsub/websdk-react";

import FormInput from "../../components/Fields/FormInput";
import FormCheck from "../../components/Fields/FormCheck";
import CustomButton from "../../components/Button/CustomButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Enter your Email").email("Enter a valid Email"),
  acceptTerms: Yup.bool().oneOf([true], "Accept the privacy terms to continue"),
});

interface RegisterForm {
  email: string;
  acceptTerms: boolean;
}

const initialValues: RegisterForm = {
  email: "",
  acceptTerms: false,
};

const Signup = () => {
  const [accessSDKToken, setAccessSDKToken] = useState<string>("");
  const [applicantEmail, setApplicantEmail] = useState<string>("");

  const config = useMemo(
    () => ({
      lang: "en",
      email: applicantEmail,
      i18n: {
        document: {
          subTitles: {
            IDENTITY: "Upload a document that proves your identity",
          },
        },
        status: {
          pendingTitle:
            "Thank you. \n\n You have completed the identity verification process.",
          pendingText:
            " The verification status will update below automatically. You can now close this page. We will follow-up with you if we need anything else or have any questions.",
        },
      },
      onMessage: (type: String, payload: any) => {
        console.log("WebSDK onMessage", type, payload);
      },
      uiConf: {
        // customCssStr:
        //   ":root {\n  --black: #000000;\n   --white: #FFFFFF;\n  --grey-darker: #B2B2B2;\n  --border-color: #DBDBDB;\n}\n\np {\n  color: var(--black);\n  font-size: 16px;\n  line-height: 24px;\n font-family: Arial;\n}\n\nsection {\n  margin: 40px auto;\n}\n\ninput {\n  color: var(--black);\n  font-weight: 600;\n  outline: none;\n}\n\nsection.content {\n  background-color: var(--white);\n  color: var(--black);\n  padding: 40px 40px 16px;\n  box-shadow: none;\n  border-radius: 6px;\n}\n\nbutton.submit,\nbutton.back {\n  text-transform: capitalize;\n  border-radius: 6px;\n  height: 48px;\n  padding: 0 30px;\n  font-size: 16px;\n  background-image: none !important;\n  transform: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s linear;\n}\n\nbutton.submit {\n  min-width: 132px;\n  background: none;\n  background-color: var(--black);\n}\n\n.round-icon {\n  background-color: var(--black) !important;\n  background-image: none !important;\n}",
        customCss: "http://localhost:5000/sumsubWebsdk.css",
      },
      onError: (error: String) => {
        console.error("WebSDK onError", error);
      },
    }),
    [applicantEmail]
  );

  useEffect(() => {
    config.email = applicantEmail;
  }, [applicantEmail, config]);

  const handler = () => Promise.resolve<string>("");

  const options = { addViewportTag: false, adaptIframeHeight: true };
  const messageHandler = (type: String, payload: any) => {
    console.log("onMessage: ", type, payload);
  };

  const errorHandler = (data: any) => console.log("onError: ", data);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      const accessToken = async () => {
        const token = await api.createToken({
          externalUserId: values.email,
        });
        setAccessSDKToken(token.data.token);
      };
      accessToken();
      setApplicantEmail(values.email);
      const applicantId = async () => {
        const status = await api.getApplicantId({
          externalUserId: values.email,
        });
        console.log(status);
      };
      applicantId();
      const applicantStatus = async () => {
        const status = await api.getStatus({
          externalUserId: values.email,
        });
        console.log(status);
      };
      applicantStatus();
    },
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="signup-back text-black">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="bg-yellow py-9"
      >
        <Grid item>
          <Link to="/">
            <img
              src="/assets/logo/logo-default.png"
              alt="Venture Logo"
              style={{ height: "200px" }}
            ></img>
          </Link>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" alignItems="center">
        {!accessSDKToken && (
          <form
            method="POST"
            onSubmit={onSubmit}
            className="flex justify-center mt-20"
          >
            <Grid
              item
              container
              justifyContent="center"
              spacing={2}
              xs={10}
              sm={8}
              md={6}
              lg={4}
            >
              <Grid item className="text-[32px] font-bold">
                <div className="font-podium49">Let's Get You Verified!</div>
              </Grid>
              <Grid item className="text-base font-normal text-center" xs={12}>
                <p className="mb-[8px]">
                  Know Your Customer/Anti Money Laundering check with SumSub
                </p>
                <p className="mb-[8px]">
                  Please confirm below that you agree to allow us to process
                  your personal data to do the KYC/AML check.
                </p>
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  formik={formik}
                  handleChange={formik.handleChange}
                  className="font-inter text-base font-normal"
                  label="Email"
                  placeholder="Email"
                  isHint={true}
                />
              </Grid>
              <Grid item xs={12}>
                <FormCheck
                  name="acceptTerms"
                  label={
                    <div className="text-sm text-grey">
                      <p>
                        Before you start the process, please make sure you have
                        these identity documents ready (
                        <span className="font-bold">
                          ID card, Passport, Residence permit, Driving license
                        </span>
                        ), and that they are not expired.
                      </p>
                    </div>
                  }
                  formik={formik}
                  handleChange={formik.handleChange}
                  isHint={true}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomButton
                  style={{ fontSize: "16px" }}
                  type="submit"
                  model="primary"
                  variant="contained"
                  label="verify your identity"
                />
              </Grid>
            </Grid>
          </form>
        )}
      </Grid>
      {accessSDKToken && (
        <SumsubWebSdk
          accessToken={accessSDKToken}
          expirationHandler={handler}
          config={config}
          options={options}
          onMessage={messageHandler}
          onError={errorHandler}
        />
      )}
    </div>
  );
};

export default Signup;
