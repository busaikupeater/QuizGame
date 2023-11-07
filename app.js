// 問題作成のためのオブジェクト
const quiz = [
  {
    question: "私が一番好きなマンガはどれ？",
    answers: [
      "名探偵コナン",
      "ジョジョの奇妙な冒険",
      "ヒカルの碁",
      "ハンターハンター",
      "スラムダンク",
    ],
    correct: "ジョジョの奇妙な冒険",
  },
  {
    question: "プロフィール画像にも使われている私の愛犬の名前は？",
    answers: ["ケン", "シロ", "ピーター", "カイ", "セイト"],
    correct: "ケン",
  },
  {
    question: "私の出身地はどこだに？",
    answers: ["愛知県", "山梨県", "石川県", "長野県", "静岡県"],
    correct: "静岡県",
  },
  {
    question: "私が今までプレイした中で一番ハマったゲームはどれ？",
    answers: [
      "リングフィット",
      "ファイナルファンタジーX",
      "マリオカートWii",
      "カルドセプト",
      "FE聖戦の系譜",
    ],
    correct: "カルドセプト",
  },
  {
    question: "私がプログラミングを通してやりたいことは何？",
    answers: [
      "世界征服",
      "自分自身を成長させる",
      "エロエロハーレム",
      "自分独自のサービスを作る",
      "親孝行",
    ],
    correct: "自分自身を成長させる",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
// 採点に使うための変数
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;

  while (buttonIndex < $button.length) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
// 関数の起動
setupQuiz();

// 答えの要素をクリックしたら正解判定する関数の定義
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("Exactly(その通りでございます)");
    // 採点のためのインクリメント
    score++;
  } else {
    window.alert("やれやれだぜ…");
  }
  // 次の問題文に進むためのインクリメント
  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもう無ければこちらを実行
    switch (score) {
      case 5:
        window.alert("きたきたきたきたきたきたきたきたきたーっ！！");
        break;
      case 0:
        window.alert("0てんまんてんです");
        break;
      default:
        window.alert(
          `終了！あなたの私に対する理解度は${Math.trunc(score * 20)} %です!`
        );
    }
  }
};

//ボタンをクリックするとclickHandlerが呼び出されて正解判定する
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
