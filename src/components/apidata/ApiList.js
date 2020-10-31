import React, {useState} from "react";
import PropTypes from "prop-types";
const ApiList = ({ data }) => {
    const[slides, setSlides] = useState(data);
    const[arr,setArr] = useState();
    const [current, setCurrent] = useState(data[0]);
    const [answers, setAnswers] = useState(current.selections.split(';'));
    const [newArr,setNewArr] = useState(current.moduleUrl.split(','));
    const [newData, setNewData] = useState({...newArr, ...current});
    //console.log(slides);
    const newSlides = slides.map((slide,index)=>{
        //console.log(slide);
        return  { ...slide.moduleUrl.split(',').map(x=> x)}
        // slide.moduleUrl.split(',').map(urls => {
        //     return  {...slide}
        // })
    })
    let result = slides.reduce((all, item, index) => (all.push(...[item, ...item.moduleUrl.split(',').map(v => (v))]), all) , []);
      console.log(result);
    //setCurrent([...newArr, current]);
    //console.log(newData);
    const handleSetClick = (event) =>{
        setCurrent(data[event.target.getAttribute("data-question")]);
        setAnswers(current.selections.split(';'));
      }
  return (
    <>
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', margin: '40px auto', boxShadow: '0 1px 1px rgba(3, 3, 3, 0.275)'}}>
        <h5 data-question={current.name}>{current.name}</h5>
        <ul>
            {answers.map(a =>{
                return(
                    <li key={a} data-answer={a}>{a.replace("@","")}</li>
                )
            })}
        </ul>
        <div style={{ display:'flex', cursor:'pointer', boxShadow: '0 1px 1px rgba(3, 3, 3, 0.275)'}}>
                        {data.length > 0 ? data.map((row, index) => (
                        <span onClick={(event)=> { handleSetClick(event)}} data-question={index} key={index} style={{padding: '5px 10px',margin: '3px', border: '1px solid #4CAF50'}}>{index}</span> 
                    )): 'No data found'}
                </div>
    <ul>
    {slides.length > 0 ? slides.map((value, index) => (
        <div key={index}>
        <div>{value.name}</div>
       
    
        {/* <h2>{value.selections.split(';')}</h2> */}
        {/* { ee = value.moduleUrl.split(',')} */}
        {/* { value.moduleUrl.split(",").map((item, index) => item === "noSlide" ?  null : <iframe src={item.replace("/edit#slide=id.p","/preview?rm=minimal&slide=id.p")} key={index}/>)} */}
        {/* {dd.map((val, idx) => (
            <div key={idx}>
                <div>{val}</div>
            </div>
        ))} */}
        {/* {ee.map((v, i) => (
                    <p key={i}>URLs: {v}</p>
                ))} */}
        <hr/>
    </div>
)) : 'No Data Found'}
        {/* {data.length > 0 ? data.map(d =>{
            var e = d.moduleUrl.split(';');
            var answers = d.selections.split(',');
            console.log(e);
            e.map((f) => { console.log(f)});
            answers.map((a) =>{
                    console.log(a);
                    
                        <li key={a}>Hello</li>
                    
                })
            return(
                <li key={d.id}>{d.name}</li>
            )
        }) : "No data found"} */}
    </ul>
    </div>
    </>
  );
};

// ApiList.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default ApiList;