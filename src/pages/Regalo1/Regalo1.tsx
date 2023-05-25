import React, { useState } from "react";
import styles from "./Regalo1.module.scss";
import cabeza from "/src/assets/oilujCabeza.png";
import zapatillas from "/src/assets/zapatillas.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export type Regalo1Props = unknown;

const Regalo1: React.FC<Regalo1Props> = () => {
  const [visible, setVisible] = useState({ visible: false, regalo: "" });
  const [messageIndex, setMessageIndex] = useState(0);

  const conversation = [
    "¡Hola de nuevo! Se ve que tenías ganas de ver tus regalos y no has tardado mucho en continuar 😁",
    "Pues bien, no voy a decirte los regalos tan facilmente, tendrás que adivinarlos",
    "Para ello, voy a darte algunas pistas",
    "AQUÍ VA MI PRIMERA PISTA",
    "Estoy cerca del suelo, pero no soy la grava",
    "¿Tienes algo en mente? Si no es así te voy a dar algunas pistas más",
    "¡Presta atención para no perderte!",
    "Mis lazos te sostienen con fuerza, pero no soy una cuerda.",
    "¿Vas uniendo hilos? 😉",
    "Aquí va otra pista, ¡Ánimo Natalia, tu puedes!",
    "Tienes dos de mí, pero no soy tus manos",
    "Soy esencial en tu día a día, ¿puedes adivinar quién soy?",
    "¿Lo tienes ya? No es tan difícil 😁",
    "Venga, voy a darte una pista más grande",
    "En los deportes me usan, los corredores también",
    "Aquí tienes todas mis pistas",
    "Espero que te ayuden a dar un gran paso hacia tu regalo",
    "Dile ahora a Julio lo que piensas que es",
    "¿Se lo has dicho ya? Si es que si, escribe lo que piensas que puede ser",
    "Espero que te guste tu regalo 😁🤍",
  ];

  const nextMessage = () => {
    if (messageIndex < conversation.length - 1) {
      setMessageIndex((prevState) => prevState + 1);
    }
  };
  const prevMessage = () => {
    if (messageIndex > 0) setMessageIndex((prevState) => prevState - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisible((prevState) => {
      return { ...prevState, regalo: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      visible.regalo === "zapatillas" ||
      visible.regalo === "zapatos" ||
      visible.regalo === "vans"
    ) {
      setVisible((prevState) => {
        return { ...prevState, visible: true };
      });
    }
  };
  return (
    <div className={styles.regalo1}>
      <section className={styles.conversation}>
        <img src={cabeza} alt="cabeza oiluj" className={styles.oilujCabeza} />
        <section className={styles.mensajes}>
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
      </section>
      <section className={styles.regaloDiv}>
        {visible.visible ? (
          <img src={zapatillas} className={styles.imgRegalo} />
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="nope"
          >
            <input
              type="text"
              name="regalo"
              id="regalo"
              placeholder="Dime el regalo que estás pensando"
              onChange={handleChange}
              autoComplete="nope"
            />
            <button type="submit">
              <CardGiftcardIcon sx={{ fontSize: "2rem" }} />
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Regalo1;
