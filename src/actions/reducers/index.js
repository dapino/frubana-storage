import { fromJS } from 'immutable'

const initialState = fromJS({
    data: {
        storages: [],
        products: [],
        organizedProducts: {
            products: []
        },
    }

})


const dataReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case "MOVE_PRODUCT" : {
            return state.setIn(['organizedProducts', 'products'], action.payload.organizedProducts)
        }
        case "SET_STORAGE_CATEGORIES" : {
            return state.setIn(['data', 'storages'], action.payload.categories)
        }

        default:
            return state
    }
}

export default dataReducer