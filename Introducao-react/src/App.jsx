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
}