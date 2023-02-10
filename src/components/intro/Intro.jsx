import "./intro.css";
import Eu from "../card/assets/Eu.png";
import seta from "../card/assets/seta.png"; 

const Intro = () => {
  return (
    <div className="i">
        <div className="i-esquerda">
            <div className="i-esquerda-wrapper">
                <h2 className="i-intro">Bem vindo! Meu nome é</h2>
                <h1 className="i-nome">Pedro Vilas Boas</h1>
                <div className="i-titulo">
                    <div className="i-titulo-wrapper">
                        <div className="i-titulo-item">Desenvolvedor</div>
                        <div className="i-titulo-item">Front-end </div>
                        <div className="i-titulo-item">Autodidata</div>
                        <div className="i-titulo-item">Curioso</div>
                        <div className="i-titulo-item">Programador</div>
                </div>
            </div>
            <p className="i-desc">
            Sou desenvolvedor Web Jr, sou formado no curso Análise e Desenvolvimento de Sistemas. Gosto de trabalhar com Front-End, do zero e até por meio de
            consumo de APIS. Sou apaixonado por elementos gráficos, programação, Inteligência Artificial entre outros. 
            Por isso, sigo no sonho de me tornar um desenvolvedor Front-End Sênior. Trabalho com <b>Javascript</b>, <b>React</b>, <b>Angular</b>,<b> HTML</b>,<b> CSS</b>, <b>UX e UI</b>. Estou disposto a aprender e aprimorar o que for necessário, agregando 
            conhecimento e visando o crescimento da empresa.
            </p>
        </div>
        <div className="i-animaseta">
          <img src={seta} alt="" className="i-imgseta" />
        </div>
        
    </div>
    <div className="i-direita">
      <div className="i-bg"></div>
      <img src={Eu} className="i-img" />
      
    
    </div>
  </div>
  )
}

export default Intro
