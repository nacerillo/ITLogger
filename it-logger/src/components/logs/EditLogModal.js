import React from 'react';
import { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
      if(message === '' || tech === ''){
          M.toast({html: 'please enter a message and select a technician'});
      }
      else{
          console.log(tech,message);

          //clear fields
          setMessage('');
          setTech('');
          setAttention(false);
      }
    }
    return (
        <div id = "edit-log-modal" className = "modal" style = {modalStyle}>
            <div className = "modal-content">
            <h4>Enter System Log</h4>
            <div className = "row">
                <div className = "input-field">
                <input type = "text" name = "message" value = {message} onChange = {e => {
                    setMessage(e.target.value)
                }}/>
                <label htmlFor="message" className = "active">
                    Log Message
                </label>
                </div>
            </div>
            <div className = "row">
                <select name = "tech" value = {tech} className = "browser-default" 
                onChange = {
                    e=> setTech(e.target.value)
                }><option value  = "" disabled>Select Tech</option>
                  <option value  = "Jon Doe" >Jon Doe</option>
                  <option value  = "Sam Smith" >Sam Smith</option>
                  <option value  = "Sara Willson" >Sara Willson</option>
                  <option value  = "Nicholas Cerillo" >Nicholas Cerillo</option>
                </select>
            </div>
              <div className = "row">
                <div className = "input-field">
                    <p>
                        <label>
                            <input type = "checkbox" className = "filled-in" checked={attention} value = {attention} 
                            onChange = {e => setAttention(!attention)}/>
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
                </div>
            </div>
            <div className = "modal-footer">
                <a href = "#!" onClick = {onSubmit} className = "modal-close wave-effect waves-green btn-flat">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditLogModal
