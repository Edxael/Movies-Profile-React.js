import React from 'react';

const MovieProf = (props) => {

  const conSty = { border: "2px solid black", padding: "3px", width: "180px", background: "rgb(196, 254, 169)", margin: "4px" }
  const imgSty ={ border: "2px solid black", width: "170", height: "210px", margin: "4px auto", display: "block"}
  const myst = { border: "4px solid white", display: "flex", flexWrap: "wrap", background:"gray", padding: "10px" }


  return(
    <div style={myst}>

      {props.data.map((person) => {
        return (
          <div style={conSty} key={person.id}>
            <img style={imgSty} src={person.mpic} alt="Missing Pic"/>
            <div><strong> Name: </strong>{person.name}</div>
            <div><strong> Year: </strong>{person.year}</div>
            <div><strong> Rate: </strong>{person.rate}</div>
          </div>
        )
      })}

    </div>
  )
}

export default MovieProf;
