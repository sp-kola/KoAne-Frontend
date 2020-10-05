import { DELETE_CUSTOMER, SET_CUSTOMERS, REMOVE_CUSTOMER, CUSTOMER_ADDED, START_ADD_CUSTOMER,SEARCH_CUSTOMER,STOP_SEARCH_CUSTOMER, LOGIN_CUSTOMER, LOGOUT_CUSTOMER, SELECT_CUSTOMERS, CLEAR_SELECT_CUSTOMERS } from '../actions/actionType'

const initialState = {
    customers: [],
    customerAdded: false, 
    searchCustomer: '',
    loggedCustomerCustomerId: '',
    loggedCustomerUserName: '',
    loggedCustomerFirstName: '',
    loggedCustomerLastName: '',
    loggedCustomerEmail: '',
    loggedCustomerContactNumber: '',
    loggedCustomerLastReportedLocation: [],
    loggedCustomerDeliveryAddresses: [],
    selectedCustomers: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CUSTOMERS:
            console.log('on customer action', action.customers)
            return {
                ...state,
                customers: action.customers
            }

        case SELECT_CUSTOMERS: {
            console.log('now: ',state.selectedCustomers, 'adding: ', action.customer)
            let temp = state.selectedCustomers.concat(action.customer)
            return{
                ...state,
                selectedCustomers: temp
            }
        }

        case CLEAR_SELECT_CUSTOMERS: {
            return{
                ...state,
                selectedCustomers: []
            }
        }    

        case LOGIN_CUSTOMER:{
            console.log('action in login', action.id)
            return{
                ...state,
                loggedCustomerCustomerId: action.id,
                loggedCustomerUserName: action.userName,
                loggedCustomerFirstName: action.firstName,
                loggedCustomerLastName: action.lastName,
                loggedCustomerEmail: action.email,
                loggedCustomerContactNumber: action.contactNo,
                loggedCustomerLastReportedLocation: action.lastReportedLocation,
                loggedCustomerDeliveryAddresses: action.deliveryAddresses,
            }
        }
        case LOGOUT_CUSTOMER:{
            return{
                ...state,
                loggedCustomerCustomerId: '',
                loggedCustomerUserName: '',
                loggedCustomerFirstName: '',
                loggedCustomerLastName: '',
                loggedCustomerEmail: '',
                loggedCustomerContactNumber: '',
                loggedCustomerLastReportedLocation: [],
                loggedCustomerDeliveryAddresses: [],
            }
        }    
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => {
                return customer.key !== action.key;
                })
            };    

        case SEARCH_CUSTOMER: {
            return{
                ...state,
                searchCustomer: action.val
            }
        }

        case STOP_SEARCH_CUSTOMER: {
            return{
                ...state,
                searchCustomer: ''
            }
        }

        case START_ADD_CUSTOMER: 
            return{
                ...state,
                customerAdded: false
            }    
        case CUSTOMER_ADDED: 
            return{
                ...state,
                customerAdded: true
            }    
        case DELETE_CUSTOMER:
            return{
                ...state,
                customers: state.customers.filter( (customer)  => {
                    return customer.key !== action.customerKey
                  }),
                selectedCustomer: null
            }
        default:
            return state;
    }
};

export default reducer;