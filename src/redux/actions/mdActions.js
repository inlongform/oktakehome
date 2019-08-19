/* eslint-disable max-len */
import { SUBMIT_FIELD, RESET_LIBS, IS_COMPLETE } from './types';

export const submitField = (templates, fieldAnswers) => ({ type: SUBMIT_FIELD, payload: { templates, fieldAnswers } });

export const setComplete = () => ({ type: IS_COMPLETE });

export const resetForm = () => ({ type: RESET_LIBS });
