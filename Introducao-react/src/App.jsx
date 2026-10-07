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

