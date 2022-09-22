import React from 'react';

const Card = (props) => {

    const { strDrinkThumb, strDrink } = props.cockTail
   


    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mt-2">


            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strDrink}</h5>


                <img className='rounded-t-lg' src={strDrinkThumb} alt="" />


                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}

            </div>
        </div>


    );
};

export default Card;