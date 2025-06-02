const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = 12;
let btnStart = document.querySelector('.btnStart');
let btnShare = document.querySelector('.btnShare');
let select = [0,0,0,0,0,0,0,0,0];

function calResult() {

    let result = select.indexOf(Math.max(...select));
    return result;
}

function addAnswer(answerText, qIdx, idx){
    let a = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('.fadeIn');

    a.appendChild(answer);
    
    answer.innerHTML = answerText;

    answer.addEventListener('click', () => {
        let children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = 'fadeOut .5s';
        }
        setTimeout(() => {
            let target = qnaList[qIdx].a[idx].type;
            for(let i = 0; i < target.length; i++){
                select[target[i]] += 1;
            }
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
        
    }, false);
}
function goNext(qIdx){ 
    let q = document.querySelector('.qBox');
    let status = document.querySelector('.statusBar');

    if(qIdx === endPoint){
        goResult();
        return;
    }

    q.innerHTML = qnaList[qIdx].q;
    
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i)
    }
    
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function setResult() {
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;
    
    let resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');

    let imgURL = 'img/image-' + point + '.jpg';
    resultImg.src = imgURL;
    resultImg.alt = point;
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation = 'fadeOut 1s';
    setTimeout(() => {
        result.style.WebkitAnimation = 'fadeIn 1s';
        setTimeout(() => {
            qna.style.display = 'none';
            result.style.display = 'block';
        }, 450)
    })

    setResult();
}

function begin(){
    main.style.WebkitAnimation = 'fadeOut 1s';
    //main.style.Animation = 'fadeOut 1s';
    setTimeout(() => {
        qna.style.WebkitAnimation = 'fadeIn 1s';
        //qna.style.Animation = 'fadeIn 1s';
        setTimeout(() => {
            main.style.display = 'none';
            qna.style.display = 'block';
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450)
}


btnStart.addEventListener('click', () => {
    begin();
})

