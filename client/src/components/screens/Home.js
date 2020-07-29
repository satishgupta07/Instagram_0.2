import React,{useState,useEffect} from 'react';

const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            
            setData(result.posts)
        })
    },[])

    return (
        <div className="home">
        {
            data.map(item=>{
                return(
                    <div className="card home-card" key={item._id}>
               <h5>{item.postedBy.name}</h5>
               <div className="card-image">
                   <img src={item.photo} alt="img1"/>
               </div>
               <div className="card-content">
               <i className="material-icons" style={{color:"red"}}>favorite</i>
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                  <div style={{display: "flex"}} >
                      <input type="text" placeholder="add a comment"/>
                      <button className="btn-floating btn waves-effect waves-light blue"><i className="material-icons">send</i></button>
                  </div>
               </div>
           </div>

                )
            })
        }

           
        </div>
    )
}

export default Home