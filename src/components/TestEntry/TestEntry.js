import React, { useState, useEffect } from "react";

const TestEntry = () => {

    const [item, SearchData] = useState([]);
    const [cryptos, setCryptos] = useState([]);
    const [origCryptosCount, setOrigCryptosCount] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const url = "https://api.coingecko.com/api/v3/coins/list";
        const response = await fetch(url);
        const info = await response.json();
        setCryptos(info);
        setOrigCryptosCount(info);
    };

    // const Search_Old = key => {
    //   console.log(key);
    //   fetch("https://api.coingecko.com/api/v3/coins/list?q=" + key).then(data => {
    //     data.json().then(resp => {
    //       SearchData(resp);
    //     });
    //   });
    // };
    //
    const Search = key => {
        const newResults = origCryptosCount.filter(crypto => crypto.name.includes(key));
        console.log('newResults', newResults);
        setCryptos(newResults);
    };

    const cryptoJsx = cryptos.map(crypto => (
        <div key={crypto.id}>{crypto.id}</div>
    ));
    return (
        <div>
            Search:
            <input type="text" onBlur={event => Search(event.target.value)} />
            {cryptoJsx}
        </div>
    );
};

export default TestEntry;