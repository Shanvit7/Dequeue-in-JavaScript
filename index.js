// dequeue implmentation in java script 

class DQ{
  constructor(){
    this.box = [];
  }

  addFront(item){
    this.box.unshift(item);
  }

  removeFront(){
    this.box.shift();
  }
  addBack(item){
    this.box.push(item);
  }
  removeBack(){
    this.box.pop();
  }

  add(item){
    this.box.unshift(item);
    this.box.push(item);
  }
  remove(){
    this.box.shift();
    this.box.pop();
  }
}

obj = new DQ()

let num = [3,4,5,7,8];
let x;
for (x of num) {
   obj.add(x);
}
obj.add(9);
console.log(obj);
obj.remove();
console.log(obj);