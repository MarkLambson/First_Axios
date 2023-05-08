//THIS IS HOW YOU GET API DATA USING AXIOS (must install with terminal first)

import React, { useState } from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    const [coins, setCoins] = useState([])

    const fetchData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            console.log(response.data)
            setCoins(response.data)
        })
        .catch((error) => {
            console.log("This is our catch all ERROR message", error)
        })
    }

    return (
        <div>
            <h1>Axios API</h1>
            <button onClick={fetchData} className='btn btn-outline-secondary'>Fetch Data</button>
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
    )
}

export default AxiosAPI