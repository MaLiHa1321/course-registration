

const Dcard = ({cart,count}) => {
  
   
    const{title} = cart;

    
    return (
        <div className="text-center my-4">
            <ol >
                <li> {count} {title}</li>

            </ol>
          
            
        </div>
    );
};

export default Dcard;