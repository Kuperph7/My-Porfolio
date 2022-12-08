import Cursor from "../components/Cursor";
import UIhomeCard from "../components/UIhomeCard";
import UImenu from "../components/UImenu";
import UIworks from "../components/UIworks";

export default function Home() {
  return (
    <div className="container">
      <UIworks />
      <UImenu />
      <UIhomeCard />
      <Cursor />
    </div>
  );
}
