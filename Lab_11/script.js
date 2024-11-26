const btnAnswer = getNodeByClass("button");
const poll = {
    question: "What is your favourite programming language? ",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    numberOfVotes: new Array(4).fill(0),
    registerNewAnswer : function () {
        let str = this.question;
        this.options.forEach(element => {
            str += '\n' + element;
        });
        return parseInt(prompt(str));
    },
    displayResults : function (type = 'array') {
        if(type == 'array'){
            console.log(this.numberOfVotes);
        } else if (type == 'string') {
            console.log(`Poll results are ${this.numberOfVotes}`);
        }
    }
}

btnAnswer.addEventListener('click', ()=>{
    const anwser = poll.registerNewAnswer();
    if(!isNaN(anwser) && (0 <= anwser && anwser <= 3)){
        poll.numberOfVotes[anwser]++;
    } else {
        alert("Câu trả lời không hợp lệ");
    }
    poll.displayResults();
    poll.displayResults('string');
})

