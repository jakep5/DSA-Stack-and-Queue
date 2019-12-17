class _Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last !== null) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return
        }

        let node = this.first;

        this.first = this.first.next;

        if (node === this.last) {
            this.last = null;
        }

        return node.value;

    }
}

function peek(queue) {
    return queue.first;
}

function isEmpty(queue) {
    if (queue.first === null) {
        return true;
    } else {
        return false;
    }
}

function display(queue) {
    if (queue.first === null) {
        return 'Queue is empty';
    }

    let node = queue.first;

    let str = '';

    while (node) {
        str += ` ${node.data}`;
        node = node.next;
    }

    return str
}

const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

console.log(peek(starTrekQ))

console.log(isEmpty(starTrekQ))

console.log(display(starTrekQ))


//Implementing a queue using a stack


class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        
        if (this.top === null) {
            let node = new _Node(data, null);
            this.top = node;
            return this.top;
        }

        let node = new _Node(data, this.top)
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        console.log(this.top);
    }

    isEmpty() {
        if (this.top === null) {
            return true;
        }

        return false;
    }

    display() {

        let top = this.top

        while (top !== null) {
            console.log(top)

            top = top.next;
        }
    }
}

let stackOne = new Stack(); //Main stack, where values are pushed
let stackTwo = new Stack() //Secondary stack, where values swap order

function enqueue(data) {
    stackOne.push(data);
}

function dequeue() {
    if (stackTwo.length === 0) {
        if (stackOne.length === 0) {
            return 'Cannot dequeue because queue is empty';
        }
        while (stackOne.length > 0) {
            let item = stackOne.pop();

            stackTwo.push(item);
        }
    }
    return stackTwo.pop(); //Ensures the item that was added to stackOne first is returned first
}


//Square dance pairing

/* let stackMale = new Stack();
let stackFemale = new Stack();
let stackSpare = new Stack();

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    let names = read('names.txt').split('\n');
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }

    for(let i = 0; i < names.length; i++) {
        let dancer = names[i].split(' ');
        let sex = dancer[0];
        let name = dancer[1];
        if (sex == 'F') {
            males.enqueue(new Dancer(name, sex));
        }
        else {
            females.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    print('The dance partners are \n');
    while (females.top !== null && males.top !== null) {
        person = females.dequeue();
        putstr('Female dancer is: ' + person.name);
        person = males.dequeue();
        print('and the male dancer is ' + person.name);
    }
    print();
}

getDancers(stackMale, stackFemale);

dance(stackMale, stackFemale);
 */
//The orphidian bank 

let bankQueue = new Queue();

bankQueue.enqueue('Person1')
bankQueue.enqueue('Person2')
bankQueue.enqueue('Person3')
bankQueue.enqueue('Person4')
bankQueue.enqueue('Person5')
bankQueue.enqueue('Person6')
bankQueue.enqueue('Person7')
bankQueue.enqueue('Person8')
bankQueue.enqueue('Person9')
bankQueue.enqueue('Person10')

function random() {
    let num = Math.floor((Math.random() * 100) + 1);

    if (num <= 25) {
        return true;
    }

    return false;
}

function orphidianBank(queue) {
    if (queue.first == null) {
        return 'Queue is empty'
    }

    while (queue.last !== null) {
        if (random()) {
            queue.enqueue(queue.dequeue());
        } else {
            queue.dequeue();
        }

        console.log(queue)
    }
}


orphidianBank(bankQueue);

