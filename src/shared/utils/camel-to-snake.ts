import momentTimezone from "moment-timezone";

export const camelToSnake = (data: object) => {
  return _processKeys(data, _snakelize);
};

const _snakelize = (key: string) => {
  const separator = "_";
  const split = /(?=[A-Z])/;

  return key.split(split).join(separator).toLowerCase();
};

function _processKeys(obj: any, processor: (data: string) => string): object {
  if (Array.isArray(obj)) {
    return obj.map((x) => _processKeys(x, processor));
  }

  if (
    typeof obj !== "object" ||
    momentTimezone.isMoment(obj) ||
    obj === null ||
    obj === undefined
  ) {
    return obj;
  }

  const result: any = {};
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (key.startsWith("_") || key === "entityType") {
      continue;
    }

    result[processor(key)] = _processKeys(obj[key], processor);
  }

  return result;
}
