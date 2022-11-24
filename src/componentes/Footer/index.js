export default function Footer () {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <p className="h5">Lista de tarefas</p>

          <ul className="list-unstyled">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/tarefas">Lista de tarefas</a>
            </li>
          </ul>
          
          <span className="text-muted">Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  )
}