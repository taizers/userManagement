import './Card.css';
import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionCreators from '../../../../../../reducer/actionCreators';

const Card = ({ userData, changePopup }) => {
    const onCardClick = () => {
        changePopup(userData);
    };
    return (
        <li className="results__item product">
            <CardImage src={userData.avatar} email={userData.email} id={userData.id} onCardClick={onCardClick} />
            <CardContent userData={userData} onCardClick={onCardClick} />
        </li>
    );
};

Card.propTypes = {
    changePopup: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

const mapDispathToProps = (dispath) => {
    return {
        changePopup: (userData) => dispath(actionCreators["CHANGE_ACTIVE_POPUP"](userData))
    }
};

export default connect(null, mapDispathToProps)(Card);