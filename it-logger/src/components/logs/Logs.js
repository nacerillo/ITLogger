import React, {useState, useEffect} from 'react'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
const Logs = ({log: {logs, loading}, getLogs}) => {

    //this is now coming from app level state thanks to redux
   // const [logs,setLogs] = useState([]);
    //const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs()
        //eslint-disable-next-line
    },[]);

    /*const getLogs = async () =>{
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        
        setLogs(data);
        setLoading(false);
    }*/

    if (loading || logs === null){
        return <Preloader/>
    }

    return (
        <ul className = "collection with-header">
            <li className = "collection-header">
                <h4 className = "center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className = "center"> No log to show...</p>) : (
                logs.map( log => <LogItem log = {log} key = {log.id}/>)
            )}
        </ul>
    );
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    log: state.log //this pertains to log = logReducer from our reducer
})

//connects redux to our Logs component, add function we want to use from reducer as a second parameter
export default connect(mapStateToProps, {getLogs})(Logs);
