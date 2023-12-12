import { motion } from "framer-motion";

export function BookForm({ dataBooks }) {
  const styleForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    gap: ".5rem",
  };
  const styleInputTitle = {
    border: "2px solid rgba(255,255,255,.7)",
    backgroundColor: "rgba(0,0, 0,.8)",
    borderRadius: "4px",
    color: "white",
    carreColor: "white",
    height: "35px",
    padding: "1rem",
    fontSize: "1rem",
  };
  const styleInputSelect = {
    border: "2px solid rgba(255,255,255,.7)",
    backgroundColor: "rgba(0,0, 0,.8)",
    borderRadius: "4px",
    color: "white",
    carreColor: "white",
    height: "35px",
    fontSize: "1rem",
  };

  const styleInputNumber = {
    border: "2px solid rgba(255,255,255,.7)",
    backgroundColor: "rgba(0,0, 0,.8)",
    borderRadius: "4px",
    color: "white",
    carreColor: "white",
    height: "35px",
    padding: "1rem",
    fontSize: ".8rem",
    width: "100px",
  };
  const styleInputTextArea = {
    border: "2px solid rgba(255,255,255,.7)",
    backgroundColor: "rgba(0,0, 0,.8)",
    borderRadius: "4px",
    color: "white",
    carreColor: "white",
    height: "100%",
    padding: "1rem",
    fontSize: "1rem",
    width: "100%",
  };
  const handleForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    dataBooks({
      title: data.get("titleBook"),
      pages: data.get("nbPage"),
      resume: data.get("resume"),
      category: data.get("category"),
    });
    e.target.reset();
  };
  return (
    <>
      <form action="" onSubmit={handleForm} style={styleForm}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}>
          <input
            required
            style={styleInputTitle}
            placeholder="Titre du livre"
            type="text"
            name="titleBook"
          />
          <select style={styleInputSelect} name="category">
            <option style={{ color: "lightgrey" }} value="">
              -- Genre --
            </option>
            <option value="Romantique">Romantique</option>
            <option value="Science-fiction">Science-fiction</option>
            <option value="thriller">Triller</option>
            <option value="Fantastique">Fantastique</option>
            <option value="Horreur">Horreur</option>
          </select>
          <input
            required
            style={styleInputNumber}
            placeholder="Pages"
            type="number"
            name="nbPage"
          />
        </div>
        <textarea name="resume" style={styleInputTextArea} />
        <motion.button
          whileHover={{
            backgroundColor: "rgba(255,255,255,1)",
            color: "rgba(0,0,0)",
          }}
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: ".8rem",
            width: "20%",
            height: "25px",
            border: "2px solid rgba(255,255,255,0.7)",
            backgroundColor: "rgba(0,0, 0,.8)",
            color: "rgba(255,255,255,0.7)",
            fontWeight: "600",
          }}>
          valider
        </motion.button>
      </form>
    </>
  );
}
