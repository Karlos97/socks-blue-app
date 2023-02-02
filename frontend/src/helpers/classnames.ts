export const classnames = (o: Record<string, boolean>): string =>
  Object.keys(o)
    .filter((key) => o[key])
    .join(" ");
