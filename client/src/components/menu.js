import React, {useState, useEffect} from 'react'
import Header from './header'
const Menu = () => {
    let [dish, setDish] = useState([])
    let arr = []
    let res
    useEffect(() => {
       
        fetch("http://localhost:3001/menu", {
            headers : { 
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            method: 'get',
            mode: 'cors'
        })
        .then(function (response) {
              if (!response.ok) {
                 const error = new Error(response.message)
                  throw error
              } else {
                   return response.json()
                  
                  
              }
              
        })
        .then(dat => {
          
            let dishes = dat.dishes
           
            res =Object.values(dishes).map(e => { 
                            let image = e.image
                            return <div className='section' key={e.name}>
                            <img src={require(`../assets/${image}`)}/>
                            
                            
                            <div className='dish'><h3>{e.name}  </h3><p className='price'>{e.price}</p></div>
                            <div> Ingredients : {e.ingredients}</div>
                            <p className='description'>Description: {e.description}</p>
                            </div> })
            arr.push(res)
                    
            setDish(arr)
        })
        .catch((error) => {
                console.log(error)
        })
    }, [])
return(
    <>
        <Header />
        {dish}
    </>
        )
}

export default Menu       