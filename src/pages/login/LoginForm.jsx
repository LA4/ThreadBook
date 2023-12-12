export function LoginForm() {
  const styleLoginForm = {
    display: "flex",
    flexDirection: "column",
    border: "2px solid rgba(255,255,255,.8)",
    padding: "1rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(255,255,255,.4)",
  };
  return (
    <>
      <h4>Connection</h4>
      <form style={styleLoginForm} action="">
        <label htmlFor="email">Email</label>
        <input
          style={{
            fontSize: ".8rem",
            padding: ".5rem",
            borderRadius: ".5rem",
            border: "transparent",
          }}
          type="email"
          name="email"
          id="email"
          placeholder="- exmple@email.com - "
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          style={{
            fontSize: ".8rem",
            padding: ".5rem",
            borderRadius: ".5rem",
            border: "transparent",
          }}
          type="password"
          minLength={"4"}
          name="password"
          id="password"
          placeholder="- votre mot de passe -"
        />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30px",
            border: "1px solid white",
            margin: ".5rem",
            color: "white",
          }}
          type="submit">
          se connecter
        </button>
      </form>
    </>
  );
}
