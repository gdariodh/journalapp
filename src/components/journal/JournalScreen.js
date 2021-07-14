import Sidebar from "./Sidebar";
// cuando no haya nada seleccionado
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
// redux
import { useSelector } from "react-redux";

const JournalScreen = () => {
  // extraemos el state active de nuestro state principal de notes
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
