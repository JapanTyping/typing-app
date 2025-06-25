
const prompts = [
  "パソコンでのタイピングが速くなると、メール作成や資料作りにかかる時間が大幅に短縮されるため、仕事の効率が向上し、余った時間を学習や趣味に充てることができます。",
  "日本の四季折々の風景は美しく、特に春の桜並木や秋の紅葉は多くの観光客を魅了しますが、地元の人々にとっては幼い頃から馴染みのある心温まる原風景でもあります。",
  "新しい言語を学習するとき、毎日少しずつ継続的に練習することが最も効果的であり、短期間に詰め込むよりも長期的に記憶が定着しやすくなると言われています。",
  "オンライン会議では発言者以外がマイクをミュートにすることで、不要な雑音を減らし円滑なコミュニケーションを確保できるため、基本的なマナーとして覚えておきましょう。",
  "長距離を歩く前にはストレッチを行い、こまめに水分補給をすることで筋肉のけいれんや熱中症を防ぐことができ、結果として安全で快適なハイキングが楽しめます。",
  "図書館では静寂が保たれているため、集中して読書や勉強ができるだけでなく、膨大な蔵書の中から思いがけない本と出会う喜びを味わうことができるのが魅力です。",
  "週末の農産物直売所には、地元の農家が朝採れの新鮮な野菜や果物を並べており、生産者の顔が見える安心感と旬の味覚を楽しめることから多くの人で賑わいます。",
  "旅行の計画を立てる際には、目的地の気候や交通手段だけでなく、現地での文化や習慣を事前に調べておくことでトラブルを避け、より深い体験が得られるでしょう。",
  "家電製品を長持ちさせるためには、取扱説明書に記載された定期的なメンテナンスを怠らず、フィルター清掃やファームウェアの更新を行うことが重要です。",
  "音楽を聴きながら作業すると集中力が高まるという人もいれば、逆に注意が散漫になるという人もいるため、自分の性格や作業内容に合わせて環境を整えることが大切です。",
  "金融リテラシーを高めるには、まず家計簿をつけて収支を把握し、無駄な出費を減らしたうえで投資や保険の基礎知識を学ぶことが、将来の資産形成の第一歩となります。",
  "海外とのビジネスメールでは時差を考慮し、相手の営業時間内に届くよう送信時間を調整すると迅速な返信が得られやすく、商談をスムーズに進めることができます。",
  "運動不足を解消するために毎日一万歩を目標に歩く人が増えていますが、続けるコツは数字ばかり気にせず、景色を楽しんだり友人と一緒に歩いたりして達成感を味わうことです。",
  "プログラミングの学習ではエラーと向き合うことが避けられませんが、エラーメッセージを検索して原因を調べ、自分で解決する過程こそがスキルアップにつながります。",
  "環境に配慮したライフスタイルとして、マイボトルやエコバッグを持ち歩く習慣を身につければ、プラスチックごみを減らし、地球温暖化防止に貢献することができます。",
  "新刊書を発売日に購入するのも楽しいですが、古本屋で絶版になった書籍を見つける瞬間には、一期一会の出会いならではの感動とコレクター心を満たす喜びがあります。",
  "長時間のデスクワークでは、一時間に一度立ち上がって軽いストレッチをするだけでも血行が促進され、肩こりや腰痛の予防につながると多くの専門家が推奨しています。",
  "家庭料理の味付けを安定させるには計量スプーンやキッチンスケールを使うと良いですが、経験を積むと香りや色合いで塩梅を判断できるようになり、料理が一層楽しくなります。",
  "スマートフォンで写真を撮る際、構図の三分割法を意識して被写体を配置するとバランスが良くなり、誰でも簡単にプロのような仕上がりを実現できると言われています。",
  "公共交通機関で席を譲るときは、相手が遠慮しないよう自然な声かけと笑顔を添えることで、心温まるやり取りになり、周囲にも良い雰囲気が広がります。"
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
let onInputHandler = null;

function startTest(){
  // 初期化
  resultEl.textContent = '';
  inputEl.value = '';
  inputEl.disabled = true;
  timerEl.textContent = '';
  countdownEl.textContent = '';

  // タイマー設定
  limitSeconds = parseInt(timeSelect.value,10);

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
      finishTest(prompt);
    }
  },1000);

  // 入力が完了したら自動終了（リスナーを毎回セット）
  onInputHandler = () => {
    if(inputEl.value.length >= prompt.length){
      clearInterval(timerInterval);
      finishTest(prompt);
    }
  };
  inputEl.addEventListener('input', onInputHandler);
}

function finishTest(prompt){
  inputEl.disabled = true;
  timerEl.textContent = '終了';
  countdownEl.textContent = '';

  // リスナー解除
  if(onInputHandler){
    inputEl.removeEventListener('input', onInputHandler);
    onInputHandler = null;
  }

  const typed = inputEl.value;
  const correctChars = getCorrectCharCount(prompt, typed);
  const elapsedSec = (Date.now() - startTime) / 1000;
  const accuracy = prompt.length ? (correctChars / prompt.length * 100).toFixed(1) : 0;
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
