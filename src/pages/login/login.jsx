import { useEffect, useState } from "react";
import bg from "./../../../public/images/ayman-yusuf-Librairie.jpg";
import { LoginForm } from "./LoginForm";
import { TypeWriter } from "../../component/TypeWriter/TypeWriter";
export function Login() {
  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            display: "flex",
            width: "60%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <LoginForm></LoginForm>
        </div>
        <div style={heroStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}>
            <h1>Thread BOok</h1>
            <TypeWriter text="Suivez l'avancement de vos lectures" delay={80} />
            {/* <h4>Suivez l'avancement de vos lectures</h4> */}
          </div>
        </div>
      </div>
    </>
  );
}
