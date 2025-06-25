
const prompts = [
  "今日はいい天気ですね。散歩に出かけたくなります。",
  "明日の会議資料をまだ作っていないので、今夜頑張ります。",
  "コーヒーの香りが部屋中に広がって幸せな気分になります。",
  "早寝早起きを習慣にすると、一日がとても長く感じます。",
  "新幹線で東京から大阪まで約二時間半で到着します。",
  "桜の花が満開になる季節は写真を撮る人で賑わいます。",
  "パソコンのキーボードは正しい姿勢で打つことが大切です。",
  "好きな歌の歌詞をタイピングするとリズム良く練習できます。",
  "信州のりんごは甘みと酸味のバランスが絶妙です。",
  "雨上がりの虹を見ると、子どものようにワクワクします。",
  "図書館で静かに本を読む時間が心を落ち着かせてくれます。",
  "週末は友達とオンラインゲームをしてリフレッシュしています。",
  "料理をするときはまず材料を全部そろえてから始めます。",
  "富士山に登るときは十分な装備と体力が必要です。",
  "手紙を書くのは時間がかかりますが気持ちが伝わりやすいです。",
  "犬の散歩を日課にすると運動不足が解消されます。",
  "秋の夜長は読書に最適な季節と言われています。",
  "緑茶にはカテキンが含まれており健康に良いとされています。",
  "新しい言語を学ぶには毎日の継続が一番の近道です。",
  "電車の中では周りの人の迷惑にならないように静かにしましょう。",
  "スポーツをするときは準備運動を忘れないようにしてください。",
  "祭りの太鼓の音を聞くと心が躍ります。",
  "北海道の夏は本州よりも涼しく過ごしやすいです。",
  "早口言葉を練習すると滑舌が良くなると言われています。",
  "メールの件名は内容が分かるように具体的に書きましょう。",
  "観光地では地域限定のグッズを探すのが楽しみです。",
  "道路を横断するときは左右を確認してから渡りましょう。",
  "映画のエンドロールまで見ると制作スタッフの努力が感じられます。",
  "毎朝ストレッチをすると体が軽く感じられます。",
  "落ち込んだときは好きな音楽を聞くと元気が出ます。"
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
  resultEl.textContent = '';
  inputEl.value = '';
  inputEl.disabled = true;
  timerEl.textContent = '';
  countdownEl.textContent = '';

  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  promptEl.textContent = prompt;

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
  inputEl.disabled = false;
  inputEl.focus();
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
  const wpm = ((correctChars / 5)).toFixed(1);

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
