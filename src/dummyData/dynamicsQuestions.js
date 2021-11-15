export const dynamicQuestions = {
  prescreenerId: 4,
  questions: [
    {
      questionText: "How are you today?",
      options: [
        { id: 222485, displayText: "Good" },
        { id: 351832, displayText: "Not good" },
      ],
      sortIndex: 1,
      isResponseRequired: true,
      controlType: "Radio Buttons",
    },
    {
      questionText: "What is your phone number?",
      options: null,
      sortIndex: 2,
      isResponseRequired: false,
      controlType: "Open Text",
    },
    {
      questionText: "Gender?",
      options: [
        { id: 243993, displayText: "Male" },
        { id: 359565, displayText: "Female" },
      ],
      sortIndex: 3,
      isResponseRequired: false,
      controlType: "Radio Buttons",
    },
    {
      questionText: "Date of birth?",
      options: null,
      sortIndex: 4,
      isResponseRequired: false,
      controlType: "Date",
    },
  ],
};
