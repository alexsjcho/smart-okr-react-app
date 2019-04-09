export const SET_OBJECTIVE = "SET_OBJECTIVE";
export const SET_KEY_RESULT = "SET_KEY_RESULT";
export const SET_WEEKLY_PLAN = "SET_WEEKLY_PLAN";
export const SET_WEEKLY_ACHIEVEMENT = "SET_WEEKLY_ACHIEVEMENT";
export const SET_WEEKLY_CHALLENGE = "SET_WEEKLY_CHALLENGE";

export const setObjective = ({ objective, category, date }) => ({
  type: SET_OBJECTIVE,
  payload: {
    objective,
    category,
    date
  }
});

export const setKeyResult = (keyResult, objectiveId) => ({
  type: SET_KEY_RESULT,
  payload: { keyResult, objectiveId }
});

export const setWeeklyPlan = weeklyPlan => ({
  type: SET_WEEKLY_PLAN,
  payload: weeklyPlan
});

export const setWeeklyAchievement = weeklyAchievement => ({
  type: SET_WEEKLY_ACHIEVEMENT,
  payload: weeklyAchievement
});

export const setWeeklyChallenge = weeklyChallenge => ({
  type: SET_WEEKLY_CHALLENGE,
  payload: weeklyChallenge
});
