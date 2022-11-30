import style from "./Cards.module.css";
import { useState, useEffect } from "react";

export default function Cards() {
  const [characters, setcharacters] = useState([]);
  useEffect(() => {
    async function getCard() {
      let res = await fetch("https://thronesapi.com/api/v2/Characters");
      let data = await res.json();

      setcharacters(data);
    }

    getCard();
  }, []);
  const [limit, setLimit] = useState(4);

  return (
    <>
      <div className={style.card_content}>
        {characters.slice(0, limit).map((e) => (
          <div key={e.id} className={style.card_designed}>
            <img className={style.imagen} src={e.imageUrl} />
            <h2>{e.fullName}</h2>
            <h2>{e.family}</h2>
            <h2>{e.title}</h2>
          </div>
        ))}
      </div>
      <div className={style.boton}>
        <button onClick={() => setLimit(limit + 4)}>Ver Mas</button>
      </div>
    </>
  );
}

// import Card from "../Card/Card.jsx";
// import style from './Cards.module.css'
// import { useState, useEffect } from "react";

// export default function Cards() {
//   const [characters, setcharacters] = useState([]);
//   useEffect(() => {
//     async function getCard() {
//       let res = await fetch("https://thronesapi.com/api/v2/Characters");
//       let data = await res.json();

//       setcharacters(data);
//     }

//     getCard();
//   }, []);
//   const [limit, setLimit] = useState(4);
//   return (
//     <>
//       <div className={style.container}>
//         {characters.slice(0, limit).map((e) => (
//           <Card
//           key={e.id}
//           fullName={e.fullName}
//           title={e.title}
//           family={e.family}
//           imageUrl={e.imageUrl}
//           />
//         ))}
//       </div>
//       <div className={style.boton}>
//         <button onClick={() => setLimit(limit + 4)}>Ver Mas</button>
//       </div>
//     </>
//   );
// }
