const display = document.getElementById("display");

const calc = {
    first: "",
    second: "",
    operator: "",

    appendNumber(num) {
        if(this.operator === "") {
            this.first += num;
            display.value = this.first;
        } else {
            this.second += num;
            display.value = this.first + " " + this.operator + " " + this.second;
        }
    },

    appendOperator(op) {
        if(this.first === "") return;

        this.operator = op;
        display.value = this.first + " " + this.operator;        
    },

    clearDisplay() {
        this.first = "";
        this.second = "";
        this.operator = "";
        display.value = "";
    },


    deleteDisplay() {
        if(this.operator === "") {
            this.first = this.first.slice(0, -1);
            display.value = this.first;
        } else if(this.second !== "") {
            this.second = this.second.slice(0, -1);
            display.value = this.first + " " + this.operator + " " + this.second;
        } else {
            this.operator = "";
            display.value = this.first;
        }
    },

    calculate() {
        if(this.first === "" || this.second === "") return;

        let a = parseFloat(this.first);
        let b = parseFloat(this.second);
        let result = 0;

        switch(this.operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                if(b === 0) return;
                result = a / b;
                break;
        }
        result = parseFloat(result.toFixed(6));
        display.value = result;

        this.first = result.toString();
        this.operator = "";
        this.second = "";
    },
};

