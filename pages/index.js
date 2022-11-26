import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../src/componentes/Navbar";
import Footer from "../src/componentes/Footer";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  return (
    <>
      <Head>
        <title>Lista de tarefas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section id="banner">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="to-do-list.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section id="ultimas-tarefas">
        <div className="container">
          <h1 className="titulo">Últimas tarefas</h1>

          {tasks.length > 0 ? (
            <div>
              {tasks.slice(0, 3).map((task, index) => (
                <div className="card" key={`card-${index}`}>
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h6>Ainda não há tarefas cadastradas!</h6>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
