import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_11: StageStoryEntry[] = [
  // ===== 第11章：お片づけ大作戦と秘密の棚 (11-1 〜 11-8) =====
  {
    stageId: '9fd2a72f-a235-5928-849d-4fe8c447f483',
    requestTitle: 'みるく号登場！工房のお片づけ大作戦',
    client: 'kurumi',
    intro: [
      {
        speaker: 'milk',
        emotion: 'normal',
        text: 'ピピッ！はじめまして、しっかり者の「みるく号」だよ！工房の道具が散らかってるから、部屋ごとに分けて整理しよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'うわっ、お片づけ警察がやってきたカニ！？隠してたおやつのクッキーがバレちゃうロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！棚がスッキリ整頓されたよ！フェリスちゃんの秘密のクッキーも「おやつ箱」にしまっておいたからね！',
      },
    ],
  },
  {
    stageId: '5aba927d-c321-5c48-947d-6b2f02470cd8',
    requestTitle: '箱の中の小箱、カギが開かない！？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'アトリエの大きな戸棚の中にある「車輪の小箱」から道具を取り出したいのに、途中の扉にカギがかかってるみたい。',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'あっ、みるく号が几帳面すぎて二重にカギ掛けたんだ！表の扉も中の小箱も開けて取り出そうね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '扉をぜんぶ通れるようにしたら、すんなり取り出せたわ！',
      },
    ],
  },
  {
    stageId: '1fd4629d-d6fc-5324-87c3-2e3c62301d56',
    requestTitle: '発電室と操縦室の伝言ゲーム',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '電力を作る部屋とロボットを動かす部屋、2つの作業場に分けてお仕事を進めるとスッキリしそうだね。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！役割ごとに部屋を分けておけば、探し物も1秒で見つかるよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '道具の整理ができていると、お仕事のテンポまで良くなるね。',
      },
    ],
  },
  {
    stageId: '2f2642fd-792f-527a-bd05-f3802fca0a1f',
    requestTitle: 'パン箱の「秘密の引き出し」問題',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '倉庫の外から特製のパン箱を使いたいんだけど、箱だけじゃなくて中身の引き出しも見えないように封印されてるみたいでさ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '外から触っていい引き出しだけ「どうぞ！」って札をつけて公開しておこうね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '見せていいところだけ見せてくれるなんて、よくできてるなあ！',
      },
    ],
  },
  {
    stageId: '139e5770-fd95-505e-8019-e90c224abd63',
    requestTitle: '長〜い町内住所のニックネーム作り',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '「歯車町三丁目・裏路地・ひなたパン屋横・青いポストの前」って毎回フルネームで書くのに手がプルプル震えます！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それ、最初に手帳の表紙へ省略名をメモしておけば、あとは「パン屋横」の一言で済むよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'わあ、短くて書きやすい！インク代も半分で済みそうです！',
      },
    ],
  },
  {
    stageId: '2bb92ccf-f7f1-5c9b-b56c-4cbc9775004a',
    requestTitle: 'お気に入り道具2つを手元に引き寄せ',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '充電の道具とお散歩の道具、どっちも別の棚にあるから両方とも作業台の手前に並べておきたいわ。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！よく使う道具を最初から手元に並べておけば、作業効率が3倍アップだよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お気に入り道具が一列に並んで、作業台がすっきりしたわ！',
      },
    ],
  },
  {
    stageId: '4e588275-2689-5c3b-adf5-77dad26fd8a3',
    requestTitle: '同じ名前の「太郎くん」がふたり！？',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '右の棚にも左の棚にも「おまかせボタン」って名前の同じボタンがあってね。呼び間違えない工夫はあるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それなら「右の棚のおまかせ！」「左の棚のおまかせ！」って部屋の名前ごと読べばバッチリ見分けられるよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '名前のカブりもスマートにかわせるんだね。なるほど。',
      },
    ],
  },
  {
    stageId: '42360a9a-65e1-5548-b488-2805d64d5ed5',
    requestTitle: 'ピカピカ部品庫と隠しスイッチ攻略',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '整理された棚から大事な道具をパッと取り出して、金庫と連動ゲートをきれいにクリアしよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お片づけの達人になった今なら、どんな道具もすぐ取り出せるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！フェリスちゃんも少しはお片づけ上手になったみたいだね！',
      },
    ],
  },

];
