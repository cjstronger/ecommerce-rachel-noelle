export const formData = [
  {
    title: "Lets get that name there buster",
    description:
      "Please fill in the form with your first name, last name and email that you would like to receive future inquries.",
    inputs: [
      { label: "First Name", placeholder: "Your first name", name: "first" },
      { label: "Last Name", placeholder: "Your first name", name: "last" },
      { label: "Email", placeholder: "Your email", name: "email" },
    ],
  },
  {
    title: "Dying ain't much of a living, or so I heard",
    description:
      "Where can Rachel help with your current issues and or trials/tribulations?",
    textAreas: [
      {
        label: "What do you think Rachel can help you accomplish?",
        placeholder:
          "In 69,420 words or less list areas in your life where Rachel may be able to come in and rescue your damnation.",
        name: "accomplish",
      },
      {
        label: "Where are you feeling stuck stepsis?",
        placeholder:
          "In how many times you reached for the reeses peanut butter cups at the local target or less list ways in which life just sucks a fat load, if you catch my drift.",
        name: "stuck",
      },
    ],
  },
];
