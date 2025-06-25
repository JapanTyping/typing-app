const prompts = [
  "パソコンのキーボードで文字を素早く正確に打つには、まず母音の a i u e o を徹底的に覚えることが上達への近道だと多くの指導者が説明しています。",
  "自分が暗記している好きな歌の歌詞や地元の地名をタイピングの素材にすると、退屈せずに練習を継続できるのでおすすめです。",
  "タイマーを六十秒に設定し、一分間でどれだけ正確にタイプできるかを毎日記録していくと、自然とスピードの伸びを実感できます。",
  "エンターキーを押すたびに自分の成長を確認し、小さな達成感を積み重ねることがモチベーションの維持につながります。",
  "正しい指のホームポジションを体に覚えさせるためには、視線をキーボードから離してモニターだけを見る習慣をつけることが重要です。"
];

const promptEl   = document.getElementById('prompt');
const countdownEl= document.getElementById('countdown');
const timerEl    = document.getElementById('timer');
const inputEl    = document.getElementById('input');
const resultEl   = document.getElementById('result');
const startBtn   = document.getElementById('startBtn');

let countdownInterval;
let timerInterval;

function startTest(){
  // 初期化
  resultEl.textContent = '';
  inputEl.value = '';
  inputEl.disabled = true;
  timerEl.textContent = '';
  countdownEl.textContent = '';

  // ランダムにお題をセット
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  promptEl.textContent = prompt;

  // 3秒カウントダウン
  let count = 3;
  countdownEl.textContent = count;
  countdownInterval = setInterval(()=>{
    count--;
    if(count > 0){
      countdownEl.textContent = count;
    }else{
      clearInterval(countdownInterval);
      countdownEl.textContent = 'スタート!';
      beginTyping(prompt);
    }
  },1000);
}

function beginTyping(prompt){
  // テキストエリア有効化
  inputEl.disabled = false;
  inputEl.focus();
  // 1分タイマー
  let seconds = 60;
  timerEl.textContent = `残り ${seconds} 秒`;
  timerInterval = setInterval(()=>{
    seconds--;
    if(seconds > 0){
      timerEl.textContent = `残り ${seconds} 秒`;
    }else{
      clearInterval(timerInterval);
      finishTest(prompt);
    }
  },1000);
}

function finishTest(prompt){
  inputEl.disabled = true;
  timerEl.textContent = '終了';
  countdownEl.textContent = '';

  const typed = inputEl.value;
  const correctChars = getCorrectCharCount(prompt, typed);
  const accuracy = prompt.length ? (correctChars / prompt.length * 100).toFixed(1) : 0;
  const wpm = ((correctChars / 5)).toFixed(1); // 1分換算

  resultEl.innerHTML = `正確さ: ${accuracy}% | WPM: ${wpm}`;
  startBtn.disabled = false;
}

function getCorrectCharCount(prompt, typed){
  let count = 0;
  const len = Math.min(prompt.length, typed.length);
  for(let i=0;i<len;i++){
    if(prompt[i] === typed[i]) count++;
  }
  return count;
}

startBtn.addEventListener('click', ()=>{
  startBtn.disabled = true;
  startTest();
});
