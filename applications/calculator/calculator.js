window.onload = function() {


    var buttonIDs = ["C", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
    var buttonListners = [];

    var model = {
        a: 0,
        b: 0,

        MathProblem: {

            sign: "",
            doMath: function() {
                if (model.MathProblem.sign == '+') {
                    document.getElementById("answerBox").value = Number(model.a) + Number(model.b);
                } else if (model.MathProblem.sign == '-') {
                    document.getElementById("answerBox").value = Number(model.a) - Number(model.b);

                } else if (model.MathProblem.sign == '*') {
                    document.getElementById("answerBox").value = Number(model.a) * Number(model.b);

                } else if (model.MathProblem.sign == '/') {
                    document.getElementById("answerBox").value = Number(model.a) / Number(model.b);

                }


            },
        },

        storeA: function() {
            model.a = document.getElementById("answerBox").value;
            document.getElementById("answerBox").value = 0;
            controller.answerHTML = "";

        },


        clear: function() {
            a = 0;
            b = 0;
            document.getElementById("answerBox").value = 0;
            controller.answerHTML = "";
        }




    };



    var controller = {
        answerHTML: "",
        AnswerArray: [],
        makeNumber: function() {
            for (i = 0; i < this.AnswerArray.length; i++) {
                this.answerHTML = this.answerHTML + this.AnswerArray[i];
            };
            view.displayValue();
        },
        handleSymbol: function(x) {
            if (x == "+") {
                model.MathProblem.sign = "+";
                model.storeA();

            } else if (x == "-") {
                model.MathProblem.sign = "-";
                model.storeA();

            } else if (x == "*") {
                model.MathProblem.sign = "*";
                model.storeA();

            } else if (x == "/") {
                model.MathProblem.sign = "/";
                model.storeA();

            } else if (x == "C") {
                model.clear();
            };

        }
    };




    var view = {
        displayValue: function() {
            displayValue = controller.answerHTML;
            displayValue = displayValue.toString();;

            answer = document.getElementById("answerBox");
            answer.value = displayValue;
        }



    };

    function handleEqualsButton() {
        var answer = document.getElementById('answer');


    };

    function addEventListners() {
        equalSign = document.getElementById("=");
        //equalSign.addEventListners("click", handleEqualsButton());

        clear = document.getElementById('C');
        //clear.addEventListners("click", handleClear());
    };

    function addPush(x) {
        if (x == "=") {
            model.b = document.getElementById('answerBox').value
            model.MathProblem.doMath();
        } else if (isNaN(x) && x != ".") {
            controller.handleSymbol(x);
        } else {

            controller.AnswerArray.push(x);
            controller.makeNumber();
            controller.AnswerArray = [];
        }



    };


    function addNumberListnersList() {
        for (i = 0; i < buttonIDs.length; i++) {
            var buttonName = document.getElementById(buttonIDs[i]);
            buttonName.addEventListener('click', function() {

                addPush(this.id);

            });

            buttonListners.push(buttonName);

        };


    };

    addNumberListnersList();

};
