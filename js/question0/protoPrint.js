Array.prototype.print = function () {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    const elem = this[i];
    if (i===this.length-1) {
      result += elem;
    } else {
      result += `${elem},`;
    }
  }
  console.log(result);
};

[1,2].print();
['a','b','c'].print();
