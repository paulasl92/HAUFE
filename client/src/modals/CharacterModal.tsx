import '../util/styles/characterModal.scss';

const CharacterModal = ({ handleClose, show, children}) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-closeButton" type="button" onClick={handleClose}>X</button>
        <div className="modal-Information">
          {children}
        </div>
      </section>
    </div>
  );
};


export default CharacterModal;