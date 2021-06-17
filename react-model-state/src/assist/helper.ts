const isEqual = (a: any, b: any) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length, i;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!isEqual(a[i], b[i])) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (!isEqual(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};

interface ModelItem {
  namespace: string
  hook: () => void;
  deps?: string[];
}

const createModels = (models: ModelItem[]) => {
  let final: string[] = [];
  const obj: {[key: string]: any} = {}

  models.forEach((item, index) => {
    obj[item.namespace] = item.hook;
    if (item.deps && item.deps.length) {
      const itemDep = [...item.deps, item.namespace];

      const errorUse = [item.namespace];
      for (let i = 0; i <= index; i += 1) {
        if (models[i].deps?.filter(v => errorUse.includes(v)).length) {
          if (!errorUse.includes(models[i].namespace)) {
            errorUse.push(models[i].namespace);
            i = -1;
          }
        }
      }

      const errorList = item.deps.filter(v => errorUse.includes(v));
      if (errorList.length) {
        throw Error(
          'Models has Circular Dependencies',
        );
      }

      const intersection = final.filter(v => itemDep.includes(v));
      if (intersection.length) {
        const finalIndex = final.indexOf(intersection[0]);
        final = final
          .slice(0, finalIndex)
          .concat(itemDep)
          .concat(final.slice(finalIndex + 1));
      } else {
        final.push(...itemDep);
      }
    }
    if (!final.includes(item.namespace)) {
      final.push(item.namespace);
    }

  });
  const final_obj: { [key: string]: any } = {};
  final.forEach(item => {
    if(!final_obj[item]) {
      final_obj[item] = obj[item];
    }
  })

  console.log({final_obj})
  return final_obj
}

export { isEqual, createModels }
