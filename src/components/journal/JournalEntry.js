const JournalEntry = ({ entry }) => {

  // poner ... si sobre pasa 52 letras  
  const truncateStr = (str) =>
    str.length > 52 ? `${str.substring(0, 52)}...` : str;

  return (
    <div className="journal__entry">
      {/* image del journal, se usa background y no un img pa q sea responsive */}
      <div
        style={{
          backgroundImage:
            "url(https://c.ndtvimg.com/2019-12/l2fpvv2k_baby-yoda-meme-the-mandalorian_295x200_03_December_19.jpg)",
        }}
        className="journal__entry-picture"
      ></div>
      <div className="journal__entry-body">
        <h2 className="journal__entry-title">un nuevo dia</h2>
        <p className="journal__entry-content">
          {truncateStr(
            "Lorem ipsum dolor sit, amet consectetur adipisicing.312321321"
          )}
        </p>
      </div>

       <div className="journal__entry-date-box">
           <span>Monday</span>
           <h4>28</h4>
       </div>
    </div>
  );
};

export default JournalEntry;
