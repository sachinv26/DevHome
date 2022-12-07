import axios from "axios";
import {
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  SET_CURRENT_USER,
} from "./types";

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Get current profile
export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

// Create Profile and redirect
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/api/profile", profileData)
    .then(() => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add experience
export const addExperience = (expData, history) => (dispatch) => {
  axios
    .post("/api/profile/experience", expData)
    .then(() => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add education
export const addEducation = (eduData, history) => (dispatch) => {
  axios
    .post("/api/profile/education", eduData)
    .then(() => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete experience
export const deleteExperience = (id) => (dispatch) => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`/api/profile/education/${id}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete Account & Profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? \nThis action can NOT be undone!")) {
    axios
      .delete("/api/profile")
      .then(() =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// export const getProfiles = () => async (dispatch) => {
//     dispatch({ type: CLEAR_PROFILE });

//     try {
//       const res = await api.get('/profile');

//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data
//       });
//     } catch (err) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status }
//       });
//     }
//   };
// Get all Profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
