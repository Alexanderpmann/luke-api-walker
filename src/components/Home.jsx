import React, { useState } from 'react'
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {
Routes,
Route,
Link
} from "react-router-dom";



const Home = (props) => {
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const sendSearch = (e) => {
        e.preventDefault();
        navigate(`/${selection}/${id}`);
        setId("");
    }

const style1 = {
    backgroundColor: "black",
    color: "gold",
    marginTop: "5px",
    border: "2px solid lightBlue",
    boxShadow: "2px 2px 10px blue",
    padding: "20px",
    margin: "5px"
}

const divBox1 = {
    marginTop: "5px",
    border: "2px dotted grey",
    padding: "2px"
}

const keyStyle = {
    fontSize: "14px",
    color: "cyan",
    marginTop: "5px"
}

return (
<form style={style1} onSubmit={sendSearch}>
    <label className='m-3'>Seeking Info On: </label>
    <select name="search" id="search" className='space' value= {selection} onChange = {(e) => setSelection(e.target.value)}>
        <option value = "people">People</option>
        <option value = "planets">Planets</option>
    </select>
    <br></br>
    <label className='m-3'>Enter ID#:</label>
    <input type="number" name='id' className='input' min= '1' value = {id} onChange={(e) => setId(e.target.value)} />
    <input type='submit' value='Search' className='space' />
    <div style={divBox1}>
        <h5 style={keyStyle}>(Planets - Enter a number from 1 to 60)</h5>
        <h5 style={keyStyle}>(People - Enter a number from 1 to 82)</h5>
    </div>
</form>
)
}

export default Home;