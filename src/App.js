import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './components/styles/menu.css';


const App = () => {

    const menuarray = [
        {id:0, category: "Bread & Buns", name: "Long John", price:"50", status:false ,image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hostess_twinkies_tweaked.jpg/640px-Hostess_twinkies_tweaked.jpg"},
        {id:1, category: "Bread & Buns", name: "Ensaymada", price:"75", status:false ,image: "https://cdn.shopify.com/s/files/1/0479/1835/0492/products/parmesan_2f326141-90e4-466c-8385-fd6e8e36eb41_1000x1000.jpg?v=1652253371"},
        {id:2, category: "Crackers & Biscuits", name: "Sweet Spread", price:"50", status:false ,image: "https://s.clipartkey.com/mpngs/s/27-270445_punch-clipart-cookie-graham-cracker-png.png"}

    ]

    


/* Category */

    const CategoryReducer = () => {
    
       const prevVal = menuarray.reduce((prevVal, currentVal)=>{
            if(prevVal.indexOf(currentVal.category) < 0){
                prevVal.push(currentVal.category)
            }
            return prevVal;},[])
            console.log(prevVal)
            console.log(menuarray)
        return(
            <div>
                {prevVal.map((myCategory)=>{
                    return(
                        <div className='section-container'>
                            <h1>{myCategory}</h1>
                            <div className='menu-container'>
                                
                                {menuarray
                                .filter(filteredCategory=> filteredCategory.category===myCategory)
                                .map((item)=>{
                                    
                                        return(
                                            <div className='menu-item'>
                                            <img src={item.image}/>
                                            <span>ID: {item.id}</span>
                                            <span>Category: {item.category}</span>
                                            <span>Name: {item.name}</span>
                                            <span>Price: {item.price}</span>
                                            <button>Add me</button>
                                            
                                            </div>
                                        )
                                        })}

                            </div>
                        </div>
                    )



                })}

            </div>

        )
    }





    return(
        <div>
            <Header/>

            <div className='category-container'>
               <CategoryReducer/>
               



            </div>

            <br/>
            <br/>
            <br/>
            <h2>This is all items only</h2>
            <div className='menu-container'>
            

            {      
                menuarray.map((id)=>{
                    return(
                        <div>
                            <Menu id={id.id}
                                category={id.category}
                                name={id.name}
                                price={id.price}
                                image={id.image}
                                />
                        </div>
                    )}) 
            }
            </div>

            
            <Footer/>

        </div>
    )

    }


export default App;