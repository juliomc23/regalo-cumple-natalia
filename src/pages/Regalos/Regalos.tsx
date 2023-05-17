import React, { useState } from "react";
import styles from "./Regalos.module.scss";
import cabeza from "/src/assets/oilujCabeza.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export type RegalosProps = unknown;

const Regalos: React.FC<RegalosProps> = () => {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);

  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const conversation = [
    "¡Hola Nataliaaa! Estás en la sección de los regalos.",
    "Te voy a dejar una barra de busqueda para que busques por regalos.",
    "Para que no tengas pistas de ninguno, los regalos son regalo1 y regalo 2",
    "¡Te dije que iba a decirte los regalos, pero no va a ser tan sencillo!",
    "MUAJAJAJA 😈",
    "Intenta adivinarloooos",
  ];

  const nextMessage = () => {
    if (messageIndex < conversation.length - 1) {
      setMessageIndex((prevState) => prevState + 1);
    }
    if (messageIndex === conversation.length - 1) {
      setInputVisible(true);
    }
  };
  const prevMessage = () => {
    if (messageIndex > 0) setMessageIndex((prevState) => prevState - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/${inputValue}`);
  };
  return (
    <div className={styles.regalos}>
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
      <section className={styles.inputSection}>
        {inputVisible ? (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="nope"
          >
            <input
              type="text"
              name="regalo"
              id="regalo"
              placeholder="Busca tus regalos como regalo1 y regalo2"
              onChange={handleChange}
              autoComplete="nope"
            />
            <button type="submit">
              <SearchIcon sx={{ fontSize: "3rem" }} />
            </button>
          </form>
        ) : null}
      </section>
    </div>
  );
};

export default Regalos;
