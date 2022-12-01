import { useState } from "react";
import style from "./Home.module.css";
import validate from "./validate";

export default function Home(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validate(({
        ...userData,
        [name]: value,
      }))
    );
    console.log(errors);
  };

  const handleSubmit = () => {
    props.login(userData);
  };

  return (
    <div className={style.contentWrapper}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            name="username"
            onChange={handleInputChange}
            value={userData.username}
            type="email"
            placeholder="E-mail"
          />
          <p>
            {errors.username ? errors.username : null}
          </p>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Contraseña"
          />
          <p>
            {errors.password ? errors.password : null}
          </p>

          <button type="submit">Acceder</button>
          <div className={style.__container}>
            <a href="#">Recuperar contraseña</a>
            <hr />
            <a href="#">Registrate</a>
          </div>
        </form>
      </div>
    </div>
  );
}
