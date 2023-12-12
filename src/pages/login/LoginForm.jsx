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
        <input type="text" name="email" id="email" placeholder="Votre email" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" />
      </form>
    </>
  );
}
