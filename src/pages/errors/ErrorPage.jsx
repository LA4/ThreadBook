import bg from "./../../../public/images/ayman-yusuf-Librairie.jpg";
export function ErrorPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          fontSize: "3rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <h1>404</h1>
        Page not found
        <span
          style={{
            fontSize: "1.5rem",
          }}>
          {" "}
          Nous ne trouvons pas cette page
        </span>
      </div>
    </>
  );
}
