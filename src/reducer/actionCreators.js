import { actionType } from "../consts";

const actionCreators = {
    CHANGE_ACTIVE_POPUP: (currentActivePupupData) => {
        return {
            type: actionType.CHANGE_ACTIVE_POPUP,
            payload: currentActivePupupData
        }
    },
    PUSHED_DATA: (data, popup) => {
        return {
            type: actionType.PUSHED_DATA,
            payload: {
                data: data,
                popup: popup,
            },
        }
    },
    FETCHED_DATA: (currentPage) => {
        return {
            type: actionType.FETCHED_DATA,
            payload: currentPage,
        }
    },
    LOAD_DATA: (number) => {
        return {
            type: actionType.LOAD_DATA,
            payload: number,
        }
    },
    LOAD_DATA_SUCCEEDED: (users) => {
        return {
            type: actionType.LOAD_DATA_SUCCEEDED,
            payload: users,
        }
    },
    LOAD_DATA_FAILED: (error) => {
        return {
            type: actionType.LOAD_DATA_FAILED,
            payload: error,
        }
    },
    LOAD_TOTAL_PAGES: (pagesList) => {
        return {
            type: actionType.LOAD_TOTAL_PAGES,
            payload: pagesList,
        }
    }
};

export default actionCreators;