import {
  SET_LANGUAGE,
} from './types';


const initialState = {
  lang: 'KR',
};


const language = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        lang: action.lang
      };
    default:
      return state;
  }
};

export default language;
