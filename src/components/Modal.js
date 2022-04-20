import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({removeConfig}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Set Configuration</h3>
        <p>duehedpowdawlmkwuheojfem</p>
        <button onClick={()=>{removeConfig()}}>Done</button>
      </div>
    </div>
  ), document.body)
}