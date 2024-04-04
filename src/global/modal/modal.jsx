import { useState } from "react";
import {
  CheckIcon,
  GoogleIcon,
  KeyIcon,
  MailIcon,
  eyeChecker,
} from "../../assets/modal/modalIcons";
import styles from "./modal.module.scss";

const Modal = ({ currentModal, setOpenModal }) => {
  const [forgetPasswordSteps, setForgetPasswordSteps] = useState("");
  const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false);

  console.log(
    currentModal,
    "currentModal",
    typeof currentModal,
    "and its type"
  );

  const checkModals = {
    login: {
      h1: "Login",
      buttonTitle: "Sign In",
    },
    signUp: {
      h1: "Create Account",
      buttonTitle: "Sign Up",
    },
  };

  const handleNextStep = (value) => {
    console.log(value, "checking the steps value");
    setForgetPasswordSteps(value);
    setForgetPasswordOpen(true);
  };

  return (
    <div className={`${styles.modalSignUpIn}`}>
      <div className={`${styles.itsWrapper}`}>
        {forgetPasswordOpen && forgetPasswordSteps !== "" ? (
          <ForgetPasswordEmailVerifyPasswordResetSuccess
            setOpenModal={setOpenModal}
            setForgetPasswordOpen={setForgetPasswordOpen}
            setForgetPasswordSteps={setForgetPasswordSteps}
            forgetPasswordSteps={forgetPasswordSteps}
          />
        ) : (
          <>
            <div
              className={`${styles.headingWithClose} d-flex justify-between align-items-center`}
            >
              <h1 className={`${styles.h1}`}>
                {currentModal === "signUp"
                  ? checkModals.signUp.h1
                  : checkModals.login.h1}
              </h1>
              <div
                onClick={() => setOpenModal(false)}
                className={`${styles.close}`}
              >
                &times;
              </div>
            </div>

            <div className={`${styles.form}`}>
              {currentModal === "signUp" && (
                <div className={`${styles.fields}`}>
                  <label htmlFor="text">Name and Surname</label>
                  <input type="text" required id="text" />
                </div>
              )}

              <div className={`${styles.fields}`}>
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" required id="emailAddresss" />
              </div>
              <div className={`${styles.fields} ${styles.eyeChecker}`}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                {eyeChecker}
              </div>
              {currentModal === "login" && (
                <div className={`${styles.forgetPassword}`}>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNextStep("giveEmail")}
                  >
                    Forget Password
                  </a>
                </div>
              )}

              {currentModal === "signUp" && (
                <div className={`${styles.termsandpolicy}`}>
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="value1"
                  />
                  <label htmlFor="checkbox1">
                    I agree with <span>Terms</span> and <span>Privacy</span>
                  </label>
                </div>
              )}

              <div className={`${styles.button}`}>
                <button>
                  {currentModal === "signUp"
                    ? checkModals.signUp.buttonTitle
                    : checkModals.login.buttonTitle}
                </button>
                or
                <button
                  className={`${styles.googleSvg} d-flex justify-between aligns-items-center`}
                >
                  {GoogleIcon}
                  <span>
                    {`${
                      currentModal === "signUp"
                        ? checkModals.signUp.h1
                        : checkModals.login.h1
                    }
              Google`}
                  </span>
                </button>
              </div>
              <div className={`${styles.alreadyAccount}`}>
                Already have an account? <span>Log In</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

export const ForgetPasswordEmailVerifyPasswordResetSuccess = ({
  setOpenModal,
  setForgetPasswordOpen,
  setForgetPasswordSteps,
  forgetPasswordSteps,
}) => {
  const whichStep = {
    giveEmail: {
      icon: KeyIcon,
      h1: "Forgot Password",
      message: "No worries, we'll send you reset instructions.",
      buttonTitle: "Reset Password",
    },
    checkEmail: {
      icon: MailIcon,
      h1: "Check your email",
      message: "We sent a password reset link to loremipsum@gmail.com",
      buttonTitle: "Open Email App",
      // action:""
    },
    setNewPasswordModal: {
      icon: KeyIcon,
      h1: "Set New Password",
      message:
        "Your new password must be different from previously used passwords.",
      buttonTitle: "Reset Password",
    },
    passwordResetSuccess: {
      icon: CheckIcon,
      h1: "Password Reset",
      message:
        "Your password has been successfully reset. Click below to login in magically",
      buttonTitle: "Continue",
    },
  };

  const handleGototheNextStep = () => {
    const keys = Object.keys(whichStep);
    console.log(keys, "kindly check keys");
    const currentIndexInKeys = keys.findIndex(
      (key) => key === forgetPasswordSteps
    );
    console.log(currentIndexInKeys, "kindly check currentIndexInKeys");
    if (!(keys[currentIndexInKeys] === "passwordResetSuccess")) {
      setForgetPasswordSteps(keys[currentIndexInKeys + 1]);
    }
  };

  return (
    <div className={`${styles.forgetPasswordModal}`}>
      <div className={`${styles.icon}`}>
        {forgetPasswordSteps === "giveEmail"
          ? whichStep.giveEmail.icon
          : forgetPasswordSteps === "checkEmail"
          ? whichStep.checkEmail.icon
          : forgetPasswordSteps === "setNewPasswordModal"
          ? whichStep.setNewPasswordModal.icon
          : forgetPasswordSteps === "passwordResetSuccess"
          ? whichStep.passwordResetSuccess.icon
          : ""}
      </div>
      <div
        className={`${styles.headingWithClose} d-flex justify-between align-items-center`}
      >
        <h1 className={`${styles.h1}`}>
          {forgetPasswordSteps === "giveEmail"
            ? whichStep.giveEmail.h1
            : forgetPasswordSteps === "checkEmail"
            ? whichStep.checkEmail.h1
            : forgetPasswordSteps === "setNewPasswordModal"
            ? whichStep.setNewPasswordModal.h1
            : forgetPasswordSteps === "passwordResetSuccess"
            ? whichStep.passwordResetSuccess.h1
            : ""}
        </h1>
        <div onClick={() => setOpenModal(false)} className={`${styles.close}`}>
          &times;
        </div>
      </div>
      <div className={`${styles.message}`}>
        {forgetPasswordSteps === "giveEmail"
          ? whichStep.giveEmail.message
          : forgetPasswordSteps === "checkEmail"
          ? whichStep.checkEmail.message
          : forgetPasswordSteps === "setNewPasswordModal"
          ? whichStep.setNewPasswordModal.message
          : forgetPasswordSteps === "passwordResetSuccess"
          ? whichStep.passwordResetSuccess.message
          : ""}
      </div>
      <div className={`${styles.form}`}>
        {forgetPasswordSteps === "giveEmail" && (
          <div className={`${styles.fields}`}>
            <label htmlFor="emailAddress">Email Address</label>
            <input type="email" required id="emailAddresss" />
          </div>
        )}

        {forgetPasswordSteps === "setNewPasswordModal" && (
          <>
            <div className={`${styles.fields} ${styles.eyeChecker}`}>
              <label htmlFor="newpassword">New Password</label>
              <input type="password" id="newpassword" required />
              {eyeChecker}
            </div>
            <div className={`${styles.fields} ${styles.eyeChecker}`}>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="password" id="confirmpassword" required />
              {eyeChecker}
            </div>
          </>
        )}

        <div className={`${styles.button}`}>
          <button
            onClick={() => {
              handleGototheNextStep();
            }}
          >
            {forgetPasswordSteps === "giveEmail"
              ? whichStep.giveEmail.buttonTitle
              : forgetPasswordSteps === "checkEmail"
              ? whichStep.checkEmail.buttonTitle
              : forgetPasswordSteps === "setNewPasswordModal"
              ? whichStep.setNewPasswordModal.buttonTitle
              : forgetPasswordSteps === "passwordResetSuccess"
              ? whichStep.passwordResetSuccess.buttonTitle
              : ""}
          </button>
        </div>
        {forgetPasswordSteps === "checkEmail" && (
          <div className={`${styles.resendLink}`}>
            Didn't receive he email? <span>Click to resend</span>
          </div>
        )}

        <div
          className={`${styles.alreadyAccount}`}
          onClick={() => setForgetPasswordOpen(false)}
        >
          <a>Back to Login</a>
        </div>
      </div>
    </div>
  );
};

// export const SetNewPassword = ({ setOpenModal }) => {
//   return (
//     <div className={`${styles.SetNewPassword}`}>
//       <div className={`${styles.icon}`}></div>
//       <div
//         className={`${styles.headingWithClose} d-flex justify-between align-items-center`}
//       >
//         <h1 className={`${styles.h1}`}>Set New Password</h1>
//         <div onClick={() => setOpenModal(false)} className={`${styles.close}`}>
//           &times;
//         </div>
//       </div>
//       <div className={`${styles.message}`}>
//         Your new password must be different from previously used passwords.
//       </div>
//       <div className={`${styles.form}`}>
//         <div className={`${styles.fields}`}>
//           <label htmlFor="passwordnew">New Password</label>
//           <input type="password" required id="passwordnew" />
//         </div>

//         <div className={`${styles.fields}`}>
//           <label htmlFor="passwordconfirm">Confirm Password</label>
//           <input type="password" required id="passwordconfirm" />
//         </div>

//         <div className={`${styles.button}`}>
//           <button>Reset Password</button>
//         </div>
//         <div className={`${styles.resendLink}`}>
//           Didn't receive he email? <span>Click to resend</span>
//         </div>
//         <div className={`${styles.alreadyAccount}`}>Back to Login</div>
//       </div>
//     </div>
//   );
// };
