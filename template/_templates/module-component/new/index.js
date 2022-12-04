const capitalizeWords = (str) => str.replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

module.exports = {
  params: ({ args }) => {
    const [moduleName, componentName] = args.name.split("/");

    if (!moduleName) {
      throw new Error("No module name specified. Please specify this generator argument as 'moduleName/componentName'");
    }

    if (!componentName) {
      throw new Error("No component name specified. Please specify this generator argument as 'moduleName/componentName'");
    }

    return { moduleName, componentName: capitalizeWords(componentName) };
  },
};
