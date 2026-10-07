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
    // RF5: valores derivados do mesmo estado (sem criar outro useState)
  const total = ideias.length
  const concluidas = ideias.filter((ideia) => ideia.feita).length

  return (
    <div className="painel">
      <h1>💡 Painel de Ideias</h1>
      <p>Suas ideias em um só lugar.</p>

      {/* RF1: formulário com input controlado (value + onChange juntos) */}
      <form onSubmit={adicionar}>
        <input
          value={texto}
          onChange={aoDigitar}
          placeholder="Digite uma ideia..."
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* RF6: renderização condicional, só aparece se existir erro */}
      {erro && <p className="erro">{erro}</p>} )