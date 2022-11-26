import Link from "next/link";

export default function Footer () {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <p className="h5">Lista de tarefas</p>

          <ul className="list-unstyled">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/tarefas">Lista de tarefas</Link>
            </li>
          </ul>
          
          <span className="text-muted">Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  )
}