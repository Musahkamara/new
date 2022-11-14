const correctAnswers=['B', 'A', 'C','A','A', 'C','A','B', 'C','C'];

const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const show=document.querySelector('.show');
const list=document.querySelector('.hide');



form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.map((answer, index)=>{
        if(answer===correctAnswers[index]){
            score +=25;
           
        }   
    })
    
    window.scrollTo(0,0)
   
    result.classList.remove('d-none');

    let output =0;

    const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;

        if(output===score){
            clearInterval(timer);
        }else{
            output++
        }
    }, 5);
    //    showing correct answer button if the score is less than 100
       if(score<100){
        show.classList.remove('hide');
       }else{
        return null;
       }
    show.addEventListener('click',(e)=>{
         list.classList.toggle('list');
        })
})