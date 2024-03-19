import PropTypes from 'prop-types'; 
import { FaCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
    return (
        <div className='py-3'>
                <p className='flex justify-center items-center gap-3 text-2xl'><FaCheckCircle className='text-2xl'/>{feature}</p>
        </div>
    );
};

Features.propTypes={
    feature: PropTypes.string
}

export default Features;