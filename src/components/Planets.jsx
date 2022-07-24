import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router';
import axios from 'axios';


const Planets = (props) => {
    const [planets, setPlanets] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanets(response.data)
            })
        .catch(err => {
            setPlanets("")
        })
}, [id]);

const style2 = {
    background: "crimson",
    border: "10px solid black",
    boxShadow: "2px 10px 10px grey",
    color: "ghostwhite",
    margin: "5px",
    marginTop: "5px",
    padding: "5px"
}

return (
        <div style={style2}>
            {planets.length === 0?
            <div>
            <h1>These aren't the droids you're looking for</h1>
            </div>:
            <div>
            <h1>{planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Gravity: {planets.gravity}</p>
            <p>Population: {planets.population}</p>
            </div>
            }
        </div>
)
}

export default Planets;