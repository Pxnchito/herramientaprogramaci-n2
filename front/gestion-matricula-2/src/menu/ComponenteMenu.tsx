export default function ComponenteMenu() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="/inicio">
        Gestion - Matricula 
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/horarios">
              Horarios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/locales">
              Locales
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/entrenadores">
              Entrenadores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alumnos">
              Alumnos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/matriculas">
             Matriculas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
