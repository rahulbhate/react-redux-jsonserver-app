import React, { useState } from 'react'
import Radium from 'radium';
 function SliderList( {images} ) {
    const [current, setCurrent] = useState(images[0]);
    const [active, setActive] = useState(1);
    const divStyle = {
        height: "10px",
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        width: "10px",
        borderRadius:'50%',
        padding: '5px',
        margin: '10px',
        backgroundColor: "#d4d4d4",
        ":hover": {
          backgroundColor: "#5e3985"
        },
        ":active":{
          backgroundColor:'#45454d'
        }
      }
    const handleNext = (event) =>{
      if (event < images.length - 1) {
        setActive( active + 1 )
      }
      else {
        setActive(0)
      }
    }
    const handlePrevious = (event) =>{
      if (event > 0) {
        setActive(active -1)
      }
      else {
       setActive(images.length - 1)
      }
    }
    const hadleSetClick = (event) =>{
        setCurrent(images[event.target.getAttribute("data-image")]);
      }
    return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin: '40px auto', boxShadow: '0 1px 1px rgba(3, 3, 3, 0.275)'}}>
             {/* <p>{current.title}</p> */}
            {/* <img src={current.thumbnailUrl} /> */}
            
                    {images.map((row, index) => (
                      <>
                    {/* <span onClick={(event)=> { hadleSetClick(event)}} data-image={index} key={index} style={divStyle}></span> 
                    <hr/> */}
                    {active === index ?  <>
                    <p>{row.title}</p>
                    <img src={row.thumbnailUrl} /> </>: null}
                    </>
                ))}
           
            <div> 
              <button onClick={(event) => handleNext(active)} style={{backgroundColor:'#605d74'}}>{'<'}</button>
              <button onClick={(event) => handlePrevious(active)} style={{backgroundColor:'#e2aa3c'}}>{'>'}</button>
            </div>
        </div>
    )
}
export default Radium(SliderList);
