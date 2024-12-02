import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [ data, setData ] = useState({});
    //like how you use hooks it instantly mount you can make your custom like that using  useEffect
    useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
     .then((res) => res.json()) // in res = we have store data now use res keyword to access data
     .then((res) => setData(res[currency]))
    }, [currency]);
    console.log(data);
    
    return data
}

export default useCurrencyInfo;