import React from 'react'
import PropTypes from 'prop-types';


const TechItem = (props) => {
    return (
        <li className  = "collection-item">
            <div>
                {props.tech.firstName} {props.tech.lastName}
            </div>
            <a href = "#!" className = "secondary-content">
                <i className = "material-items grey-text">delete</i>
            </a>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default TechItem
