import { FIELD_NAMES } from '../../data/constants';
import { SUBMIT_FIELD, IS_COMPLETE, RESET_LIBS } from '../actions/types';

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: [],
  templates: [],
  showComplete: false,
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const { fieldAnswers, templates } = action.payload;
      return {
        ...state,
        fieldAnswers: [...fieldAnswers],
        templates: [...templates],
      };
    }

    case IS_COMPLETE: {
      return { ...state, showComplete: true };
    }

    case RESET_LIBS: {
      return {
        ...state,
        showComplete: false,
        fieldAnswers: [],
        templates: [],
      };
    }

    default:
      return state;
  }
}
