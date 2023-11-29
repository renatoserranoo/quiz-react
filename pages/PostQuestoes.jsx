import React from 'react'
import { useState } from 'react'
import './PostQuestoes.css'

const url = "https://quiz-react-renatoserranoos-projects.vercel.app/criar"

const PostQuestoes = () => {

    const [id, setId] = useState("");
    const [pergunta, setPergunta] = useState("");
    const [r1, setR1] = useState("");
    const [r2, setR2] = useState("");
    const [r3, setR3] = useState("");
    const [r4, setR4] = useState("");
    const [respostaCorreta, setRespostaCorreta] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        const questoesToAdd = {
            id: id,
            pergunta: pergunta,
            r1: r1,
            r2: r2,
            r3: r3,
            r4: r4,
            respostaCorreta: respostaCorreta
        }

        const response = await fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(questoesToAdd)
        })

        console.log(response);

        const addedQuestoes = await response.json()

        setAlunos((prevQuestoes) => [...prevQuestoes, addedQuestoes])

        setId("")
        setPergunta("")
        setR1("")
        setR2("")
        setR3("")
        setR4("")
        setRespostaCorreta("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Pergunta:
                <input type="text" name="pergunta" value={pergunta} onChange={(e) => setPergunta(e.target.value)}/>
                <br/>
            </label>
            <br />
            <label>
                Primeira Resposta: 
                <input type="text" name="r1" value={r1} onChange={(e) => setR1(e.target.value)}/>
                <br/>
            </label>
            <label>
                Segunda Resposta: 
                <input type="text" name="r2" value={r2} onChange={(e) => setR2(e.target.value)}/>
                <br/>
            </label>
            <label>
                Terceira Resposta: 
                <input type="text" name="r3" value={r3} onChange={(e) => setR3(e.target.value)}/>
                <br/>
            </label>
            <label>
                Quarta Resposta: 
                <input type="text" name="r4" value={r4} onChange={(e) => setR4(e.target.value)}/>
                <br/>
            </label>
            <br />
            <label>
                Resposta Correta:
                <input type="text" name="respostaCorreta" value={respostaCorreta} onChange={(e) => setRespostaCorreta(e.target.value)}/>
            </label>
            <br />
            <input type="submit" className='salvar' value='Salvar'/>
        </form>
    </div>
  )
}

export default PostQuestoes