const Card = (damjsan) => {
  return (
    <div className="card">
      <h1>{damjsan.garchig}</h1>
      <img src={damjsan.zurag} alt="" />
      <p>{damjsan.description}</p>
    </div>
  );
};
export default Card;
