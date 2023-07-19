import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box scrollbar">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && <div className="force-overflow">{children}</div>}
    </div>
  );
}

export default Box;
