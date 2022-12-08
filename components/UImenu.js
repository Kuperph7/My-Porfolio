export default function UImenu() {
  const backCard = () => {
    const card = document.querySelector("#menu");
    card.classList.add("menu-card-opacity");
    card.classList.remove("menu-card");

    const frontCard = document.querySelector("#home");
    frontCard.classList.add("home-card");
    frontCard.classList.remove("home-card-opacity");
  };
  return (
    <div id="menu" className="menu-card">
      <div className="menu-card-text">
        <a>Portfolio</a>
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
