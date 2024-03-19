import PropTypes from 'prop-types'; 
import Features from '../Features/Features';
const PriceOption = ({option}) => {
    const {membership, description, price, features} =option;
    return (
        <div className="bg-green-500 rounded-xl p-4 text-white space-y-5 text-center flex flex-col">
            <h2>
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl">{membership}</h4>
            <p className="text-2xl">{description}</p>
            <div className='flex-grow'>
            {
                features.map((feature, index) => <Features key={index} feature={feature}></Features>)
            }
            </div>
            <button className='bg-green-200 text-gray-600 w-full py-3 rounded-3xl text-2xl font-medium hover:bg-green-800 hover:text-white'>Get It</button>
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object,
    features: PropTypes.array
}

export default PriceOption;