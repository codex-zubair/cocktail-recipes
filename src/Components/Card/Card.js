import React, { useState } from 'react';
import Modal from '../Modal/Modal';


const Card = (props) => {
    const { strDrinkThumb, strDrink, idDrink} = props.cockTail
    // Using state to showing modal
    let [showModal, setShowModal] = useState(false); 

    


    
  



    return (
        

        <div showModal={showModal} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mt-2">
        
  
            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strDrink}</h5>

                <p>{idDrink}</p>
                <img className='rounded-t-lg' src={strDrinkThumb} alt="" />


                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}




                <button onClick={()=> setShowModal(true)} className='mt-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Read Recipe
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

        

                <Modal key={idDrink} id={idDrink} showModal = {showModal} setShowModal={setShowModal}></Modal>

                
            </div>

        </div>



    );
};

export default Card;