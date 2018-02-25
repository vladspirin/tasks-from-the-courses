let human = {
  name: "Nick",
  age: 28
};
let worker = {
  // name: "Nick",
  // age: 28,
  salary: 300
};

worker.__proto__ = human; // У объекта worker есть свойство которое ссылается на объект human 
// console.log(human.name);
console.log(worker.name);

console.log(worker);

// Посмотреть основные пять свойств алгоритма

// ---------------------------------------------------------------------------------------------

let humanWorker = {
  company: "Google",
  address: "st 12"
}
// это конструктор, он всегда именуется с большой буквы
function Worker(name) {
  this.name = name
  // this.__proto__ = humanWorker;
}

Worker.prototype = humanWorker;

let worker1 = new Worker ('Den');
let worker2 = new Worker ('Roby');

// равносильная запись
// worker1 = {};
// worker1.name = Den;
// worker1.__proto__ = humanWorker;


console.log(worker1);
console.log(worker1.company);
console.log(worker2);

// ---------------------------------------------------------------------------------------------

// родительский конструктор
function WorkerId(name, age) {
  this.name = name,
  this.age = age;
}

WorkerId.prototype.writeId = function () { 
  console.log(this.name);
}

// дочерний конструктор
function WorkerDep(name) {
  // с помощью apply() делаем явную привязку чтоб не потерять this
  WorkerId.apply(this, arguments);
}
// связываем с родительским конструктором
WorkerDep.prototype = Object.create(WorkerId.prototype);
WorkerDep.prototype.constructor = WorkerDep;

WorkerDep.prototype.writeId = function () {
  WorkerId.prototype.writeId.apply(this);
  console.log(this.name + " - WorkerDep");
}

let worker3 = new WorkerDep ('Vasy');

worker3.writeId(); 

// С массивом все также как и с объектом 
// При создании у него уже будет автоматически создан прототип
let a = [1, 2];
console.log(a);