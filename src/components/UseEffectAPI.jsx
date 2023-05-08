import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectAPI = () => {

    const [coins, setCoins] = useState([])

    let [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            .then((response) => {
                // console.log(response.data)
                setCoins(response.data)
            })
            .catch((error) => {
                console.log("This is our catch all ERROR message:", error)
            })
    }, [buttonClicked])

    return (
        <div>
            <h1>UseEffect API</h1>
            <button onClick={() => {setButtonClicked(!buttonClicked)}} className='btn btn-outline-dark'>Re-run API call</button>
            <div>
                {
                    coins.map((coin, idx) => { //if it says "coins.map" is not a function, you have not dove deep enought to access the data, use console.log to help
                        return (
                            <div key={idx}>
                                <img src={coin.image} alt="Coin Gecko" height="150px" />
                                {/* <h3>{coin.id}</h3> */}
                                <h2>{coin.name}</h2>
                                <h2>{coin.current_price}</h2>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UseEffectAPI