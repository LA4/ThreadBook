import { useState } from "react";
import { motion } from "framer-motion";

export function ListOfBooks({ title, pages, resume, deleteBook, category }) {
  const [visibleResume, setvisibleResume] = useState(false);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteBook(title);
  };
  return (
    <>
      <div
        onClick={() => setvisibleResume(!visibleResume)}
        style={{
          display: "flex",
          width: "100%",
          padding: ".5rem",
        }}>
        <span
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            cursor: "pointer",
          }}>
          {title}
        </span>
        <span
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}>
          {category}
        </span>
        <span
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          {pages} p.
        </span>
        <button onClick={handleDelete}>Supprimer</button>
      </div>
      {!visibleResume && (
        <span
          style={{
            display: "flex",
            width: "10px",
            heigh: "2px",
          }}>
          ▼
        </span>
      )}
      {visibleResume && (
        <motion.article
          transition={{ duration: 300 }}
          style={{
            display: "flex",
            maxWidth: "400px",
            padding: "1rem",
            fontSize: ".9rem",
          }}>
          {resume ? resume : "Il n'y a pas de notes à ce sujet"}
        </motion.article>
      )}
    </>
  );
}
