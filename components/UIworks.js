export default function UIworks() {
  const workBackCard = () => {
    const frontCard = document.querySelector("#work");
    frontCard.classList.add("work-card-opacity");
    frontCard.classList.remove("work-card");

    const card = document.querySelector("#menu");
    card.classList.add("menu-card");
    card.classList.remove("menu-card-opacity");
  };

  return (
    <div id="work" className="work-card-opacity">
      <div className="work-title">
        <h1>Works</h1>
      </div>
      <div className="work-card-text">
        <a>Gif finder</a>
        <a href="https://mkodontologia-fd9raj3r7-kuperph7.vercel.app/">
          Dental center
        </a>
        <a href="https://portf-main.vercel.app/">Client portfolio</a>
        <a>API Rick & Morty</a>
      </div>
      <div className="back">
        <a href="#menu" className="back-button" onClick={workBackCard}>
          Back
        </a>
      </div>
    </div>
  );
}
