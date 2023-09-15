import PropTypes from 'prop-types';
import Dcard from "../dcards/Dcard";


const Bookmark = ({dcard,total,credit,remaing}) => {
    
    return (
        <div>
            <div className="border-b-2 mb-8 p-4">
                <h2 className="text-[#2F80ED] text-xl font-bold ">Credit Hour Remaining {remaing}  hr</h2>
            </div>
            <div>
            <h1 className="text-2xl font-bold my-4">Course Name </h1>
            <ol> {
               dcard.map((cart,idx) => <Dcard key={idx} cart={cart} count={idx + 1}></Dcard>)
           }</ol>
        
         
           
           

          <hr className="my-4"/>
           <p className="text-base font-bold">Total Credit Hour : {credit} hr</p>
          <hr className="my-4"/>
          <p className="text-base font-bold">Total Price: $ {total}</p>

            </div>
          
            
            
        </div>
    );
};
Bookmark.propTypes ={
    dcard: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    credit: PropTypes.func.isRequired,
    remaing: PropTypes.func.isRequired
}

export default Bookmark;