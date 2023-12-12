import bg from "./../../../public/images/ayman-yusuf-Librairie.jpg";
import { BookForm } from "../../component/bookform/BookForm";
import { ListOfBooks } from "../../component/listOfBooks/ListOfBooks";
import { useEffect, useState } from "react";

export function Hero() {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const dataBooks = (e) => {
    setBooks([...books, e]);
  };

  const deleteBook = (book) => {
    const newBooks = books.filter((actualBook) => {
      return actualBook.title !== book;
    });
    setBooks(newBooks);
  };
  const pages = () => {
    for (let book of books) {
      return parseInt(book.title);
    }
  };
  console.log(pages);
  return (
    <>
      <div style={heroStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "2rem",
          }}>
          <h1 style={{ display: "flex", fontSize: "clamp(1rem,2.5rem,3rem)" }}>
            Thread BOok
          </h1>
          <h4 style={{ display: "flex", fontSize: "clamp(.8rem,1rem,2rem)" }}>
            Suivez l'avancement de vos lectures
          </h4>

          <BookForm dataBooks={dataBooks} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,.8)",
              width: "100%",
              height: "auto",
              color: "rgba(0,0,0,.8)",
            }}>
            <span style={{ display: "flex", padding: ".5rem" }}>
              Vous avez lu : {totalPages} pages !
            </span>
            {books
              .map((b) => (
                <ListOfBooks
                  key={b.title}
                  title={b.title}
                  pages={b.pages}
                  category={b.category}
                  resume={b.resume}
                  deleteBook={deleteBook}></ListOfBooks>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
}
