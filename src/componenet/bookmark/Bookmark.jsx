import Dcard from "../dcards/Dcard";


const Bookmark = ({dcard,count,total,credit}) => {
    
    return (
        <div>
            
            <h1 className="text-2xl font-bold my-4">Course Name </h1>
           
            {
                dcard.map((cart,idx) => <Dcard key={idx} cart={cart} count={count}></Dcard>)
            }

           <hr className="my-4"/>
            <p>Total Credit Hour : {credit}hr</p>
           <hr className="my-4"/>
           <p>Total Price:{total}TK</p>
            
            
        </div>
    );
};

export default Bookmark;