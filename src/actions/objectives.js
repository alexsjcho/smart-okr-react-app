export const SET_OBJECTIVE = "SET_OBJECTIVE";
export const DELETE_OBJECTIVE = "DELETE_OBJECTIVE";
export const SET_KEY_RESULT = "SET_KEY_RESULT";
export const DELETE_KEYRESULT = "DELETE_KEYRESULT";
export const SET_WEEKLY_PLAN = "SET_WEEKLY_PLAN";
export const DELETE_WEEKLY_PLAN = "DELETE_WEEKLY_PLAN";
export const SET_WEEKLY_ACHIEVEMENT = "SET_WEEKLY_ACHIEVEMENT";
export const DELETE_WEEKLY_ACHIEVEMENT = "DELETE_WEEKLY_ACHIEVEMENT";
export const SET_WEEKLY_CHALLENGE = "SET_WEEKLY_CHALLENGE";
export const DELETE_WEEKLY_CHALLENGE = "DELETE_WEEKLY_CHALLENGE";

export const setObjective = ({ objective, category, date }) => ({
  type: SET_OBJECTIVE,
  payload: {
    objective,
    category,
    date
  }
});

export const deleteObjective = index => ({
  type: DELETE_OBJECTIVE,
  payload: {
    index
  }
});

export const setKeyResult = (keyResult, objectiveId, tool) => ({
  type: SET_KEY_RESULT,
  payload: { keyResult, objectiveId, tool }
});

export const deleteKeyResult = (keyResultId, objectiveId) => ({
  type: DELETE_KEYRESULT,
  payload: {
    keyResultId,
    objectiveId
  }
});

export const setWeeklyPlan = (weeklyPlan, index) => ({
  type: SET_WEEKLY_PLAN,
  payload: {
    index,
    weeklyPlan
  }
});

export const deleteWeeklyPlan = (objectiveId, planId) => ({
  type: DELETE_WEEKLY_PLAN,
  payload: {
    planId,
    objectiveId
  }
});

export const setWeeklyAchievement = (weeklyAchievement, index) => ({
  type: SET_WEEKLY_ACHIEVEMENT,
  payload: { index, weeklyAchievement }
});

export const deleteWeeklyAchievement = (objectiveId, achievementId) => ({
  type: DELETE_WEEKLY_ACHIEVEMENT,
  payload: {
    achievementId,
    objectiveId
  }
});

export const setWeeklyChallenge = (weeklyChallenge, index) => ({
  type: SET_WEEKLY_CHALLENGE,
  payload: {
    index,
    weeklyChallenge
  }
});

export const deleteWeeklyChallenge = (objectiveId, challengeId) => ({
  type: DELETE_WEEKLY_CHALLENGE,
  payload: {
    challengeId,
    objectiveId
  }
});
