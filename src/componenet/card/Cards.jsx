

const Cards = ({card}) => {
    console.log(card)
    const {img,title,details,credit_hr,price} = card
    return (
        <div className="my-4 bg-white p-4 rounded-lg text-center w-72">
            <img src={img} alt="" />
            <h1 className="text-xl font-bold m-4">{title}</h1>
            <p>{details}</p>
            <div className="flex justify-between gap-8 mt-4">
                <h2>$ price: {price}</h2>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></p>
                <h2>credit hour: {credit_hr}hr</h2>
            </div>
            <button className="btn bg-[#2F80ED] w-full p-2 rounded-lg mt-4 text-white">Select</button>
            
            
        </div>
    );
};

export default Cards;