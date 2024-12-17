import './Modal.css'

const Modal = ({ message, buttons }) => {
    return (
        <div className="modal_overlay">
            <div className="modal_container">
                <p className="modal_message">{message}</p>
                <div className="modal_actions">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className="modal_button"
                            onClick={button.onClick}>
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;