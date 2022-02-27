import React, { useEffect, useState } from 'react';
import {describe, expect, test} from ‘@testing-library/jest-dom’;


const App = () => {
    const [data, setdata] = useState({title : 'nodata yet'})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data1 => {
            const {title,id,body} = data1[0]
            expect(title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
            //if (id===1) {
                //console.log("id matches");
            //}
             //else {
                 //console.log("id doesn't match");
             //}
            setdata({
                ...data, title, id, body
           });
        })
    })
    return <>
        

      
        
        
        <div style={{ padding: "50px 10px", border: "1px solid red", backgroundColor: "green" }}>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </div>
        
        



        </>
}

export default App;