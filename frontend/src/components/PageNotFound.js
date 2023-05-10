import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import cricketsSoundFile from "../sounds/crickets.mp3";

function PageNotFound() {
  const navigate = useNavigate();
  const cricketsSound = useMemo(() => new Audio(cricketsSoundFile), []);
  const [isSoundPlaying, setSoundPlaying] = useState(false);

  const goBack = () => navigate(-1);
  const goToMainPage = () => navigate("/", { replace: true });

  function toogleSound() {
    setSoundPlaying(!isSoundPlaying);
    isSoundPlaying ? cricketsSound.pause() : cricketsSound.play();
  }

  useEffect(() => {
    cricketsSound.load();
    cricketsSound.loop = "true";
  }, [cricketsSound]);

  return (
    <section className="content page-not-found">
      <button
        className="page-not-found__btn page-not-found__btn_type_sound"
        onClick={toogleSound}>
        {`Услышать ${isSoundPlaying ? "тишину" : "сверчков"}`}
      </button>
      <h1 className="page-not-found__title">
        <span className="page-not-found__accent">404</span>Страница не найдена
      </h1>

      <nav>
        <ul className="page-not-found__nav-list">
          <li>
            <button
              className="page-not-found__btn page-not-found__btn_type_nav"
              onClick={goBack}>
              Назад
            </button>
          </li>
          <li>
            <button
              className="page-not-found__btn page-not-found__btn_type_nav"
              onClick={goToMainPage}>
              На главную
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default PageNotFound;
