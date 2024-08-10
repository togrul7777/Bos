// document.addEventListener("DOMContentLoaded", () => {
//     const taskForm = document.getElementById("task-form");
//     const taskInput = document.getElementById("task-input");
//     const taskList = document.getElementById("task-list");

//     taskForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         addTask(taskInput.value);
//         taskInput.value = "";
//     });

//     function addTask(task) {
//         const li = document.createElement("li");
//         li.textContent = task;

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "remove";
//         deleteButton.addEventListener("click", () => {
//             taskList.removeChild(li);
//         });

//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
//     }
// });

// 1.ci sual


// 2.ci sual


// let images = ["https://yonhaber.com/wp-content/uploads/2021/03/fenerbahce-logo.jpg", "https://blog.aysefugenarda.com.tr/wp-content/uploads/2018/06/2470063-fenerbahce-sukru-saracoglu-stadi.jpg", "https://i.gazeteduvar.com.tr/2/1280/720/storage/files/images/2022/07/06/fenerbahce-bes-yildiz-q14O_cover.jpg", "https://cdn.ntvspor.net/e0c50f5b3026425cb19c160f61205085.jpg?crop=0,11,940,540&w=710&h=403&mode=crop", "https://images2.minutemediacdn.com/image/upload/c_crop,w_5865,h_3299,x_0,y_391/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_tr_international_web/01hra47g9pjp9sc019cg.jpg", "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2156000/2156813.jpg"]
// let mainElement = document.querySelector(".main").children[0]
// arrowPrev = document.querySelector(".prev")
// arrowNext = document.querySelector(".next")
// let n = 0
// mainElement.src = images[n]
// let elements = document.querySelectorAll(".element")

// elements.forEach((item, i) => {
//     item.children[0].src = images[i];
//     item.addEventListener("click", function () {
//         n = i
//         mainElement.src = images[n]

//     })
// })

// arrowNext.addEventListener("click", function () {
//     if (n < images.length - 1) {
//         n++
//     }
//     else {
//         n = 0
//     }
//     mainElement.src = images[n]
// })
// arrowPrev.addEventListener("click", function () {
//     if (n > 0) {
//         n--
//     }
//     else {
//         n = images.length - 1
//     }
//     mainElement.src = images[n]
// })

// 2.ci sual


//3.cu sual
// document.addEventListener("DOMContentLoaded", () => {
//     let filterButtons = document.querySelectorAll(".filter-button");
//     let portfolioItem = document.querySelectorAll(".portfolio-item");


//     filterButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             let filter = button.getAttribute("data-filter");

//             portfolioItem.forEach(item => {
//                 if (filter === "all" || item.getAttribute("data-category") === filter) {
//                     item.style.display = "block";

//                 } else {
//                     item.style.display = "none"
//                 }
//             })
//         })
//     })
// })

// 3.cu sual


// 4.cu sual
// document.addEventListener("DOMContentLoaded", function () {
//     let progress = document.getElementById("progress");
//     let percentText = document.getElementById("percent");
//     let increaseButton = document.getElementById("increase");
//     let decreaseButton = document.getElementById("decrease");
//     let progressBar = document.getElementById("progress-bar");
//     let volume = 79;

//     function updateVolume() {
//         progress.style.width = volume + "%";
//         percentText.textContent = volume + "%";
//     }

//     increaseButton.addEventListener("click", function () {
//         if (volume < 100) {
//             volume += 1;
//             updateVolume();
//         }
//     });

//     decreaseButton.addEventListener("click", function () {
//         if (volume > 0) {
//             volume -= 1;
//             updateVolume();
//         }
//     });

//     progressBar.addEventListener("click", function (event) {
//         let x = event.offsetX;
//         let width = progressBar.clientWidth;
//         volume = Math.round((x / width) * 100);
//         updateVolume();
//     });

//     updateVolume();
// });


// 5.ci sual
// pagination
// let items = 21;
// let count = 5;
// let currentPage = 0;

// for (let i = 1; i <= Math.ceil(items / count); i++) {
//     btns.innerHTML += `<button class="btn">${i}</button>`;
// }

// function getData() {
//     list.innerHTML = ""
//     for (let i = count * currentPage + 1; i <= (currentPage + 1) * count; i++) {
//         list.innerHTML += `<li> Item ${i}</li>`;
//         if (i == items) {
//             break;
//         }
//     }
//     document.querySelectorAll("#btns button").forEach(x => {
//         x.classList.remove("active")
//     })
//     document.querySelector(`#btns button:nth-child(${currentPage + 1})`).classList.add("active")

//     if (currentPage == Math.ceil(items / count-1)) {

//         nextBtn.disabled = true
//     } else {
//         nextBtn.disabled = false

//     }
//     if (currentPage == 0) {
//         prevBtn.disabled = true
//     } else {
//         prevBtn.disabled = false
// }
// }
//     getData()

//     document.querySelectorAll("#btns button").forEach((item, index) => {
//         item.addEventListener("click", function () {

//             currentPage = index
//             getData()
//         })
//     })
//     prevBtn.addEventListener("click", function () {
//         currentPage--
//         getData()



//     });

//     nextBtn.addEventListener("click", function () {
//         currentPage++
//         getData();

//     })


// 6.ci sual

// var questionBank = [
//     // Easy level questions
//     {
//       question: "5 %-i 2 olan ədədi tap?",
//       answers: {
//         A: "43",
//         B: "40",
//         C: "49",
//         D: "35",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "Math",
//       level: "Easy",
//     },
//     {
//       question: "(x+3)+(x+1)=12 Tənliyi həll edin?",
//       answers: {
//         A: "3",
//         B: "5",
//         C: "4",
//         D: "35",
//       },
//       correct: function () {
//         return this.answers.C;
//       },
//       subject: "Math",
//       level: "Easy",
//     },
//     {
//       question: "Sürəti 7 olan neçə düzgün olmayan kəsr var?",
//       answers: {
//         A: "7",
//         B: "32",
//         C: "4",
//         D: "6",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Easy",
//     },
//     {
//       question: "4%-i 5,6 olan ədədi tapın:",
//       answers: {
//         A: "48",
//         B: "400",
//         C: "49",
//         D: "140",
//       },
//       correct: function () {
//         return this.answers.D;
//       },
//       subject: "Math",
//       level: "Easy",
//     },
//     {
//       question: "0,1(3) sonsuz dövrü onluq kəsrini adi kəsrə çevirin.",
//       answers: {
//         A: "2/15",
//         B: "26/15",
//         C: "12/15",
//         D: "7/15",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Easy",
//     },
 
//     // Medium level questions
//     {
//       question:
//         "İki ədədin cəmi 5, fərqi 3-dür. Bu ədədlərin hasilini tapın?",
//       answers: {
//         A: "4",
//         B: "7",
//         C: "9",
//         D: "5",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Medium",
//     },
//     {
//       question: "X≠0 olarsa, 2x(x+y)=5y, x(x-y)=y olduqda x-i tapın?",
//       answers: {
//         A: "3/4",
//         B: "5",
//         C: "4/9",
//         D: "38",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Medium",
//     },
//     {
//       question:
//         "x+y=5, x-y=1 olduğuna görə, x²-y²+3x+3y ifadəsinin qiymətini tapın?",
//       answers: {
//         A: "10",
//         B: "20",
//         C: "30",
//         D: "40",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "Math",
//       level: "Medium",
//     },
//     {
//       question: "2x+y=5, x-3y=-5 tənliklər sistemindən x+y cəmini tapın?",
//       answers: {
//         A: "4",
//         B: "7",
//         C: "3",
//         D: "5",
//       },
//       correct: function () {
//         return this.answers.C;
//       },
//       subject: "Math",
//       level: "Medium",
//     },
//     {
//       question: "x+3=2(y-4), y-2=4x tənliklər sistemindən x-i tapın:",
//       answers: {
//         A: "1/15",
//         B: "2/15",
//         C: "3/15",
//         D: "4/15",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "Math",
//       level: "Medium",
//     },
 
//     // Hard level questions
//     {
//       question:
//         "a və b ədədləri üçün a+b = 7 və a-b = 3. a və b ədədlərini tapın?",
//       answers: {
//         A: "5 və 2",
//         B: "4 və 3",
//         C: "6 və 1",
//         D: "7 və 0",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Hard",
//     },
//     {
//       question:
//         "Bir dairənin sahəsi 25π kvadrat vahiddir. Bu dairənin radiusunu tapın.",
//       answers: {
//         A: "5",
//         B: "10",
//         C: "15",
//         D: "20",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Hard",
//     },
//     {
//       question: "Tənlik: x² + 6x + 9 = 0. x-i tapın.",
//       answers: {
//         A: "x = -3",
//         B: "x = 3",
//         C: "x = -9",
//         D: "x = 0",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Hard",
//     },
//     {
//       question:
//         "Bir çoxbucağın daxili bucaqlarının cəmi 1800 dərəcədir. Bu çoxbucağın tərəflərinin sayını tapın.",
//       answers: {
//         A: "10",
//         B: "12",
//         C: "8",
//         D: "14",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Hard",
//     },
//     {
//       question:
//         "Bir düzbucaqlının uzunluğu 12 cm və eni 5 cm-dir. Bu düzbucaqlının diaqonalının uzunluğunu tapın.",
//       answers: {
//         A: "13 cm",
//         B: "15 cm",
//         C: "17 cm",
//         D: "20 cm",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "Math",
//       level: "Hard",
//     },
//     // Easy level questions
//     {
//       question: "What is the past tense of 'go'?",
//       answers: {
//         A: "Went",
//         B: "Gone",
//         C: "Going",
//         D: "Goes",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Easy",
//     },
//     {
//       question: "Which word is a noun?",
//       answers: {
//         A: "Quickly",
//         B: "Happy",
//         C: "Book",
//         D: "Run",
//       },
//       correct: function () {
//         return this.answers.C;
//       },
//       subject: "English",
//       level: "Easy",
//     },
//     {
//       question: "What is the plural form of 'child'?",
//       answers: {
//         A: "Children",
//         B: "Childs",
//         C: "Childrens",
//         D: "Childes",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Easy",
//     },
//     {
//       question:
//         "How do you spell the word that means 'a place where people live'?",
//       answers: {
//         A: "Hous",
//         B: "House",
//         C: "Houce",
//         D: "Hause",
//       },
//       correct: function () {
//         return this.answers.C;
//       },
//       subject: "English",
//       level: "Easy",
//     },
//     {
//       question: "What is the opposite of 'happy'?",
//       answers: {
//         A: "Joyful",
//         B: "Sad",
//         C: "Excited",
//         D: "Angry",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "English",
//       level: "Easy",
//     },
 
//     // Medium level questions
//     {
//       question: "Choose the correct sentence.",
//       answers: {
//         A: "She don't like apples.",
//         B: "She doesn't like apples.",
//         C: "She didn't likes apples.",
//         D: "She doesn't likes apple.",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "English",
//       level: "Medium",
//     },
//     {
//       question: "What is the comparative form of 'good'?",
//       answers: {
//         A: "Better",
//         B: "Gooder",
//         C: "Best",
//         D: "Well",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Medium",
//     },
//     {
//       question:
//         "Identify the adverb in the sentence: 'She sings beautifully.'",
//       answers: {
//         A: "Sings",
//         B: "She",
//         C: "Beautifully",
//         D: "The",
//       },
//       correct: function () {
//         return this.answers.C;
//       },
//       subject: "English",
//       level: "Medium",
//     },
//     {
//       question:
//         "What is the correct form of the verb in the sentence: 'He _____ (to be) a teacher.'?",
//       answers: {
//         A: "Is",
//         B: "Are",
//         C: "Be",
//         D: "Was",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Medium",
//     },
//     {
//       question: "Which sentence is in the passive voice?",
//       answers: {
//         A: "The dog bit the man.",
//         B: "The man was bitten by the dog.",
//         C: "The man bites the dog.",
//         D: "The dog is biting the man.",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "English",
//       level: "Medium",
//     },
 
//     // Hard level questions
//     {
//       question: "Choose the sentence with correct punctuation.",
//       answers: {
//         A: "Where are you going; I am coming with you.",
//         B: "Where are you going? I am coming with you.",
//         C: "Where are you going I am coming with you.",
//         D: "Where are you going. I am coming with you?",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "English",
//       level: "Hard",
//     },
//     {
//       question:
//         "Which of the following sentences contains a misplaced modifier?",
//       answers: {
//         A: "Running to catch the bus, the rain started to fall.",
//         B: "The rain started to fall while I was running to catch the bus.",
//         C: "While running to catch the bus, I got wet from the rain.",
//         D: "I got wet from the rain while running to catch the bus.",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Hard",
//     },
//     {
//       question:
//         "Identify the error in the sentence: 'She has less books than her brother.'",
//       answers: {
//         A: "Less should be replaced with fewer.",
//         B: "Books should be replaced with book.",
//         C: "Than should be replaced with then.",
//         D: "Her should be replaced with theirs.",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Hard",
//     },
//     {
//       question:
//         "What is the correct form of the verb in the sentence: 'If he _____ (to study) harder, he would have passed the exam.'?",
//       answers: {
//         A: "Had studied",
//         B: "Studies",
//         C: "Studied",
//         D: "Was studying",
//       },
//       correct: function () {
//         return this.answers.A;
//       },
//       subject: "English",
//       level: "Hard",
//     },
//     {
//       question: "Which sentence correctly uses the subjunctive mood?",
//       answers: {
//         A: "I wish she was here.",
//         B: "If I were you, I would accept the offer.",
//         C: "It is important that he is on time.",
//         D: "She acts as if she was the boss.",
//       },
//       correct: function () {
//         return this.answers.B;
//       },
//       subject: "English",
//       level: "Hard",
//     },
//   ];
//  let filterSubject,filterLevel;
//  document.querySelectorAll(".tabOne").forEach(btn=>{
//    btn.addEventListener("click",function(){
//      document.querySelector(".tabBoxOne").style.display="none"
//      document.querySelector(".tabBoxTwo").style.display="block"
//      filterSubject=questionBank.filter(s=>s.subject.toLowerCase()===btn.innerText.toLowerCase())    
//    })
//  })
//  document.querySelectorAll(".tabTwo").forEach(btn=>{
//    btn.addEventListener("click",function(){
//      document.querySelector(".tabBoxTwo").style.display="none"
//      document.querySelector(".quizBoxOne").style.display="block"
//      filterLevel=filterSubject.filter(s=>s.level.toLowerCase()===btn.innerText.toLowerCase())
//      getData(0)
//    })
//  })
 
//  // let currentIndex;
//  function page(index){
//    // currentIndex=index
//  getData(index)
//  }
//  let correct_count=0,wrong_count=0;
//  let cavablar=document.querySelector(".optionsBoxOne")
//  function getData(index){
//    document.querySelector(".questionBoxOne").innerText=filterLevel[index].question
//    cavablar.innerHTML=`
//                            <div class="optionBoxOne">${filterLevel[index].answers.A}</div>
//                            <div class="optionBoxOne">${filterLevel[index].answers.B}</div>   
//                            <div class="optionBoxOne">${filterLevel[index].answers.C}</div>
//                            <div class="optionBoxOne">${filterLevel[index].answers.D}</div>`
 
//          cavablar.querySelectorAll(".optionBoxOne").forEach(c=>{
//            c.addEventListener("click",function(){
//              cavablar.querySelectorAll(".optionBoxOne").forEach(x=>{
//                if(x.innerText==filterLevel[index].correct()){
//                  x.style.backgroundColor="green"
//                }
//                x.style.pointerEvents="none"
//              })
//              if(c.innerText!=filterLevel[index].correct()){
//                c.style.backgroundColor="red"
//                wrong_count++
//              }else{
//                correct_count++
//              }
//            })
//          })
//          document.querySelector(".pageBox").innerHTML=""
//          for(let i=0; i<filterLevel.length; i++){
//            document.querySelector(".pageBox").innerHTML+=` <div class="pageListBox" data-index=${i} onclick="page(${i})">${i+1}</div>`
//          }
//          document.querySelector(".pageBox").children[index].classList.add("btn-active")
//  }
 
//  document.querySelector(".arrowLeft").addEventListener("click",function(){
//    let activebtn=document.querySelector(".pageBox .btn-active")
//    let index=activebtn.getAttribute("data-index")
//    if(index<=0){
//      return
//    }
//  getData((+index-1))
//  })
  
 
//  document.querySelector(".arrowRight").addEventListener("click",function(){
//    let activebtn=document.querySelector(".pageBox .btn-active")
//    let index=activebtn.getAttribute("data-index")
//    if(index>=filterLevel.length-1){
//      resultsContainer.style.display="block"
//        document.querySelector(".quizBoxOne").style.display="none"
//        console.log(correct_count,"c");
//        console.log(wrong_count,"w");
//        correct.innerText=correct_count
//        wrong.innerText=wrong_count
//        blank.innerText=filterLevel.length-(wrong_count+correct_count)
 
//        result.innerText=(correct_count/filterLevel.length)*100+"%"
       
       
//    }else{
//      getData((+index+1))
//    }
//  })
  
 
 
 