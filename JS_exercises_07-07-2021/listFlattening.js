function flatten(arr) {
    return arr.reduce((acc, curr) => {
      return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
  }

  var lst = [[1,2],[1,[4,5],[3,44,[5]]],54];
  console.log(flatten(lst));
