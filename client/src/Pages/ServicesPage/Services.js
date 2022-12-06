import React from "react";


const data = [
    { HairCuts: "Men's HairCut", Price: "$40.00"},
    { HairCuts: "Child's HairCut", Price: "$20.00"},
    { HairCuts: "Women's HairCut", Price: "$55.00"},
    { HairCuts: "HairCut Addon", Price: "$35.00"}
]

function Services() {
    return(
        <div className="ServicePageContainer">

            <h1>Services & Pricing</h1>

            <div className= "ServiceList">
                <table>
                    <tr>
                        <th>HairCut</th>
                        <th>Price</th>
                    </tr>
                    
                    {data.map((val, key) => {
                        return (
                            <tr key= {key}>
                                <td>{val.HairCuts}</td>
                                <td>{val.Price}</td>
                            </tr>
                        )
                    })}
                </table>
        </div>
    </div>
    )
}

export default Services