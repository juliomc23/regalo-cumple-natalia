import React, { useState } from "react";
import styles from "./Inicio.module.scss";
import Oiluj from "/src/assets/oiluj.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export type InicioProps = unknown;

const Inicio: React.FC<InicioProps> = () => {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);
  const conversation = [
    "Hola Natalia, ya nos conocemos y me alegro de volver a verte por aquí 😁",
    "Esta vez es por tu cumple, así que, lo primero de todo, ¡ Felicidades 🤍🤍 !",
    "Te estarás preguntando que hacemos aquí...",
    "Pues bien, voy a contartelo, aún que Julio lleva guardandolo muuucho tiempo y espero que no se enfade 😉",
    "Voy a decirte los regalos que Julio te tiene preparados",
    "¿Estás lista? Si lo estás, vuelve a darle al botón que has estado utilizando hasta ahora.",
  ];

  const nextMessage = () => {
    if (messageIndex < conversation.length - 1) {
      setMessageIndex((prevState) => prevState + 1);
    }
    if (messageIndex === conversation.length - 1) {
      navigate("/regalos");
    }
  };
  const prevMessage = () => {
    if (messageIndex > 0) setMessageIndex((prevState) => prevState - 1);
  };

  return (
    <div className={styles.inicio}>
      <img src={Oiluj} alt="Oiluj" className={styles.oiluj} />
      <section className={styles.conversacion}>
        <div className={styles.message}>
          <span>{conversation[messageIndex]}</span>
        </div>
        <div className={styles.buttonDiv}>
          <button onClick={prevMessage}>
            <ArrowBackIosIcon sx={{ fontSize: "2.5rem" }} />
          </button>
          <button onClick={nextMessage}>
            <ArrowForwardIosIcon sx={{ fontSize: "2.5rem" }} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
