import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_12: StageStoryEntry[] = [
  // ===== 第12章：食べすぎ注意のメニュー表 (12-1 〜 12-12) =====
  {
    stageId: 'c0581340-c3c5-5377-b453-7ef58d8eecfe',
    requestTitle: '伸び縮みするパン予約カゴが大行列',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: '今日のパンの予約数がどんどん増えたり減ったりするんだ！あとからいくつでもポンポン足せる大きなカゴが欲しいよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '任せてコッペさん！どんなに注文が増えてもパンクしない、伸び縮みする買い物リストを用意したよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '予約が追加されても余裕だね！焼きたてをぜんぶ並べられたよ〜！',
      },
    ],
  },
  {
    stageId: '8b57d218-9e07-5421-a27f-e7d227d78e80',
    requestTitle: '空っぽのリストから集荷スタート！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '最初は空っぽの荷物リストから始めて、集荷した順番にどんどん書き足しながら歩きたいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '最初はゼロでも、回るうちに袋がパンパンになっていくのワクワクするカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '集荷のたびにリストが育っていくみたいで頼もしいですね！',
      },
    ],
  },
  {
    stageId: 'da6c9668-2286-5537-b079-941dd62655fb',
    requestTitle: '空の引き出しを無理やり開けてパニック！？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '棚に何番目の箱があるか分からないとき、勢いよく引っ張ったら引き出しごと抜けちゃいそうで心配なの。',
      },
      {
        speaker: 'milk',
        emotion: 'normal',
        text: 'ピピ！まずはそっと中身があるか覗いて確かめれば、空振りしてひっくり返ることはないよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '空の段を確認しても壊れないなんて、とっても優しい工夫ね。',
      },
    ],
  },
  {
    stageId: '5da5c53a-688d-5247-bb6f-5080b1a23189',
    requestTitle: '注文リストの合計を数えながらL字歩き',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'リストに入っている数をぜんぶ足して金庫をいっぱいにして、そのあとL字のカウンターへパンを届けてくれないかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'パンを数えながら歩くカニ〜！……あれっ、2回同じパン数えちゃったかも？やり直しロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '合計もルートもピタリと一致！いつも助かるよ〜！',
      },
    ],
  },
  {
    stageId: '4af280a8-2c53-54a9-bd94-b10ddce67661',
    requestTitle: 'つなげて楽しい！お花屋さんの看板ボード',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お店の看板に季節のあいさつと「本日のおすすめ」をくっつけて、長い1つのメッセージにしたいの。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '言葉をペタペタつなぎ足して、可愛いおすすめ看板を仕上げちゃおう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '素敵な看板メッセージができあがったわ！通りすがりの人も立ち止まって見てる♪',
      },
    ],
  },
  {
    stageId: 'd6a7bb8f-68d7-5a00-aa96-3acd02299e6a',
    requestTitle: '2つの看板文字をガチャンと合体！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '前半の看板板と後半のメッセージ板、ガチャンとひとつに合体させて店頭に出したいんだけどね。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ボンドとテープでしっかり合体させるカニ！……あっ、自分のハサミまでくっついちゃったロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '看板がビシッと1本につながったよ。お客さんにもよく見えそうだ。',
      },
    ],
  },
  {
    stageId: 'fd9002e9-f055-5419-9d4e-7df7295beebc',
    requestTitle: '秘密の合言葉を組み立てて叫ぼう！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '郵便局の秘密の合言葉を、文字パーツを順番につなぎ合わせて完成させたいんです！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '文字をひとつずつ間違えずにくっつけて、合言葉を元気よくお届けしよう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '合言葉バッチリ通りました！噛まずに言えてよかったです！',
      },
    ],
  },
  {
    stageId: '1eb1e04b-a566-559e-b5bc-1a3bac25a608',
    requestTitle: '看板の合図が「特急」に変わったらダッシュ！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '看板の文字が「特急便」に切り替わったら、大事な光の玉を持って一気に納品台まで走ってほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '合図の文字をじーっと見張って、変わったらロケット発進カニ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '特急便すごいスピードだったよ〜！ホカホカのまま届いたね！',
      },
    ],
  },
  {
    stageId: '7af4a668-eb8f-519c-b356-0338ccbea270',
    requestTitle: '常連さんの「いつもの！」早見表',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'お客さんの名前を引いたら、いつもの好みのコーヒー豆がすぐ出てくる名簿を作りたいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '名前と好みをペアでメモしておく「いつもの帳」を作ろう！これで常連さんが来てもドヤ顔で出せるね！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '「いつもの」でサッと出せるようになったよ。頼もしいね。',
      },
    ],
  },
  {
    stageId: 'a2fc03f5-86ff-517d-8bf9-a0250c01b161',
    requestTitle: 'コッペさんとミモザさんの「いつもの」合計！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'コッペさんとミモザさんの2人分の注文数を、名簿から引き出して合計してくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '名簿をめくって2人分を足し算カニ！コッペさんだけ甘めのお砂糖山盛りなのもメモしてあるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '2人分のカップ、ちょうどいいタイミングで淹れ上がったよ。',
      },
    ],
  },
  {
    stageId: '6090b7ba-d154-55d5-92ab-a275029fda2c',
    requestTitle: '町内スタンプ帳のポイント上乗せ作戦',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '同じお家のポイントカードに、お届けするたび点数を消さずに上乗せしていきたいんですが、どうすればいいですか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '前の数字に今回の分を足して書き直せば完璧！これでポイントが消えちゃう悲劇は起きないよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '古い記録を消さずに加算できました！町内会の名簿にも使えそうです！',
      },
    ],
  },
  {
    stageId: '5cc099ac-9b4a-5d44-95b0-608fb71d08f7',
    requestTitle: 'リスト・看板・名簿の合同ミッション！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '注文リストも看板文字も常連さん名簿も全部そろったよ！町の合同おつかいを気持ちよく締めくくろう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '準備万端カニ！終わったらモカさんのお店でココアをごちそうになるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '見事な連携だったね。約束どおり特製ココアを淹れて待っていたよ。ゆっくりしていきな。',
      },
    ],
  },
];
