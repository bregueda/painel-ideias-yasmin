import { useState } from "react"
import "./App.css"

export default function App() {
  const [texto, setTexto] = useState("")
  const [ideias, setIdeias] = useState([])
  const [erro, setErro] = useState("")
  function adicionar(event) {
    event.preventDefault()
    if (texto.trim() === "") {
      setErro("Digite sua ideia antes de adicionar.")
      return
    }

    const ideia = {
      id: Date.now(),
      texto: texto.trim(),
      feita: false
    }
    setIdeias((atual) => [...atual, ideia])

    setTexto("")
    setErro("") 
  }
  function aoDigitar(event) {
    setTexto(event.target.value)
    setErro("")
  }
  function marcar(id) {
    setIdeias((atual) =>
      atual.map((ideia) =>
        ideia.id === id
          ? { ...ideia, feita: !ideia.feita } 
          : ideia
      )
    )
  }
  function excluir(id) {
    setIdeias((atual) => atual.filter((ideia) => ideia.id !== id))
  }
  const total = ideias.length
  const concluidas = ideias.filter((ideia) => ideia.feita).length

  return (
    <div className="painel">
      <h1> Painel de Ideias</h1>
      <p>Suas ideias em um só lugar.</p>
      <form onSubmit={adicionar}>
        <input
          value={texto}
          onChange={aoDigitar}
          placeholder="Digite uma ideia..."
        />
        <button type="submit">Adicionar</button>
      </form>
      {erro && <p className="erro">{erro}</p>}

   
      <div>
        {ideias.map((ideia) => (
          <div className="ideia" key={ideia.id}>
            <input
              type="checkbox"
              checked={ideia.feita}
              onChange={() => marcar(ideia.id)}
            />
            <span className={ideia.feita ? "feita" : ""}>{ideia.texto}</span>

            <button
              type="button"
              aria-label="Excluir ideia"
              onClick={() => excluir(ideia.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <footer>
        {`${total} ${total === 1 ? "ideia" : "ideias"} no painel · ${concluidas} ${
          concluidas === 1 ? "concluída" : "concluídas"
        }`}
      </footer>
    </div>
  )
}