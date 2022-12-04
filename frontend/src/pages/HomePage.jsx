import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "../Css/homepage.css";
import "../Css/globals.css";
import auth from "../utils/auth";
import clienteAxios from "../config/axios";
import Sweet from "sweetalert2";
import Advertising from "../components/Advertising";
import Category from "../components/Category";
import ListMoviesContainer from "../components/ListMoviesContainer";
import NextPremieres from "../components/NextPremieres";

const HomePages = () => {
  const [platosHome, setPlatosHome] = useState([]);
  const [renderMomento, setRenderMomento] = useState([]);
  const [desayunos, setDesayunos] = useState([]);
  const [almuerzos, setAlmuerzos] = useState([]);
  const [tragos, setTragos] = useState([]);
  const roleAdmin = localStorage.getItem("role");
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await clienteAxios.get("/api/v1/comidas");
      setPlatosHome(response.data);
      setRenderMomento(response.data);

      let desayuno = response.data.filter(
        (DesayunoHome) =>
          DesayunoHome.category === "Desayuno" ||
          DesayunoHome.category === "Merienda"
      );
      let almuerzo = response.data.filter(
        (AlmuerzoHome) =>
          AlmuerzoHome.category === "Almuerzo" ||
          AlmuerzoHome.category === "Cena"
      );
      let tragos = response.data.filter(
        (TragosHome) => TragosHome.category === "Tragos"
      );

      if (desayuno) {
        setDesayunos(desayuno);
      }

      if (almuerzo) {
        setAlmuerzos(almuerzo);
      }

      if (tragos) {
        setTragos(tragos);
      }
    })();
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated() === true) {
      if (roleAdmin === "admin") {
        history.push("/admin/todas");
      }
    }
  }, [auth.isAuthenticated()]);

  const GetTodas = () => {
    setRenderMomento(platosHome);
  };

  const GetDesayunos = () => {
    setRenderMomento(desayunos);
  };

  const GetAlmuerzos = () => {
    setRenderMomento(almuerzos);
  };

  const GetTragos = () => {
    setRenderMomento(tragos);
  };

  const Logueado = (e) => {
    const ModalLog = document.getElementById("Log-Modal");
    if (auth.isAuthenticated() === false) {
      e.preventDefault();
      Sweet.fire({
        title: "Uuups",
        text: "Por favor, debes iniciar sesión para ver el plato",
      });
      ModalLog.click();
    }
  };

  const platos = renderMomento.map((p) => (
    <article key={p._id} className="col-6 col-md-4 col-lg-3 px-0 containers">
      <Link onClick={Logueado} to={"plato/" + p._id}>
        <img
          className="w-100 PlatosHomeimg"
          src={
            p.imageUrl.includes("cloudinary")
              ? p.imageUrl
              : `http://localhost:3001` + p.imageUrl
          }
          alt={p.title}
        />
        <div className="overlay col p-0 text-white text-center">
          <h4 className="mb-0">{p.title}</h4>
          <hr className="bg-white my-1" />
          <div className="text mb-0">{p.description}</div>
        </div>
      </Link>
    </article>
  ));

  return (
    <div className="mw-100">
      <ListMoviesContainer publicity />
      <Advertising />
      <Category />
      <NextPremieres />
      {/* <CrudMovies /> */}
    </div>
  );
};

export default HomePages;
