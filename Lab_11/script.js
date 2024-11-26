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
    }
}

const anwser = poll.registerNewAnswer();

if(isNaN(anwser) && (anwser >= 0 || anwser <= 3)){
    console.log(anwser);
} else {
    alert("Câu trả lời không hợp lệ");
}
