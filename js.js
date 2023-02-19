const qustions = [
    {
        'qus': 'Which of the following markup language',
        'a': 'html',
        'b': 'css',
        'c': 'java',
        'd': 'php',
        'currect':'a'
    },
    {
        'qus': 'How many passes does an insertion sort algorithm consist of?',
        'a': 'N',
        'b': 'N-1',
        'c': 'N+1',
        'd': 'N2',
        'currect':'b'
    },
    {
        'qus': 'Which of the following algorithm implementations is similar to that of an insertion sort?',
        'a': 'Binary heap',
        'b': 'Quick sort',
        'c': 'Merge sort',
        'd': 'Radix sort',
        'currect':'a'
    },
    {
        'qus': 'Who invented Java Programming?',
        'a': 'Guido van Rossum',
        'b': 'James Gosling',
        'c': 'Dennis Ritchie',
        'd': 'Bjarne Stroustrupphp',
        'currect':'a'
    },
    {
        'qus': 'Which statement is true about Java?',
        'a': 'Java is a sequence-dependent programming language',
        'b': 'Java is a sequence-dependent programming language',
        'c': 'Java is a platform-dependent programming language',
        'd': 'Java is a platform-independent programming language',
        'currect':'d'
    },
    {
        'qus': 'Which type of errors are flagged by Compilers ?',
        'a': 'Logical errors',
        'b': 'Syntax errors',
        'c': 'Both (A) and (B)',
        'd': 'None of these',
        'currect':'b'
    },
    {
        'qus': 'who is malu ram setting ?',
        'a': 'garvita',
        'b': 'leeza lodha',
        'c': 'mahima',
        'd': 'malu is single',
        'currect':'b'
    },  
    {
        'qus': 'Malu is aunty or not',
        'a': 'yes',
        'b': 'no',
        'c': 'randi',
        'd': '(a) & (c)',
        'currect':'d'
    },
    {
        'qus': 'who is best friend malu ?',
        'a': 'pankaj choudhary',
        'b': 'naresh thapa',
        'c': 'malu ka koi friend nhi h',
        'd': '(a) & (b)',
        'currect':'d'
    },
    {
        'qus': 'Malu rate ?',
        'a': '100-200',
        'b': '200-300',
        'c': '300-400',
        'd': 'free',
        'currect':'d'
    },

]

const qustionsName = document.getElementById('h2');
const option = document.querySelectorAll('.option')
const summit = document.getElementById('Summit');
const next = document.getElementById('next');
const prev = document.getElementById('Prev');
var qustionsNumber = 0;
const input = document.getElementsByTagName('input');
const inputOPtion=document.querySelectorAll('.inputOPtion');
const box=document.getElementById('box');

var right=0;
var wrong =0;

const total=qustions.length;

const reset = () => {
    inputOPtion.forEach((input)=>{
        input.checked=false;
    })
}
var quizeend=()=>{
    box.innerHTML=
    `
    <h3>ThankYou for participate our quiz.</h3>
    <h3>your score : ${right}/${total}</h3>
  

    `    
}
var summitQuize=()=>{
    const data=qustions[qustionsNumber].currect;
    const yourans=ans();
    if(data===yourans){
        right=right+1;
    }
    else{
        wrong=wrong+1;
    }
    qustionsNumber=qustionsNumber+1;
    loadQuestio();
    return;
}
const ans = () =>{
    let answer;
    inputOPtion.forEach((input)=>{
        if(input.checked){
            answer= input.value;
        }
        
    })

    return answer;
}
const loadQuestio = () => {
    if(qustionsNumber===total){
        return quizeend();
    }
    else{
    reset();
    qustionsName.innerHTML = `${qustionsNumber + 1} ) ` + qustions[qustionsNumber].qus;
    option[0].firstElementChild.nextElementSibling.innerHTML = qustions[qustionsNumber].a;
    option[1].firstElementChild.nextElementSibling.innerHTML = qustions[qustionsNumber].b;
    option[2].firstElementChild.nextElementSibling.innerHTML = qustions[qustionsNumber].c;
    option[3].firstElementChild.nextElementSibling.innerHTML = qustions[qustionsNumber].d;
    }
}




summit.addEventListener('click', () => {
    summitQuize();
    // if (qustionsNumber >= 4) {
    //     qustionsNumber = 0;
    //     loadQuestio();
    // }
    // else {
    //     qustionsNumber = qustionsNumber + 1;
    //     loadQuestio();
    // }
    
    // if(qustions[qustionsNumber].currect===ans()){
    //     right++;
    //     console.log(right);
    // }
    // else{
    //     wrong++;
    //     console.log(wrong);
    // }
})

next.addEventListener('click', () => {
    if(qustionsNumber===total){
        return quizeend();
    }
    else{
        qustionsNumber=qustionsNumber+1;
        loadQuestio();
    }
})


Prev.addEventListener('click', () => {
    if(qustionsNumber===total){
        return quizeend();
    }

    else {
        qustionsNumber = qustionsNumber - 1;
        loadQuestio();

    }
})


loadQuestio();