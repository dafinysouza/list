import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../src/componentes/Navbar";
import Footer from "../src/componentes/Footer";

export default function Lists() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [stream, setStream] = useState(null);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  function saveToStorage(storage) {
    localStorage.setItem("tasks", JSON.stringify(storage));
  }

  function salvar() {
    const storage = JSON.parse(localStorage.getItem("tasks")) || [];

    storage.push({ title: form.title, description: form.description });

    saveToStorage(storage);

    setTasks(JSON.parse(localStorage.getItem("tasks")));

    setForm({
      title: "",
      description: "",
    });

    stopStream();
  }

  function requestStream() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = document.querySelector("#video");
        setStream(stream);

        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function stopStream() {
    const video = document.querySelector("#video");


    stream.getTracks().forEach(function (track) {
      track.stop();
    });

    video.src = "";
    setStream(null);
  }

  return (
    <>
      <Head>
        <title>Lista de tarefas</title>
        <meta name="description" content="Lista de tarefas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <button
        type="button"
        className="btn btn-primary-circle"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={requestStream}
      >
        <i className="fa-solid fa-plus"></i>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Adicionar tarefa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  T??tulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Adicione o t??tulo da tarefa"
                  value={form.title}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      title: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Descri????o
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Adicione a descri????o da tarefa"
                  rows="3"
                  value={form.description}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      description: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <hr />
              <div className="mb-3">
                <h3>Teste de c??mera</h3>
                <video id="video" width="100%"></video>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={salvar}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="ultimas-tarefas">
        <div className="container">
          <h1 className="titulo">Lista de tarefas</h1>
          { tasks.length > 0 ? (
            <div>
              {tasks.map((task, index) => (
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
              <h6>Ainda n??o h?? tarefas cadastradas!</h6>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
