const getPath = (path, prefix = '') => {
  const regex = /([/\w-]+?)(\/index)?\.\w+/;
  return prefix + path.match(regex)[1];
};

export const globToArray = (glob) => {
  const array = Object.keys(glob).map((key) => {
    const path = getPath(key);
    const post = glob[key];
    return {
      key,
      path,
      ...post,
    };
  });

  return array;
};
