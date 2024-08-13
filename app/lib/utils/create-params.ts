const createParams = (paramsObject: { [key: string]: any }): string => {
  return Object.entries(paramsObject)
    .filter(
      ([key, value]) => value !== undefined && value !== null && value !== ''
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
};

export { createParams };
