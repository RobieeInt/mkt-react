import React, { createContext, useContext, useReducer } from 'react';

const Context = createContext();
const initialState = {
	cart: {}
};

export function useGlobalContext() {
	const [state, dispatch] = useContext(Context);

	if (!state || !dispatch) {
		throw new Error('useGlobalContext harus pakai Provider');
	}
	return { state, dispatch };
}

function Reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			console.log(action);
			return {
				...state,
				cart: state.cart
					? {
							...state.cart,
							[action.item.id]: action.item
					  }
					: { [action.item.id]: action.item }
			};

		default: {
			throw new Error(`Action Type gadikenalin ${action.type}`);
		}
	}
}

export default function Provider(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return <Context.Provider value={[state, dispatch]} {...props} />;
}