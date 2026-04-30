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
    }
};

