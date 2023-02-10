import React from "react";
import "./contato.css";
import Phone from "../card/assets/whatsapp.png";
import Adress from "../card/assets/adress.png";
import Email from "../card/assets/gmail.png";
import Git from "../card/assets/github.png";
import {useRef} from "react";
import emailjs from 'emailjs-com';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const enviar = () => {
    toast("✅ Mensagem Enviada com Sucesso!")

}

const Contato = () => {
    const formRef = useRef()

    const handleSubmit = (e) =>{
       e.preventDefault(); 
       emailjs.sendForm(
        'service_ck0s1hw',
        'template_oofee05', 
        formRef.current,
        '03IHgqZA4szrLdSQc'
          )
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
 
} 

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Entre em contato comigo</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon"/>
                       (61) 99904-9678
                </div>
                    <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon"/>
                    Pedrohenriquevboas@gmail.com
                </div>
                    <div className="c-info-item">
                    <img src={Adress} alt="" className="c-icon"/>
                    SHRF QD CLN 3 - Bloco A - Lote 03/05 - Apto 221 - Condomínio Castro Alves - Riacho Fundo 1
                </div>
                <div className="c-info-item">
                    <img src={Git} alt="" className="c-icon"/>
                    <a href="https://github.com/PedroVboas"> github.com/PedroVboas</a> 
                    </div>
                
            </div>
        </div>
    <div className="c-right">
        <p className="c-desc">
            <b className="c-duvida">Possui alguma dúvida?</b> Mande uma mensagem para mim no campo abaixo. 
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" name="user_name" />
            <input type="text" placeholder="Assunto" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Mensagem" name="message" />
            <button onClick={enviar}>Enviar</button>    
            <ToastContainer/>           
        </form>
    </div>
  </div>
</div>
  );
};

export default Contato