import React from 'react';


const Modal = (value = true) =>  {
    const [showModal, setShowModal] = React.useState(false);
    
    

    
    return (
        <div>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
        {showModal? (<h1>Hello</h1>):null}
      </div>
    );
  }

export default Modal;