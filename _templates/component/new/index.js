const capitalizeWords = (str) => str.replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

module.exports = {
  params: ({ args }) => {
    return { name: capitalizeWords(args.name) };
  },
};
