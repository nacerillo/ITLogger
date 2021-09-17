import React from 'react';
import './searchbar.css';
 const SearchBar = () => {
    return (
        <nav className = 'blue'>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required/>
                        <label className="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar;
