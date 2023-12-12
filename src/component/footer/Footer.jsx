export function Footer() {
  const styleFooter = {
    display: "flex",
    fontSize: ".8rem",
    justifyContent: "center",
    position: "fixed",
    bottom: "0%",
    transform: "translateX(-50%)",
    left: "50%",
    zIndex: "50",
  };
  return (
    <>
      <footer style={styleFooter}>
        <p>Image: ayman-yusuf-Librairie du site : Unsplash</p>
      </footer>
    </>
  );
}
