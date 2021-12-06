const v8 = require("v8");

class ReferencesService {
  getCounterCopyingReferences(object) {
    return object;
  }

  getCounterWithoutCopyingReferences(object) {
    return { ...object };
  }

  getCounterWithoutDeepCopyingReferences(object) {
    return v8.deserialize(v8.serialize(object));
  }
}

module.exports = ReferencesService;
