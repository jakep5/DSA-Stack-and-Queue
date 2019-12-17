class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

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

let starTrek = new Stack;

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

starTrek.peek()

console.log(starTrek.isEmpty())


starTrek.pop();
starTrek.pop();

starTrek.display();

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let stack = new Stack;

    let stringArray = s.split('')

    for (let i = 0; i <=stringArray.length; i++) {
        stack.push(stringArray[i-1])
    }

    let newSplitArray = [];

    [...s].forEach(c => {
        newSplitArray.push(stack.pop())
    })

    let result = true;

    for(let i = 0; i <=newSplitArray.length; i++) {
        if (newSplitArray[i] !== stringArray[i]) {
            result = false
        }
    }

  return result

}

console.log(isPalindrome('Hannaha'))

function parenthesisParser(exp) {
    let noSpaceExp = exp.replace(/\s/g, '');

    let expStack = new Stack;

    let openingArray = [];

    for (let i = 0; i <= noSpaceExp.length; i++) {
        if (noSpaceExp[i] === '(') {
            openingArray.push(noSpaceExp[i]);
        }
    }

    for (let i = 0; i < openingArray.length; i++) {
        expStack.push(openingArray[i])
    }

    let closingArray = [];

    for (let i = 0; i <= noSpaceExp.length; i++) {
        if (noSpaceExp[i] === ')') {
            closingArray.push(noSpaceExp[i]);
        }
    }

    let popArray = [];
    
    for (let i = 0; i < closingArray.length; i++) {
        popArray.push(expStack.pop());
    }

    if (expStack.top == null) {
        let result = true;
        return result;
    } else {
        let result = false;
        return result;
    }

    console.log(result)

}

parenthesisParser('2 + 2 - (4 + 4) - (5 - 5) + (4 + 3)')


function sortStack(stack) {
    let stackTwo = new Stack();

    while (stack.top !== null) {
        let tempInt = stack.pop();
    

        while (stackTwo.top !== null && stackTwo.top.data > tempInt) {
            stack.push(stackTwo.pop());
        }

        stackTwo.push(tmp);
    }

    console.log(stackTwo)
}


