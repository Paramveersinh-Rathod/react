import React, { useState } from 'react'

const ArrayEdit = () => {
    const [num, setNum] = useState([20, 30, 63, 44]);
    let sum = 0;
    num.forEach((number) => {
        sum = sum + number;
    });
    function increaseXP(){
        let numbers = [...num];
        numbers.push(13);
        setNum(numbers)
    }
    return (
        <div>
        <h3>My xp: {sum} </h3>
        <button onClick={increaseXP}>Boost XP</button>
        </div>
    )
}

export default ArrayEdit
