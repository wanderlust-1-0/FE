import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';

import {
  FETCHING_GUIDES_START,
  FETCHING_GUIDES_SUCCESS,
  FETCHING_GUIDES_FAILURE,
} from '../actions';

import {
  ADD_NEW_GUIDE_FETCHING,
  ADD_NEW_GUIDE_SUCCESS,
  ADD_NEW_GUIDE_FAILURE
} from '../actions';

import {
  FETCHING_TOURISTS_START,
  FETCHING_TOURISTS_SUCCESS,
  FETCHING_TOURISTS_FAILURE,
} from '../actions';

import {
  UPDATE_GUIDE_INFO_FETCHING,
  UPDATE_GUIDE_INFO_SUCCESS,
  UPDATE_GUIDE_INFO_FAILURE,
} from '../actions';

import {
  ADD_NEW_GUIDE_STORE_SUCCESS
} from '../actions';

const initialState = {
  guides: [],
  tourists: [],
  guide: {
    username: '',
    password: '',
    isTourGuide: false
  },
  signingUp: false,
  signingIn: false,
  updatingUser: false,
  fetchingAllGuides: false,
  signUpErr: '',
  signInErr: '',
  fetchAllGuidesErr: '',
  updatingUserErr: '',
  addingNewGuide: '',
  addingNewGuideErr: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FETCHING:
      return {
        ...state,
        signingUp: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: {
          ...action.payload,
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        signUpErr: action.payload,
      };
    case SIGNIN_FETCHING:
      return {
        ...state,
        signingIn: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        user: action.payload,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        signingIn: false,
        signUpErr: action.payload,
      };
    case ADD_NEW_GUIDE_FETCHING:
      return {
        ...state,
        addingNewGuide: true,
        addingNewGuideErr: ''
      }
    // case ADD_NEW_GUIDE_SUCCESS:
    //   console.log('add new user success: ', action.payload.username)
    //   return {
    //     ...state,
    //     guide: {
    //       username: action.payload.username,
    //       password: action.payload.password,
    //       isTourGuide: action.payload.isTourGuide
    //     },
    //     addingNewGuide: false,
    //     addingNewGuideErr: ''
    //   }
    case ADD_NEW_GUIDE_FAILURE: {
      return {
        ...state,
        addingNewGuide: false,
        addingNewGuideErr: ''
      }
    }
    case ADD_NEW_GUIDE_STORE_SUCCESS: {
      return {
        ...state,
        guide: action.payload
      }
    }
    case UPDATE_GUIDE_INFO_FETCHING:
      return {
        ...state,
        updatingUser: true,
        error: '',
      };
    case UPDATE_GUIDE_INFO_SUCCESS:
      return {
        ...state,
        guide: {
          ...action.payload,
        },
        updatingUser: false,
        error: '',
      };
    case UPDATE_GUIDE_INFO_FAILURE:
      return {
        ...state,
        updatingUser: false,
        error: action.payload,
      };
    case FETCHING_GUIDES_START:
      return {
        ...state,
        fetchingAllGuides: true,
      };
    case FETCHING_GUIDES_SUCCESS:
      console.log('GOT ALL GUIDES: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        guides: action.payload,
      };
    case FETCHING_GUIDES_FAILURE:
      console.log('GET GUIDES ERR: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        error: action.payload,
      };
    case FETCHING_TOURISTS_START:
      return {
        ...state,
        fetchingAllGuides: true,
      };
    case FETCHING_TOURISTS_SUCCESS:
      console.log('GOT ALL TOURISTS: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        guides: [...action.payload],
      };
    case FETCHING_TOURISTS_FAILURE:
      console.log('GET TOURISTS ERR: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
