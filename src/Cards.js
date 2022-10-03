import React from 'react';
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"
import styled from "styled-components"

const pergResp = [
{pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
{pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
{pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
{pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
{pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
{pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
{pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes"},
{pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]




function embaralha(){
    pergResp.sort(comparador);
    function comparador() {
        return Math.random() - 0.5;
    }
    comparador()
}
embaralha()



function GeraPergunta(props){
    
    function cardToggle(){
        setCardClosed(!cardClosed)
        props.setvalorclique(true)
        
    }

    function ClosedCard(props){

        function CardNaoFinalizado(props){
            
            return(
                <PerguntaFechada>
                    <p>Pergunta {props.numpergunta + 1}</p>
                    <button disabled={props.valorclique} onClick={props.cardToggle}> <img src={props.imagem} /> </button>
                </PerguntaFechada>
            )
        }

        function CardFinalizado(props) {

            return (
                <PerguntaFechada cardfinalizado={props.cardfinalizado} verificaverde={props.verificaverde} verificaamarelo={props.verificaamarelo} verificavermelho={props.verificavermelho}>
                    <p>Pergunta {props.numpergunta + 1}</p>
                    <img src={props.imagem} />
                </PerguntaFechada>
            )
        }
    
        return (
            (props.cardfinalizado === true) ? <CardFinalizado verificaverde={props.verificaverde} verificaamarelo={props.verificaamarelo} verificavermelho={props.verificavermelho} cardfinalizado={props.cardfinalizado} numpergunta={props.numpergunta} imagem={props.imagem}/> : <CardNaoFinalizado numpergunta={props.numpergunta} valorclique={props.valorclique} cardToggle={props.cardToggle} imagem={props.imagem} />  
        )

    }

    function OpenedCard(props){

        

        function Pergunta(props){

            console.log(props.openpr)
            return(
                <PerguntaAberta>
                    <p>{props.pergunta}</p>
                    <img onClick = {props.toggleopen} src={setaVirar}/>
                </PerguntaAberta>
            )
        }

        function Resposta(props){

            function finaliza() {
                
                if ((props.verde === true) || (props.amarelo === true) || (props.vermelho === true)) {
                    props.setimagem(props.imgfinal)
                    props.cardToggle()
                    props.setContador(props.contador + 1)
                    props.setvalorclique(false)
                    props.setcardfinalizado(true)

                    if (props.verde === true) {
                        props.setverificaverde(true)
                    }
                    if (props.amarelo === true) {
                        props.setverificaamarelo(true)
                    }
                    if (props.vermelho === true) {
                        props.setverificavermelho(true)
                    }
    
                    if (props.contador === 7) {
                        props.setvalorclique(true)
                    }
                    props.setopenpr(false)
                }
                
                

            }

            return(
                <PerguntaAberta>
                    <p>{props.resposta}</p>
                    <img onClick = {finaliza} src={setaVirar} />
                </PerguntaAberta>
            )
        }
        
        function toggleOpen(){
            
            props.setverde(false);
            props.setamarelo(false);
            props.setvermelho(false);
            props.setopenpr(true)
            
        }
        
        return(
            <>
                {(props.openpr === true) ? <Resposta setopenpr={props.setopenpr} setverificaverde={props.setverificaverde} setverificaamarelo={props.setverificaamarelo} setverificavermelho={props.setverificavermelho} verde={props.verde} amarelo={props.amarelo} vermelho={props.vermelho} setcardfinalizado = {props.setcardfinalizado} setimagem = {props.setImagem} imgfinal = {props.imgfinal} setvalorclique = {props.setvalorclique} contador = {props.contador} setContador = {props.setContador}  cardToggle = {cardToggle} resposta ={props.resposta}/> : <Pergunta toggleopen={toggleOpen} botoesjogo={props.botoesjogo} pergunta = {props.pergunta} />}             
            </>
        )
    }

    let [cardClosed, setCardClosed] = React.useState(false);
    let [imagem, setImagem] = React.useState(setaPlay);
    let [cardFinalizado, setCardFinalizado] = React.useState(false);
    let [verificaVerde, setVerificaVerde] = React.useState(false);
    let [verificaAmarelo, setVerificaAmarelo] = React.useState(false);
    let [verificaVermelho, setVerificaVermelho] = React.useState(false);

    return (
        <>
            {(cardClosed === true) ? <OpenedCard openpr={props.openpr} setopenpr={props.setopenpr} setverde={props.setverde} setamarelo ={props.setamarelo} setvermelho = {props.setvermelho} botoesjogo={props.botoesjogo} setverificaverde={setVerificaVerde} setverificaamarelo={setVerificaAmarelo} setverificavermelho={setVerificaVermelho} verde={props.verde} amarelo={props.amarelo} vermelho={props.vermelho} setcardfinalizado={setCardFinalizado} setImagem = {setImagem} imgfinal = {props.imgfinal} setvalorclique = {props.setvalorclique} contador = {props.contador} setContador = {props.setContador}  cardToggle = {cardToggle} pergunta = {props.pergunta} resposta = {props.resposta}/> : <ClosedCard verificaverde = {verificaVerde} verificaamarelo={verificaAmarelo} verificavermelho={verificaVermelho} cardfinalizado={cardFinalizado} imagem = {imagem} setImagem = {setImagem} imgfinal = {props.imgfinal} valorclique={props.valorclique} cardToggle = {cardToggle} numpergunta = {props.numpergunta}/>}
        </>
    )

}

export default function GeraCards(props){
    
    return (
        <>
        {pergResp.map((fator, index) => <GeraPergunta openpr={props.openpr} setopenpr={props.setopenpr} verde={props.verde} setverde={props.setverde} amarelo={props.amarelo} setamarelo ={props.setamarelo} vermelho={props.vermelho} setvermelho = {props.setvermelho} imgfinal = {props.imgfinal} valorclique = {props.valorclique} setvalorclique={props.setvalorclique} contador = {props.contador} setContador = {props.setContador} pergunta = {fator.pergunta} resposta={fator.resposta} numpergunta={index}/>)}
        </>
    )
}














const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    background-color: #FFFFFF;
    background-color: ;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        text-decoration: ${props => props.cardfinalizado===true ? `line-through` : `none`};
        color: ${props => props.verificaverde===true ? `#2FBE34` : ``};
        color: ${props => props.verificaamarelo===true ? `#FF922E` : ``};
        color: ${props => props.verificavermelho===true ? `#FF3030` : ``};      
    }
    button{
        background-color: #FFFFFF;
        border: none;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    button{
        background-color: #FFFFFF;
        border: none;
    }
`


  
  
