const Modal = ({ randomId }: { randomId: string }) => {
  return (
    <dialog id={`my_modal_${randomId}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello! Our contact number:</h3>
        <p className="py-4">123 456 789</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
export default Modal;
