import React from 'react'

export default function Preview(props) {
    const matriz = JSON.parse(props.matriz_array)
    console.log("matriz_array", matriz, matriz.length)

    const listItems = matriz.map((row, index) => (
        <div key={index} className="g-row">
            {row.map((item, index) => (<div key={index} className={item === 1 ? "g-col-1" : "g-col-0"}></div>))}
        </div>
    )
    );

    return (
        <div className="grid">
            {listItems}
        </div>
    )
}
