import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const AddLogModal = ({addLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    //if message or tech field is blank, then send toast message 
    //else create new log and call addLog from redux, feeding newLog as arguement
    const onSubmit = () => {
      if(message === '' || tech === ''){
          M.toast({html: 'please enter a message and select a technician'});
      }
      else{
         console.log(tech,message);
         //create a new log
         const newLog = {
             message,
             tech,
             date: new Date()
         }
          addLog(newLog);

          M.toast({html: `Log added by ${tech}`})
          setMessage('');
          setTech('');
          setAttention(false);
      }
    }
    return (
        <div id = "add-log-modal" className = "modal" style = {modalStyle}>
            <div className = "modal-content">
            <h4> Enter System Log</h4>
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
AddLogModal.propTypes = {
    //log: PropTypes.object.isRequired,
    addLog: PropTypes.func.isRequired,
}
//first parameter is null since we are only calling an action that changes state. We are not bringing in state
export default connect(null,{addLog})(AddLogModal);
