//THIS IS HOW YOU WOULD GET API DATA WITHOUT USING AXIOS

import React, { useState } from 'react'

const FetchAPI = () => {
    const [coins, setCoins] = useState([])

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            return response.json()
            // console.log(response)
        })
        .then((response) => {
            // console.log(response) 
            setCoins(response)
        })
        .catch((error) => {
            console.log("This is our catch all fetch ERROR", error)
        })
    }

    return (
        <div>
            <h1>Fetch API</h1>
            <br />
            <button onClick={fetchData} className='btn btn-outline-primary'>Fetch Data</button>
            {
                coins.map((coin, idx) => {
                    return (
                        <div key={idx}>
                            <img src={coin.image} alt="Coin Gecko" height="150px"/>
                            <h3>{coin.id}</h3>
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

export default FetchAPI