function createStack() {
  var items = [];
  function push(item) {
    items.push(item);
  }
  function pop() {
    return items.pop();
  }
  function print() {
    console.log(items);
  }
  return [push, pop, print];
}

const [push, pop, print] = createStack();

push(3);
push(34);
push(35);
push(33);
push(34);
push(3115);
pop();
pop();
print();
