import { useState } from "react";
import cabeza from "/src/assets/oilujCabeza.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import styles from "./styles/Regalo2.module.scss";
import groot from "/src/assets/groot.png";

const Regalo2 = () => {
  const [visible, setVisible] = useState({ visible: false, regalo: "" });
  const [messageFirstConversationIndex, setMessageFirstConversationIndex] =
    useState(0);

  const firstConversation = [
    "¡Hola de nuevo! Este es el segundo y ultimo regalo, pero espero que te guste igual que el otro",
    "Esta vez... Tampoco voy a decirte cual es el regalo 😈",
    "Tendrás que adivinarlo tu misma para poder ver cual es el regalo",
    "Tu misión, si decides aceptarla, será descifrar una serie de pistas.",
    "¿Estás lista?",
  ];

  const [acceptMission, setAcceptMission] = useState(false);
  const [messageSecondConversationIndex, setMessageSecondConversationIndex] =
    useState(0);
  const secondConversation = [
    "Muy bien!! Vamos a adivinar ese regalo 😁😁",
    "Cada pista es un pequeño fragmento de un misterio mayor,",
    "un rompecabezas que tendrás que armar",
    "Podría ser cualquier cosa, un lugar, un objeto, una persona, un personaje, el límite es tu imaginación.",
    "AQUÍ ESTÁN LAS PISTAS:",
    "1. Galaxias he atravesado, pero no soy un astronauta.",
    "2. Robusto y duradero, pero mi apariencia podría engañarte.",
    "3. Ocupo un lugar en el cosmos, pero no encontrarás mi hogar en un mapa terrestre.",
    "4. Observarás que mis palabras son pocas, pero significativas.",
    "5. Terminarás esta adivinanza con mi nombre, que es también mi frase favorita.",
    "Esas son todas las pistas que puedo darte, espero que tengas algo en menteee",
    "Cuando creas que has resuelto el misterio, déjame saber tu respuesta.",
    "Si te quedas atascada en alguna pista, no dudes en pedir ayuda a Julio 🤍🤍",
  ];

  const nextMessage = () => {
    //aqui si acepta la mision es true, va a hacer prevState + 1 sobre la segunda conversacion y si no, sobre la primera
    if (acceptMission) {
      if (messageSecondConversationIndex < secondConversation.length - 1) {
        setMessageSecondConversationIndex((prevState) => prevState + 1);
      }
    } else {
      if (messageFirstConversationIndex < firstConversation.length - 1) {
        setMessageFirstConversationIndex((prevState) => prevState + 1);
      }
    }
  };
  const prevMessage = () => {
    if (acceptMission) {
      if (messageSecondConversationIndex > 0)
        setMessageSecondConversationIndex((prevState) => prevState - 1);
    } else {
      if (messageFirstConversationIndex > 0)
        setMessageFirstConversationIndex((prevState) => prevState - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "si") {
      setAcceptMission(true);
      e.target.value = "";
    }
    setVisible((prevState) => {
      return { ...prevState, regalo: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (visible.regalo === "groot") {
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
            {acceptMission ? (
              <span>{secondConversation[messageSecondConversationIndex]}</span>
            ) : (
              <span>{firstConversation[messageFirstConversationIndex]}</span>
            )}
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
          <img src={groot} className={styles.imgRegalo} />
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
              placeholder={
                acceptMission
                  ? "Dime el regalo en el que estas pensando"
                  : "¿Aceptas el reto?"
              }
              onChange={handleChange}
              autoComplete="nope"
            />
            <button type="submit">
              <RocketLaunchIcon sx={{ fontSize: "2rem" }} />
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Regalo2;
