import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_8: StageStoryEntry[] = [
  // ===== 第8章：迷子の荷物とひとりじめ事件 (8-1 〜 8-12) =====
  {
    stageId: '50da55a5-9f54-56a0-9ca7-ad9d72ff3541',
    requestTitle: 'お花のタネ、手放したあとも気になっちゃう',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '大事な光のタネを1つだけ花壇のゴールへ運んでほしいの。渡したあとも気になって触ろうとしちゃダメよ？',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'えっ、預けたあともピカピカしてるからついツンツンしたくなっちゃうカニ……我慢するロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'タネが迷子にならず、きちんと1つだけ届いたわ！これで春のお花も安心ね。',
      },
    ],
  },
  {
    stageId: '2cd33dd4-9627-54ce-97b8-a711e77061e4',
    requestTitle: 'お買い物カゴ、誰が持ってるの！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'あれっ！？隣の店員さんにパンのカゴを渡したはずなのに、うっかり自分の空っぽのカゴを届けようとしちゃったよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'コッペさん、それただのエア荷物だよ！受け取った人の手元からちゃんと届けようね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'そっか、中身は1つしかないから受け取ったほうを渡せばいいんだね！あはは、うっかりうっかり！',
      },
    ],
  },
  {
    stageId: '3bfa7dd4-ab23-5565-9b0f-a597d3e73d62',
    requestTitle: '預けた大事なもの、ちゃんと返して〜！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '点検に出した光る豆ランプ、向こうに持っていかれたまま戻ってこないんだが。ちゃんと手元へ返してもらえるかな？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'おまかせ！点検が終わったらきちんと持ち主へ返すように伝えておいたよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'おお、ピカピカになって戻ってきたよ。これなら安心して預けられるね。',
      },
    ],
  },
  {
    stageId: '05bf262f-5786-5234-b6cc-9de582a1a776',
    requestTitle: '2つの光の玉を順番リレー',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '今日は大事なお届け物が2つあります！1つ目を届けてから、忘れずに2つ目もお願いできますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '両手に1個ずつ……は重くてコケそうだから、1個ずつしっかり届けるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '2つとも取り違えゼロで完璧に届きました！',
      },
    ],
  },
  {
    stageId: '982d2f3c-0ac0-53b8-a8c4-e8d038dd8fa4',
    requestTitle: 'ランプのちょっと貸し出し＆ピカピカ磨き',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '喫茶店のランプ、ちょっとだけ見せて、ついでに光パワーを強くしてから返してくれるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'はーい！「ちょっと見せて」と「ちょっと磨くよ」を順番にやれば、持ち主の手元からなくならないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'うん、温かみのあるいい光だ。お店がぐっと明るくなったよ。',
      },
    ],
  },
  {
    stageId: '780244e4-ee33-5914-93ed-d60d1bf06489',
    requestTitle: '新種のお花、クンクン香りチェックは大人気',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '珍しいお花が咲いたの！見るだけなら何人で覗き込んでも減らないし、2回続けてチェックしても平気よね？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'クンクン……甘い香りがするカニ！触らないで眺めるだけなら100人でも見れるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '2回のチェックも合格ね！さっそくお店の特等席に並べましょう♪',
      },
    ],
  },
  {
    stageId: '93d94563-e767-55af-911d-43a5c6a17067',
    requestTitle: 'チョコペンは1本だけ！取り合いケンカ勃発',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'たいへんだ！ケーキに字を書くチョコペンを2人同時に使おうとして、クリームがぐちゃぐちゃになりそうだよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '書き換えるペンは1回に1人ずつ！順番を守ればケンカにならないし、文字もきれいに書けるよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '順番を守ったら「たんじょうびおめでとう」が綺麗に書けたよ！仲直りだね！',
      },
    ],
  },
  {
    stageId: 'b93e4f37-2a9d-5313-84f8-af74f2395f5e',
    requestTitle: 'まぶしすぎ！？特大パワーの光お届け',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '遠くの灯台へ送るランプ、夜道でも目立つように2回ぶんピカピカに磨いて届けてほしいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'キュキュッと2回磨いたら……うわっ、まぶしすぎてサングラスがほしいカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'お星さまみたいにキラキラですね！これなら夜中の配達も道に迷いません！',
      },
    ],
  },
  {
    stageId: 'f5a0f239-cfc0-553b-8c39-f24be2137f2e',
    requestTitle: '焼き菓子トレーの真ん中だけ味見タイム',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'オーブンから出した4個のパンのうち、真ん中の2個だけ焼き色がちょうどいいか見てほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お皿ごと運ばなくても、真ん中2つだけチラッと見ればいいカニ！……味見はダメロボ？',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お見事！こんがりきつね色、完璧な焼き上がりだよ！',
      },
    ],
  },
  {
    stageId: 'be100168-6dd5-54c6-b965-8e2b5f48f2bd',
    requestTitle: '端っこからザックリ花束づくり',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '「最初から3本だけ」とか「後ろの残り全部」みたいに、パッと見てすぐわかる束ね方をしたいのよ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それならリボンでサッとくくる場所だけ決めて、端っこからまとめて見よう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お花束のサイズ分けがとっても見やすくなったわ♪',
      },
    ],
  },
  {
    stageId: '9ba6d447-0926-51b4-b323-bcd6e3074cc8',
    requestTitle: '数えたお豆の数だけトコトコ歩き',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '選んだ豆のグループの本数をそのまま歩数にして、カウンターの端まで運んでもらえるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '豆を1、2、3……って数えたらお腹がすいてきたカニ。寄り道しないで届けるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'ちょうど注文数とおんなじ歩数で届いたね。無駄のない動きだ。',
      },
    ],
  },
  {
    stageId: '9173a523-fa9e-5b50-adc2-b98d38e4c2a7',
    requestTitle: '町内会のおおそうじ・みんなでひと休み！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '商店街のみんなからの合同おてつだいだよ！大事な荷物も貸し出しの道具も、ぜんぶまとめてやりきっちゃおう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '終わったらおやつタイムが待ってるカニ！最後のひとふんばりロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お見事！全部スッキリ片付いたね。試食会のパンを山盛り持ってきたよ〜！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'わーい！いただきまーすカニ！！',
      },
    ],
  },
];
