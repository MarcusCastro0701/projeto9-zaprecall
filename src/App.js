import GeraCards from "./Cards"
import logo from "./assets/img/logo.png"
import iconeCerto from "./assets/img/icone_certo.png"
import iconeErro from "./assets/img/icone_erro.png"
import iconeQuase from "./assets/img/icone_quase.png"
import party from "./assets/img/party.png"
import sad from "./assets/img/sad.png"
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"
import React from 'react';
import styled from "styled-components"

export default function App(){

    
    let [contador, setContador] = React.useState(0);
    let [valorClique, setValorClique] = React.useState(false);
    let [imgFinal, setImgFinal] = React.useState();
    let [verde, setVerde] = React.useState(false);
    let [vermelho, setVermelho] = React.useState(false);
    let [amarelo, setAmarelo] = React.useState(false);
    let [openPR, setOpenPR] = React.useState(false)


    function acerto(){
        setVerde(true)
        setImgFinal(iconeCerto)
        setAmarelo(false)
        setVermelho(false)
        
    }
    
    function erro(){
        setVermelho(true)
        setImgFinal(iconeErro)
        setVerde(false)
        setAmarelo(false)
        
    }
    
    function quase(){
        setAmarelo(true)
        setImgFinal(iconeQuase)
        setVerde(false)
        setVermelho(false)
        
    }


    
    return(
        <ScreenContainer>
            <LogoContainer>
                <h1>ZapRecall</h1>
                <img src = {logo}/>
            </LogoContainer>

            <GeraCards openpr = {openPR} setopenpr = {setOpenPR} verde = {verde} setverde = {setVerde} vermelho = {vermelho} setvermelho={setVermelho} amarelo = {amarelo} setamarelo = {setAmarelo} imgfinal = {imgFinal} setContador={setContador} contador={contador} valorclique = {valorClique} setvalorclique={setValorClique}/>

            <FooterConcluidos>
                <ContainerBotoes>
                    <Vermelho onClick={erro}> Não lembrei </Vermelho>
                    <Amarelo onClick={quase}> Quase lembrei </Amarelo>
                    <Verde onClick={acerto}> Zap! </Verde>
                </ContainerBotoes>
                <p>{contador}/8 concluídos</p>
            </FooterConcluidos>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    `

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img{
        width: 52px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
}
`

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    

`

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 5px #FFFFFF;
        padding:5px;
    }
`

const Verde = styled.button`
    background-color: #2FBE34;  
    border-radius: 5px #FFFFFF;
`
const Amarelo = styled.button`
    background-color: #FF922E;  
    border-radius: 5px #FFFFFF;
`
const Vermelho = styled.button`
    background-color: #FF3030;
    border-radius: 5px #FFFFFF;
` 



