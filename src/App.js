import Intro from "./components/intro/Intro"
import Card from "./components/card/Card"
import Rastre from "./components/card/assets/rastrecep.png"
import Skills from "./components/skills/Skills"
import Contato from "./components/contato/Contato"
import JS from "./components/card/assets/js.png"
import CSS from "./components/card/assets/css.png"
import HTML from "./components/card/assets/html.png"
import REACT from "./components/card/assets/react.png"
import ANGULAR from "./components/card/assets/angular.png"
import UX from "./components/card/assets/ux.png"
import Breve from "./components/card/assets/Breve.png"
import Netflix from "./components/card/assets/netflix.png"







function App ()  {
  return (
<div>
    <Intro/>
  <div className="bg"> 
  <p className="texto-1"> PROJETOS</p>
    <div className="wrapper"> 
      
      <a href="https://github.com/PedroVboas/RastreCEP">
      <Card 
      img={Rastre}
      title="RastreCEP" 
      description="Desenvolvido com a finalidade de rastrear endereços por meio do CEP"/>
     
     </a>

     <a href="https://github.com/PedroVboas/Clone-Netflix">
      <Card 
      img={Netflix}
      title='"Clone" Netflix'
      description="Clone do Front-End do Netlix, feito com a API ThemovieDB"/>
    </a>

    <a href="#">
      <Card 
      img={Breve}
      title="Projeto Angular"
      description=""/>
      </a>
    </div>

    <p className="texto"> HABILIDADES</p>
    <div className="skills-body">
      <Skills 
      img={JS}
      title="JAVASCRIPT"
      />
      
      <Skills 
      img={HTML}
      title="HTML"
      />
      
      <Skills
      img={CSS}
      title="CSS"
      />

      <Skills
      img={REACT}
      title="REACT"
      />
      <Skills
      img={ANGULAR}
      title="ANGULAR"
      />
      <Skills
      img={UX}
      title="USER EXPERIENCE"
      />
      
    </div>
    <Contato/>
  </div>
  
</div>


  )
}

export default App


