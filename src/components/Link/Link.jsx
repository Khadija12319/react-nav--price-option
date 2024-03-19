import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    return (
            <li className="hover:bg-yellow-600 mr-10 px-6 py-2">
                <a href={route.path}>{route.name}</a>
            </li>
    );
};
Link.propTypes={
    route: PropTypes.object
}

export default Link;