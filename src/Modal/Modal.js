import './Modal.css';

function Modal(props) {

  return (
      <div className='backdrop' style={props.translate}>
      <div className='modal' style={props.scale}>
        {props.children}
        
        <button className='closeBtn' onClick={props.close}>X</button>
      </div>
    </div>
  );
}

export default Modal;
