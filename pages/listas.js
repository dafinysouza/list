import Head from 'next/head';

export default function Lists() {
  return (
    <>
      <Head>
        <title>Lista de tarefas</title>
        <meta name="description" content="Lista de tarefas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="/">Lista de tarefas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listas">Lista de tarefas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id='ultimas-tarefas'>
        <div className='container'>
          <h1 className='titulo'>Lista de tarefas</h1>

          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non ante quis odio laoreet tincidunt.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non ante quis odio laoreet tincidunt.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non ante quis odio laoreet tincidunt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
          <p class="h5">Lista de tarefas</p>

          <ul className="list-unstyled">
            <li className="">
              <a className="" href="#">Início</a>
            </li>
            <li className="">
              <a className="" href="#">Lista de tarefas</a>
            </li>
          </ul>
          
          <span class="text-muted">Todos os direitos reservados.</span>
        </div>
      </footer>

    </>
  )
}
