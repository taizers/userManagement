import './PaginationItem.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../../../reducer/loadData/loadData';
import PropTypes from 'prop-types';
import { getCurrentPage } from '../../../../../reducer/loadData/selectors';

const PaginationItem = ({ currentPage, number, onChangePage }) => {

    const onPaginationItemClick = () =>{
        onChangePage(number);
    };

    return (
          <li> <Link to = "" className = {currentPage === number? "active" : ""} onClick = {onPaginationItemClick}> {number}</Link> </li>
    );
};

PaginationItem.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    number : PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentPage : getCurrentPage(state),
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        onChangePage: (currentPage) => dispath(ActionCreators['FETCHED_DATA'](currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PaginationItem);
