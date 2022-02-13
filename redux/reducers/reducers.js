import { combineReducers } from 'redux';

import { allRoomsReducer} from './roomReducers'

// import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

// import { checkBookingReducer, bookedDatesReducer, bookingsReducer, bookingDetailsReducer, bookingReducer } from './bookingReducers'

const reducer = combineReducers({
    allRooms: allRoomsReducer,
})

export default reducer