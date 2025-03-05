const convertToPlainObject = (leanObj: any) => {
  for (const key in leanObj) {
    if (leanObj[key].toJSON && leanObj[key].toString) {
      leanObj[key] = leanObj[key].toString();
    }
  }

  return leanObj;
};

export default convertToPlainObject;
