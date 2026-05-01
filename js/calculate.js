// const display = document.getElementById("display");

// const calc = {
//     first: "",
//     second: "",
//     operator: "",

//     appendNumber(num) {
//         if(this.operator === "") {
//             this.first += num;
//             display.value = this.first;
//         } else {
//             this.second += num;
//             display.value = this.first + " " + this.operator + " " + this.second;
//         }
//     },

//     appendOperator(op) {
//         if (this.first === "") return;
//         if (this.operator !== "" && this.second !== "") {
//             return;
//         }

//         this.operator = op;
//         display.value = this.first + " " + this.operator;
//     },

//     clearDisplay() {
//         this.first = "";
//         this.second = "";
//         this.operator = "";
//         display.value = "";
//     },


//     deleteDisplay() {
//         if(this.operator === "") {
//             this.first = this.first.slice(0, -1);
//             display.value = this.first;
//         } else if(this.second !== "") {
//             this.second = this.second.slice(0, -1);
//             display.value = this.first + " " + this.operator + " " + this.second;
//         } else {
//             this.operator = "";
//             display.value = this.first;
//         }
//     },

//     calculate() {
//         if(this.first === "" || this.second === "") return;

//         let a = parseFloat(this.first);
//         let b = parseFloat(this.second);
//         let result = 0;

//         switch(this.operator) {
//             case "+":
//                 result = a + b;
//                 break;
//             case "-":
//                 result = a - b;
//                 break;
//             case "*":
//                 result = a * b;
//                 break;
//             case "/":
//                 if(b === 0) return;
//                 result = a / b;
//                 break;
//         }
//         result = parseFloat(result.toFixed(6));
//         display.value = result;

//         this.first = result.toString();
//         this.operator = "";
//         this.second = "";
//     },
// };

const display = document.getElementById("display");

const calc = {
    lastNum: [],      
    currentNum: "",   

    appendNumber(num) {
        this.currentNum += num;
        display.value = [...this.lastNum, this.currentNum].join(" ");
    },

    appendOperator(op) {
        if (this.currentNum === "" && this.lastNum.length === 0) return;

        if (this.currentNum === "") {
            this.lastNum[this.lastNum.length - 1] = op;
            display.value = this.lastNum.join(" ");
            return;
        }

        this.lastNum.push(this.currentNum, op);
        this.currentNum = "";
        display.value = this.lastNum.join(" ");
    },

    clearDisplay() {
        this.lastNum = [];
        this.currentNum = "";
        display.value = "";
    },

    deleteDisplay() {
        if (this.currentNum !== "") {
            this.currentNum = this.currentNum.slice(0, -1);
        } else if (this.lastNum.length > 0) {
            this.lastNum.pop(); 
            const last = this.lastNum.pop(); 
            this.currentNum = last ?? "";
        }
        display.value = [...this.lastNum, this.currentNum].join(" ");
    },

    calculate() {
        if (this.currentNum === "" && this.lastNum.length === 0) return;
        if (this.currentNum === "") return;
        const allNum = [...this.lastNum, this.currentNum];

        let result = parseFloat(allNum[0]);
        for (let i = 1; i < allNum.length; i += 2) {
            const op = allNum[i];
            const num = parseFloat(allNum[i + 1]);
            switch (op) {
                case "+": 
                    result += num; 
                    break;
                case "-": 
                    result -= num; 
                    break;
                case "*": 
                    result *= num; 
                    break;
                case "/":
                    if (num === 0) { display.value = "Error"; return; }
                    result /= num;
                    break;
            }
        }

        result = parseFloat(result.toFixed(5));
        display.value = result;
        this.lastNum = [];
        this.currentNum = result.toString();
    },
};