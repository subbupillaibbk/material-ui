import { dynamicQuestions } from "../dummyData/dynamicsQuestions";

export function getDynamicQuestions() {
  return Promise.resolve(dynamicQuestions);
}
