import React from 'react';
import styles from "./Search.module.scss"
const Search = ({setSearch, setPageNumber}) => {
    let handleChange = (e) =>{
        e.preventDefault()
        setPageNumber(1)
        setSearch(e.currentTarget.value)
    }
    return (
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
            <input type="text" className={`${styles.input}`} placeholder="Search for characters..." onChange={handleChange}/>
            <button onClick={(e)=>
            {e.preventDefault()}
            } className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
        </form>
    );
};

export default Search;
