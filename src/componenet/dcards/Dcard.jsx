import PropTypes from 'prop-types';

const Dcard = ({cart, count}) => {
  
   
    const{title} = cart;

    
    return (
        <div className=" my-4">
            <ol >
                <li>{count}.  {title}</li>
           

            </ol>
          
            
        </div>
    );
};
Dcard.propTypes={
    cart: PropTypes.array.isRequired,
    count: PropTypes.func.isRequired
}

export default Dcard;