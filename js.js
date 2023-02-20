const qustions = [
    {
        'qus': 'Which of the following markup language',
        'a': 'html',
        'b': 'css',
        'c': 'java',
        'd': 'php',
        'currect':'a',
        'quctionchack':'true'
    },
    {
        'qus': 'How many passes does an insertion sort algorithm consist of?',
        'a': 'N',
        'b': 'N-1',
        'c': 'N+1',
        'd': 'N2',
        'currect':'b',
        'quctionchack':'true'
    },
    {
        'qus': 'Which of the following algorithm implementations is similar to that of an insertion sort?',
        'a': 'Binary heap',
        'b': 'Quick sort',
        'c': 'Merge sort',
        'd': 'Radix sort',
        'currect':'a',
        'quctionchack':'true'
    },
    {
        'qus': 'Who invented Java Programming?',
        'a': 'Guido van Rossum',
        'b': 'James Gosling',
        'c': 'Dennis Ritchie',
        'd': 'Bjarne Stroustrupphp',
        'currect':'a',
        'quctionchack':'true'
    },
    {
        'qus': 'Which statement is true about Java?',
        'a': 'Java is a sequence-dependent programming language',
        'b': 'Java is a sequence-dependent programming language',
        'c': 'Java is a platform-dependent programming language',
        'd': 'Java is a platform-independent programming language',
        'currect':'d',
        'quctionchack':'true'
    },
    {
        'qus': 'Which type of errors are flagged by Compilers ?',
        'a': 'Logical errors',
        'b': 'Syntax errors',
        'c': 'Both (A) and (B)',
        'd': 'None of these',
        'currect':'b',
        'quctionchack':'true'
    },
    {
        'qus': 'who is malu ram setting ?',
        'a': 'garvita',
        'b': 'leeza lodha',
        'c': 'mahima',
        'd': 'malu is single',
        'currect':'b',
        'quctionchack':'true'
    },  
    {
        'qus': 'Malu is aunty or not',
        'a': 'yes',
        'b': 'no',
        'c': 'randi',
        'd': '(a) & (c)',
        'currect':'d',
        'quctionchack':'true'
    },
    {
        'qus': 'who is best friend malu ?',
        'a': 'pankaj choudhary',
        'b': 'naresh thapa',
        'c': 'malu ka koi friend nhi h',
        'd': '(a) & (b)',
        'currect':'d',
        'quctionchack':'true'
    },
    {
        'qus': 'Malu rate ?',
        'a': '100-200',
        'b': '200-300',
        'c': '300-400',
        'd': 'free',
        'currect':'d',
        'quctionchack':'true'
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
const showAnswer=document.getElementsByClassName('answer')[0];
const answercurrect=document.getElementById('answercurrect');
const ansbox=document.getElementsByClassName('ansbox')[0];
const ansboxanswer=document.getElementsByClassName('ansboxanswer')[0];
const cackanswer=document.getElementsByClassName('cackanswer')[0];
const okbtn=document.getElementsByClassName('okbtn')[0];
const rightQuestion=document.getElementById('rightQuestion');
const wrongQuestion=document.getElementById('wrongQuestion');

var right=0;
var wrong =0;
const total=qustions.length;

const reset = () => {
    summit.style.display='block';
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
        if(qustions[qustionsNumber].quctionchack=='true'){
            right=right+1;
        }
        
        // cackanswer.innerHTML=
        cackanswer.style.display='block';
        box.style.display='none';
        rightQuestion.innerHTML='your answer is currect';
    }
    else{
        wrong=wrong+1;
        cackanswer.style.display='block';
        box.style.display='none';
        rightQuestion.innerHTML='your answer is wrong';
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

okbtn.addEventListener('click',()=>{
    cackanswer.style.display='none';
    box.style.display='block';
})

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
    else if(qustionsNumber<=0){
        qustionsNumber=0;
        loadQuestio();
    }
    else {
        qustionsNumber = qustionsNumber - 1;
        loadQuestio();

    }
})


loadQuestio();



showAnswer.addEventListener('click',()=>{
    qustions[qustionsNumber].quctionchack='false';
    box.style.display='none';
    ansbox.style.display='block';
    answercurrect.innerHTML=`${qustions[qustionsNumber].currect} is currect answer`
    // summit.style.display='none';
})


ansboxanswer.addEventListener('click',()=>{
    ansbox.style.display='none';
    box.style.display='block';
})
