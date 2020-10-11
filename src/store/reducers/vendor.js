import { VENDOR_ADDED, CLEAR_SELECT_VENDORS, DELETE_VENDOR, GET_VENDOR,LOGIN_VENDOR, LOGOUT_VENDOR, REMOVE_VENDOR, SEARCH_VENDOR, SELECT_VENDORS, SET_VENDORS, START_ADD_VENDOR, STOP_SEARCH_VENDOR, UPDATE_VENDOR, TOGGLE_VENDOR_STATUS } from '../actions/actionType'

const initialState = {
    vendors: [],
    selectedVendor: null,
    searchVendor: '',
    loggedVendorID: '',
    loggedVendorEmail: '',
    loggedVendorFirstName: '',
    loggedVendorLastName: '',
    loggedVendorContactNo: '',
    loggedVendorVisitingDates: [],
    loggedVendorVisitingPlaces: [],
    loaggedVendorNIC: '',
    loggedVendorBusinessName: '',
    loggedVendorBusinessAddress: '',
    loggedVendorVehicleNo: '',
    loggedVendorDeliveringStatus: false,
    loggedVendorStartTime: '',
    loggedVendorEndTime: '',
    loggedVendorBio: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VENDORS: 
            console.log('on setting vendors')
            return{
                ...state,
                vendors: action.vendors
            }
        
        case SELECT_VENDORS: {
            console.log('now selected ',action.vendor)
            return{
                ...state,
                selectedVendor: action.vendor
            }
        }

        case CLEAR_SELECT_VENDORS: {
            return {
                ...state,
                selectedVendor: null
            }
        }

        case LOGIN_VENDOR: {
            console.log('action in login', action.vendor.id)

            return {
                ...state,
                loggedVendorID: action.vendor.id,
                loggedVendorEmail: action.vendor.email,
                loggedVendorFirstName: action.vendor.firstName,
                loggedVendorLastName: action.vendor.lastName,
                loggedVendorContactNo: action.vendor.contactNo,
                loggedVendorVisitingDates: action.vendor.visitingDates,
                loggedVendorVisitingPlaces: action.vendor.visitingPlaces,
                loaggedVendorNIC: action.vendor.nic,
                loggedVendorBusinessName: action.vendor.businessName,
                loggedVendorBusinessAddress: action.vendor.businessAddress,
                loggedVendorVehicleNo: action.vendor.vehicleNo,
                loggedVendorDeliveringStatus: action.vendor.delivering,
                loggedVendorStartTime: action.vendor.startTime,
                loggedVendorEndTime: action.vendor.endTime,
                loggedVendorBio: action.vendor.bio
            }
        }

        case LOGOUT_VENDOR: {
            console.log('action in logout')

            return {
                ...state,
                loggedVendorID: '',
                loggedVendorEmail: '',
                loggedVendorFirstName: '',
                loggedVendorLastName: '',
                loggedVendorContactNo: '',
                loggedVendorVisitingDates: [],
                loggedVendorVisitingPlaces: [],
                loaggedVendorNIC: '',
                loggedVendorBusinessName: '',
                loggedVendorBusinessAddress: '',
                loggedVendorVehicleNo: '',
                loggedVendorDeliveringStatus: false,
                loggedVendorStartTime: '',
                loggedVendorEndTime: '',
                loggedVendorBio: ''
            }
        }

        case TOGGLE_VENDOR_STATUS: {
            console.log('toggling delivery status')
            let temp = state.loggedVendorDeliveringStatus
            return{
                ...state,
                loggedVendorDeliveringStatus: !temp
            }
        }

        case SEARCH_VENDOR: {
            return {
                ...state,
                serchVendor: action.val
            }
        }

        case STOP_SEARCH_VENDOR: {
            return{
                ...state,
                searchVendor: ''
            }
        }
        default:
            return state;
    }
}

export default reducer;