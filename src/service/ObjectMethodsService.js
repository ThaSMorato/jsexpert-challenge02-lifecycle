class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    return {
      valueOf: () => rawObject.age,
      toString: () => rawObject.name,
    };
  }

  getEnhancedObject2(rawObject) {
    return {
      valueOf: () => `[name="${rawObject.name}",age=${rawObject.age}]`,
      toString: () => `[name="${rawObject.name}",age=${rawObject.age}]`,
    };
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    return {
      [Symbol.toPrimitive]: (coercionType) =>
        coercionType === "string"
          ? `[name="${rawObject.name}",age=${rawObject.age}]`
          : rawObject.age,
    };
  }
}

module.exports = ObjectMethodsService;
