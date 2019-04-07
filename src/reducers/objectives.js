import { SET_OBJECTIVE, SET_KEY_RESULT } from "../actions/objectives";

const initialState = {
  objective: {
    name: null,
    keyResults: []
  }
};

export default function polls(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case SET_OBJECTIVE:
      return {
        ...state,
        objective: {
          ...state.objective,
          name: action.payload
        }
      };
    case SET_KEY_RESULT:
      return {
        ...state,
        objective: {
          ...state.objective,
          keyResults: [...state.objective.keyResults, action.payload]
        }
      };
    default:
      return state;
  }
}
