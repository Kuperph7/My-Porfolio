export default function UIhomeCard() {
  const flipCard = () => {
    const card = document.querySelector("#home");
    card.classList.add("home-card-opacity");
    card.classList.remove("home-card");

    const backCard = document.querySelector("#menu");
    backCard.classList.add("menu-card");
    backCard.classList.remove("menu-card-opacity");
  };

  return (
    <div id="home" className="home-card">
      <div className="home-card-text">
        <h3 className="home-card-text-name">Hi, i´m Tomas Kuperman</h3>
      </div>
      <div className="home-card-start">
        <a href="#menu" className="press-start" onClick={flipCard}>
          Start
        </a>
      </div>
      <div className="home-card-greetings">
        <h3 className="home-card-greetings-text">Welcome to my portfolio</h3>
      </div>
    </div>
  );
}
