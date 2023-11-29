import React, { useState, useEffect } from 'react'
import './Questoes.css'

const url = 'https://quiz-react-renatoserranoos-projects.vercel.app/'

const Questoes = () => {
  const [respostasSelecionadas, setRespostasSelecionadas] = useState(Array(0).fill(null));
  const [questoesRespondidas, setQuestoesRespondidas] = useState([]);
  const [questoes, setQuestoes] = useState([]);
  
  useEffect(() => {
    async function fetchData(){

        const res = await fetch(url)
        const data = await res.json()
        setQuestoes(data);
        if (data && data.questoes) {
          setRespostasSelecionadas(Array(data.questoes.length).fill(null));
        }
        console.log(questoes)
    } 
    fetchData()
  },[])

  const handleRespostaSelecionada = (index, opcaoSelecionada) => {
    const novasRespostasSelecionadas = [...respostasSelecionadas];
    novasRespostasSelecionadas[index] = opcaoSelecionada;
    setRespostasSelecionadas(novasRespostasSelecionadas);
  };

  useEffect(() => {
    const respondidas = [];
    for (let i = 0; i < questoes.length; i++) {
      if (respostasSelecionadas[i] !== null) {
        respondidas.push(i);
      }
    }setQuestoesRespondidas(respondidas);
  }, [respostasSelecionadas]);

  const resetRadioButtons = () => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((radio) => {
      radio.checked = false;
    });
  };
  
  const verificarRespostas = () => {
    let corretas = 0;
    
    for (let i = 0; i < questoes.length; i++) {
      if (respostasSelecionadas[i] === questoes[i].respostaCorreta) {
        corretas++;
      }
    }
    if (questoes.length > 0 && questoesRespondidas.length === questoes.length) {
      alert(`Quiz concluído! Você acertou ${corretas} de ${questoes.length} questões.`);
      resetRadioButtons();
      setRespostasSelecionadas(Array(questoes.length).fill(null));
    } else {
      alert(`Você precisa responder todas as perguntas antes de finalizar.`);
    }
  };

  return(
    <div>
        <h1>Quiz Front-End</h1>
        {questoes && questoes.map((questao, index)=>(
          <div className="questoes"key={index}>
            <div className="radio-group">
              <h2>{questao.pergunta}</h2>
              <input type="radio" name={`questao_${index}`} id={`radio1_${index}`} onChange={() => handleRespostaSelecionada(index, 1)}/>
              <label htmlFor={`radio1_${index}`}>{questao.r1}</label><br />
              <input type="radio" name={`questao_${index}`} id={`radio2_${index}`} onChange={() => handleRespostaSelecionada(index, 2)}/>
              <label htmlFor={`radio2_${index}`}>{questao.r2}</label><br />
              <input type="radio" name={`questao_${index}`} id={`radio3_${index}`} onChange={() => handleRespostaSelecionada(index, 3)}/>
              <label htmlFor={`radio3_${index}`}>{questao.r3}</label><br />
              <input type="radio" name={`questao_${index}`} id={`radio4_${index}`} onChange={() => handleRespostaSelecionada(index, 4)}/>
              <label htmlFor={`radio4_${index}`}>{questao.r4}</label><br />
            </div>
          </div>
        ))}
          <div className="respondidos">
            {questoesRespondidas.map((index) => (
              <div><p key={index}><b>Questão {index + 1}:</b> Escolha {respostasSelecionadas[index]}</p></div>
            ))}
              <button onClick={verificarRespostas}>Finalizar Quiz</button>
          </div>
    </div>
  ); 
}

export default Questoes