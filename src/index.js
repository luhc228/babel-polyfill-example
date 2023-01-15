const add = async (a, b) => {
  return Promise.resolve(a + b);
};

add(1, 2).then((res) => console.log(res));
