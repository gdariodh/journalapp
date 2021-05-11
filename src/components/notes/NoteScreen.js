import { NotesAppBar } from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

        <form className="notes__content">
          <input
            autoComplete="off"
            className="notes__title-input"
            type="text"
            placeholder="Some awesome title"
          />
          <textarea
            placeholder="What happened today?"
            className="notes__text-area"
          ></textarea>
          <div className="notes__image">
            <img
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
              alt="una imagen"
            />
          </div>
        </form>
    </div>
  );
};

export default NoteScreen;
