export default function UImenu() {
  const backCard = () => {
    const card = document.querySelector("#menu");
    card.classList.add("menu-card-opacity");
    card.classList.remove("menu-card");

    const frontCard = document.querySelector("#home");
    frontCard.classList.add("home-card");
    frontCard.classList.remove("home-card-opacity");
  };

  const workClick = () => {
    const card = document.querySelector("#menu");
    card.classList.add("menu-card-opacity");
    card.classList.remove("menu-card");

    const frontCard = document.querySelector("#work");
    frontCard.classList.add("work-card");
    frontCard.classList.remove("work-card-opacity");
  };

  return (
    <div id="menu" className="menu-card-opacity">
      <div className="menu-card-text">
        <a href="#work" onClick={workClick}>
          Works
        </a>
        <a>Contact</a>
        <a>About me</a>
      </div>
      <div className="back">
        <a href="#home" className="back-button" onClick={backCard}>
          Back
        </a>
      </div>
    </div>
  );
}
