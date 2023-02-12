const reactAppIp: string =
  process.env.REACT_APP_IP || "http://localhost:3001/graphql";

export const backendPath: string = `${reactAppIp}/graphql`;
