import Sidebar from "./Sidebar";
// cuando no haya nada seleccionado
import NothingSelected from "./NothingSelected";

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      
      <Sidebar/>

      <main>
          <NothingSelected/>
      </main>
    </div>
  );
};

export default JournalScreen;
