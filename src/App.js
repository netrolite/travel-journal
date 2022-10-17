import React from 'react'
import Card from './components/Card';
import Header from "./components/Header"
import data from "./Data"


export default function App() {
    const cardsElements = data.map((place, index) => {
        return (
            <Card 
            key={index}
            index={index}
            {...place}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className='cards'>
                {cardsElements}
            </main>
        </>
    )
}