
const prompts = [
  "パソコンでのタイピングが速くなると、メール作成や資料作りにかかる時間が大幅に短縮されるため、仕事の効率が向上し、余った時間を学習や趣味に充てることができます。　日本の四季折々の風景は美しく、特に春の桜並木や秋の紅葉は多くの観光客を魅了しますが、地元の人々にとっては幼い頃から馴染みのある心温まる原風景でもあります。",
  "日本の四季折々の風景は美しく、特に春の桜並木や秋の紅葉は多くの観光客を魅了しますが、地元の人々にとっては幼い頃から馴染みのある心温まる原風景でもあります。　新しい言語を学習するとき、毎日少しずつ継続的に練習することが最も効果的であり、短期間に詰め込むよりも長期的に記憶が定着しやすくなると言われています。",
  "新しい言語を学習するとき、毎日少しずつ継続的に練習することが最も効果的であり、短期間に詰め込むよりも長期的に記憶が定着しやすくなると言われています。　オンライン会議では発言者以外がマイクをミュートにすることで、不要な雑音を減らし円滑なコミュニケーションを確保できるため、基本的なマナーとして覚えておきましょう。",
  "オンライン会議では発言者以外がマイクをミュートにすることで、不要な雑音を減らし円滑なコミュニケーションを確保できるため、基本的なマナーとして覚えておきましょう。　長距離を歩く前にはストレッチを行い、こまめに水分補給をすることで筋肉のけいれんや熱中症を防ぐことができ、結果として安全で快適なハイキングが楽しめます。",
  "長距離を歩く前にはストレッチを行い、こまめに水分補給をすることで筋肉のけいれんや熱中症を防ぐことができ、結果として安全で快適なハイキングが楽しめます。　図書館では静寂が保たれているため、集中して読書や勉強ができるだけでなく、膨大な蔵書の中から思いがけない本と出会う喜びを味わうことができるのが魅力です。",
  "図書館では静寂が保たれているため、集中して読書や勉強ができるだけでなく、膨大な蔵書の中から思いがけない本と出会う喜びを味わうことができるのが魅力です。　金融リテラシーを高めるには、まず家計簿をつけて収支を把握し、無駄な出費を減らしたうえで投資や保険の基礎知識を学ぶことが、将来の資産形成の第一歩となります。",
  "金融リテラシーを高めるには、まず家計簿をつけて収支を把握し、無駄な出費を減らしたうえで投資や保険の基礎知識を学ぶことが、将来の資産形成の第一歩となります。　運動不足を解消するために毎日一万歩を目標に歩く人が増えていますが、続けるコツは数字ばかり気にせず、景色を楽しんだり友人と一緒に歩いたりして達成感を味わうことです。",
  "運動不足を解消するために毎日一万歩を目標に歩く人が増えていますが、続けるコツは数字ばかり気にせず、景色を楽しんだり友人と一緒に歩いたりして達成感を味わうことです。　プログラミングの学習ではエラーと向き合うことが避けられませんが、エラーメッセージを検索して原因を調べ、自分で解決する過程こそがスキルアップにつながります。",
  "プログラミングの学習ではエラーと向き合うことが避けられませんが、エラーメッセージを検索して原因を調べ、自分で解決する過程こそがスキルアップにつながります。　環境に配慮したライフスタイルとして、マイボトルやエコバッグを持ち歩く習慣を身につければ、プラスチックごみを減らし、地球温暖化防止に貢献することができます。",
  "環境に配慮したライフスタイルとして、マイボトルやエコバッグを持ち歩く習慣を身につければ、プラスチックごみを減らし、地球温暖化防止に貢献することができます。　パソコンでのタイピングが速くなると、メール作成や資料作りにかかる時間が大幅に短縮されるため、仕事の効率が向上し、余った時間を学習や趣味に充てることができます。",
  "パソコンでのタイピングが速くなると、メール作成や資料作りにかかる時間が大幅に短縮されるため、仕事の効率が向上し、余った時間を学習や趣味に充てることができます。　日本の四季折々の風景は美しく、特に春の桜並木や秋の紅葉は多くの観光客を魅了しますが、地元の人々にとっては幼い頃から馴染みのある心温まる原風景でもあります。",
  "日本の四季折々の風景は美しく、特に春の桜並木や秋の紅葉は多くの観光客を魅了しますが、地元の人々にとっては幼い頃から馴染みのある心温まる原風景でもあります。　新しい言語を学習するとき、毎日少しずつ継続的に練習することが最も効果的であり、短期間に詰め込むよりも長期的に記憶が定着しやすくなると言われています。",
  "新しい言語を学習するとき、毎日少しずつ継続的に練習することが最も効果的であり、短期間に詰め込むよりも長期的に記憶が定着しやすくなると言われています。　オンライン会議では発言者以外がマイクをミュートにすることで、不要な雑音を減らし円滑なコミュニケーションを確保できるため、基本的なマナーとして覚えておきましょう。",
  "オンライン会議では発言者以外がマイクをミュートにすることで、不要な雑音を減らし円滑なコミュニケーションを確保できるため、基本的なマナーとして覚えておきましょう。　長距離を歩く前にはストレッチを行い、こまめに水分補給をすることで筋肉のけいれんや熱中症を防ぐことができ、結果として安全で快適なハイキングが楽しめます。",
  "長距離を歩く前にはストレッチを行い、こまめに水分補給をすることで筋肉のけいれんや熱中症を防ぐことができ、結果として安全で快適なハイキングが楽しめます。　図書館では静寂が保たれているため、集中して読書や勉強ができるだけでなく、膨大な蔵書の中から思いがけない本と出会う喜びを味わうことができるのが魅力です。",
  "図書館では静寂が保たれているため、集中して読書や勉強ができるだけでなく、膨大な蔵書の中から思いがけない本と出会う喜びを味わうことができるのが魅力です。　金融リテラシーを高めるには、まず家計簿をつけて収支を把握し、無駄な出費を減らしたうえで投資や保険の基礎知識を学ぶことが、将来の資産形成の第一歩となります。",
  "金融リテラシーを高めるには、まず家計簿をつけて収支を把握し、無駄な出費を減らしたうえで投資や保険の基礎知識を学ぶことが、将来の資産形成の第一歩となります。　運動不足を解消するために毎日一万歩を目標に歩く人が増えていますが、続けるコツは数字ばかり気にせず、景色を楽しんだり友人と一緒に歩いたりして達成感を味わうことです。",
  "運動不足を解消するために毎日一万歩を目標に歩く人が増えていますが、続けるコツは数字ばかり気にせず、景色を楽しんだり友人と一緒に歩いたりして達成感を味わうことです。　プログラミングの学習ではエラーと向き合うことが避けられませんが、エラーメッセージを検索して原因を調べ、自分で解決する過程こそがスキルアップにつながります。",
  "プログラミングの学習ではエラーと向き合うことが避けられませんが、エラーメッセージを検索して原因を調べ、自分で解決する過程こそがスキルアップにつながります。　環境に配慮したライフスタイルとして、マイボトルやエコバッグを持ち歩く習慣を身につければ、プラスチックごみを減らし、地球温暖化防止に貢献することができます。",
  "環境に配慮したライフスタイルとして、マイボトルやエコバッグを持ち歩く習慣を身につければ、プラスチックごみを減らし、地球温暖化防止に貢献することができます。　パソコンでのタイピングが速くなると、メール作成や資料作りにかかる時間が大幅に短縮されるため、仕事の効率が向上し、余った時間を学習や趣味に充てることができます。"
];

const promptEl   = document.getElementById('prompt');
const countdownEl= document.getElementById('countdown');
const timerEl    = document.getElementById('timer');
const inputEl    = document.getElementById('input');
const resultEl   = document.getElementById('result');
const startBtn   = document.getElementById('startBtn');
const timeSelect = document.getElementById('timeSelect');

let countdownInterval;
let timerInterval;
let startTime   = 0;
let limitSeconds= 60;
let currentPrompt = "";
let onInputHandler = null;

function startTest(){
  // リセット
  resultEl.textContent = '';
  inputEl.value = '';
  inputEl.disabled = true;
  timerEl.textContent = '';
  countdownEl.textContent = '';

  limitSeconds = parseInt(timeSelect.value,10);

  // ランダムお題
  currentPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  promptEl.textContent = currentPrompt;

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
      beginTyping();
    }
  },1000);
}

function beginTyping(){
  inputEl.disabled = false;
  inputEl.focus();
  startTime = Date.now();

  let secondsLeft = limitSeconds;
  timerEl.textContent = `残り ${secondsLeft} 秒`;
  timerInterval = setInterval(()=>{
    secondsLeft--;
    if(secondsLeft > 0){
      timerEl.textContent = `残り ${secondsLeft} 秒`;
    }else{
      clearInterval(timerInterval);
      finishTest();
    }
  },1000);

  // すでにハンドラがあれば解除
  if(onInputHandler){
    inputEl.removeEventListener('input', onInputHandler);
  }
  onInputHandler = () => {
    if(inputEl.value === currentPrompt){
      clearInterval(timerInterval);
      finishTest();
    }
  };
  inputEl.addEventListener('input', onInputHandler);
}

function finishTest(){
  inputEl.disabled = true;
  timerEl.textContent = '終了';
  countdownEl.textContent = '';

  if(onInputHandler){
    inputEl.removeEventListener('input', onInputHandler);
    onInputHandler = null;
  }

  const typed = inputEl.value;
  const correctChars = getCorrectCharCount(currentPrompt, typed);
  const elapsedSec = (Date.now() - startTime) / 1000;
  const accuracy = currentPrompt.length ? (correctChars / currentPrompt.length * 100).toFixed(1) : 0;
  const wpm = (elapsedSec > 0) ? ((correctChars / 5) / (elapsedSec / 60)).toFixed(1) : 0;

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
