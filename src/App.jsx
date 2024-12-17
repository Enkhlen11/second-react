import "./app.css";
import Card from "./components/Card";
import Header from "./components/Header";

const news = [
  {
    title: "mickey mouse",
    content: "hello",
    img: "https://static.wikia.nocookie.net/characters/images/4/42/Mickey_Mouse_%28character%29.png/revision/latest?cb=20230508142819",
  },
  {
    title: "donald duck",
    content:
      "Pluto, la mascota de Mickey Mouse, fue también el leal compañero de su creador, el dibujante y productor de cine norteamericano Walt Disney. Juntos se alojaron en el hotel El Fuerte de la localidad española de Marbella y un entonces joven botones, hoy jubilado, Pedro Guerrero, cuenta a EFE que sacaba a pasear a diario al can por la playa.",
    img: "https://badgeland.dk/media/webp_image/catalog/product/cache/afb3d9b5d6719d7ac9304f40f95ae75d/a/n/anders-and-strygemaerke.webp",
  },
  {
    title: "goofy ",
    content: "hi",
    img: "https://i.etsystatic.com/9945731/r/il/332b14/5390592460/il_1588xN.5390592460_ducy.jpg",
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className="scrollCard">
        {news.map((medee) => {
          return (
            <Card
              garchig={medee.title}
              zurag={medee.img}
              description={medee.content}
            />
          );
        })}
        {/* <Card garchig="Mouse friends" />
        <Card garchig="Dog friends" /> */}
      </div>
    </div>
  );
}

export default App;
