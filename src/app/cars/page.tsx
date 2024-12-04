import React from 'react'

const  Cars = () => {

  const carData = [
    {id: 1, name: 'Grande', price: '15000', description: 'Effortless Speed', image: '/grande.jpg'},

    {id: 2, name: 'Civic', price: '14000', description: 'Luxury Drive', image: '/civic.jpg'},

    {id: 3, name: 'Fortuner', price: '22000', description: 'Dynamic Handling', image: '/fortuner.jpg'},

    {id: 4, name: 'Sonata', price: '17000', description: 'Agile Performance', image: '/sonata.jpg'},

    {id: 5, name: 'Elantra', price: '17000', description: 'Premium Comfort', image: '/elantra.jpg'},

    {id: 6, name: 'Revo', price: '18000', description: 'Powerful Performance', image: '/revo.jpg'}
  ]
  return (
    <div>
      <div className='cars'>
        {carData.map((car) => (
          <div key={car.id} className='car-card'>   
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.description}</p>
          <div className='price'>$ {car.price}</div>
          <button>Add To Cart</button>


          </div>
          
        ))}
      
      </div>
    </div>
  )
}

export default Cars