const capitalizeWords = (str) => str.replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: "input",
          name: "typeOfHook",
          message: "What is the type of hook? (query/mutation)",
        },
        {
          type: "input",
          name: "apiHookName",
          message: "What is the API hook name?",
        },
      ])
      .then(({ typeOfHook, apiHookName }) => {
        const fileName = typeOfHook === "query" ? `use${capitalizeWords(apiHookName)}Query` : `use${capitalizeWords(apiHookName)}Mutation`;
        return { typeOfHook, fileName, name: apiHookName };
      });
  },
};
