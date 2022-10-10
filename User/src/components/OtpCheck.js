import React from "react";
import { useParams } from "react-router-dom";

const OtpCheck = () => {
  const { mobilenumber } = useParams();
  return (
    <div>
      <h1>Otp Check {mobilenumber}</h1>
    </div>
  );
};

export default OtpCheck;
