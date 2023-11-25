export const dateFormat = (date) => {
  const dateFormated = new Date(date).toLocaleDateString("fr-FR", {
    formatMatcher: "basic",
  });
  return dateFormated;
};
