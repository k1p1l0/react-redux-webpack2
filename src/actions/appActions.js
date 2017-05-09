import { fetchNewValue } from "./../utils/fetchData";

export const RECEIVE_VALUE_PENDING = "RECEIVE_VALUE_PENDING";
export const RECEIVE_VALUE_FULFILLED = "RECEIVE_VALUE_FULFILLED";
export const RECEIVE_VALUE_REJECTED = "RECEIVE_VALUE_REJECTED";

const pendingValue = () => ({
  type: RECEIVE_VALUE_PENDING
});

const receiveValue = (result) => ({
  type: RECEIVE_VALUE_FULFILLED,
  payload: result
});

const rejectValue = (error) => ({
  type: RECEIVE_VALUE_REJECTED,
  payload: error
});

export const getNewValue = () => {
    return function (dispatch) {
        dispatch(pendingValue());

        fetchNewValue()
            .then((response) => {
                let {data} = response;

                dispatch(receiveValue(data));
            })
            .catch((error) => {
                console.log(error);

                dispatch(rejectValue(error));
            });
    };
};