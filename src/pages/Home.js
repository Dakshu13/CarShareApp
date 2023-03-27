import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousel from '../component/Carousel'



export default function Home() {

    const [carCat, setCarCat] = useState([]);
    const [carItem, setCarItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/CarData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();


        //setCarItem(response[1]);
        setCarCat(response[0]);
        //console.log(response[0]);

    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
            <div> <NavBar /> </div>
            <div><Carousel /></div>
            <div className='container'>
                {
                    carCat !==[]
                    ? carCat.map((data)=>{
                        return (
                        <div>{ data.CategoryName}</div>
                        )
                    })
                    : <div>""""""""""""""""""""</div>            
                }
                <Card />
            </div>

            <div> <Footer /> </div>
        </div>
    )
}
