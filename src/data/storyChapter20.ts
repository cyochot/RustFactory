import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_20: StageStoryEntry[] = [
  // ===== 第20章：ふたりの息ぴったり大作戦 (20-1 〜 20-16) =====
  {
    stageId: 'c3c83e83-0264-5981-b647-107682a9c530',
    requestTitle: '朝の大注文！フェリス＆みるく同時出動！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'わーっ、朝の大口注文だ！フェリスちゃん1人だけじゃパン運びが間に合わないよ〜！誰か助けて〜！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！みるく号も出動するよ！フェリスちゃんとふたり同時に「せーの！」で出発だ！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！ふたり一緒だとあっという間に終わったね！',
      },
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '息がぴったりのダブル配達、ありがとう〜！',
      },
    ],
  },
  {
    stageId: '5cfe7a0a-c007-56b0-8587-9900dbdbdb47',
    requestTitle: '相棒の到着をゴール手前で待ってあげよう',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: 'みるく号が作業を終わらせるまで、フェリスちゃんにゴール手前で「おーい、まだー？」って待っててもらえますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '先に着いて鼻歌をうたいながらみるく号を待つカニ！一緒にゴールしたほうが楽しいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ふたり揃って仲良く完了しましたね！',
      },
    ],
  },
  {
    stageId: '0d3fd059-b354-5e1a-9679-7335cc4bb382',
    requestTitle: '上の道と下の道、スイッチで道を開け！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '上の通路のみるく号がスイッチを踏むと、下の通路にある門が開く仕掛けになっているの。タイミングを合わせられるかしら？',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！フェリスちゃんは門の前で待っててね！僕が今すぐスイッチを踏みに走るから！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！スイッチ押したよ！呼吸ぴったりのコンビネーションだね！',
      },
    ],
  },
  {
    stageId: 'b523c4fe-6466-578e-8b4a-fe84bcb1d1da',
    requestTitle: '相棒にお出かけメモを丸ごとプレゼント！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '手元で作った歩数のメモを、別ルートを行く相棒のロボットへ安全に持たせて動かしたいんだが。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '出発するときにメモの持ち主ごと「はい、これ持ってって！」って手渡してしまえば、途中で迷子にならないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '途中でメモが消える心配もなくなって安心だね。',
      },
    ],
  },
  {
    stageId: '92b31b2c-f643-5807-bcb0-53b326b64023',
    requestTitle: '紙コップの糸電話で光の玉をパス！？',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '離れて作業しているフェリスちゃんとみるく号に、安全に光の玉をパスする方法ってありますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ジャーン！特製「なんでも通る糸電話パイプ」を作ったよ！こっちからポイッと送れば、あっちでキャッチできるよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ナイスキャッチカニ！糸電話の向こうからポンッと飛び出してきてびっくりロボ！',
      },
    ],
  },
  {
    stageId: '54a4a74f-b8a4-5f45-b173-51cfb4a06882',
    requestTitle: '糸電話から届いた歩数でゴールへ進め！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'みるく号が測って送ってくれた「進む歩数」を糸電話で受け取って、そのまま金庫とゴールをクリアしてね！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！「右に何歩だよ〜！」って今送るから、ちゃんと聞き取ってね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '糸電話の伝言どおりにピタッと到着したよ〜！',
      },
    ],
  },
  {
    stageId: 'b7d9d909-f828-593f-abda-b1da35da1eab',
    requestTitle: 'もしもし？伝言2回まとめてキャッチ！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '向こうの通路から2回送られてくる数字を受け取って、合計のパワーを金庫に届けられるかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '1回目キャッチ！2回目もキャッチ！耳を澄ませて聞き漏らさないカニ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '2回とも取りこぼしなく受け取れたわね！',
      },
    ],
  },
  {
    stageId: 'c7bf8ef0-e8e5-5cc7-8ed5-a61821b74adc',
    requestTitle: '受け取った光の玉を磨いてから納品だ！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'パイプで受け取った光の玉、そのままじゃ少し曇っているんだ。受け取ったあとにピカッと磨いてから納品してくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'キュキュッと磨き上げるカニ！みるく号から届いた大事な玉、ピカピカにして届けるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '受け取ってからの一手間もスムーズだね。きれいな光だ。',
      },
    ],
  },
  {
    stageId: '744c7878-de43-5906-a5f9-9e47b5af88a2',
    requestTitle: 'みんなの小金庫、鍵をかけて順番待ち！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '売上の共有金庫に2人同時にお金を入れようとすると、数が食い違ってケンカになりそうで心配なんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '金庫に鍵を掛けて、開けてる間はもう1人がお行儀よく順番待ちするルールにしよう！これなら絶対ずれないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '1コインの狂いもなくピッタリだ。これなら忙しい昼どきも安心だね。',
      },
    ],
  },
  {
    stageId: '634a5c12-0856-56f9-b72e-12f52e69d796',
    requestTitle: 'あっ！鍵を握ったまま待ちぼうけ事件',
    client: 'kurumi',
    intro: [
      {
        speaker: 'milk',
        emotion: 'panic',
        text: 'ピピッ！前の鍵を握りしめたまま、もう1回鍵を開けようとして自分自身で待ちぼうけになっちゃった〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'あはは、自分の鍵を自分で待ってたら一生開かないよ！使い終わったらすぐ鍵を返すようにしようね！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！鍵がきちんと返ってスムーズに動いたよ！恥ずかしいところ見せちゃった！',
      },
    ],
  },
  {
    stageId: '5e6662ee-55f1-5067-80ad-526eee7c9aaa',
    requestTitle: '「お先にどうぞ！」と鍵をバトンタッチ',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'まだ別の用事が残っているとき、次の人のために今すぐ鍵だけ先に開けて返してあげる方法はないかな？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '「はい、お先にどうぞ！」ってその場で鍵を手放せば、相棒が待たずにすぐ使えるよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '待ち時間ゼロでスッキリ順番交代できたね！',
      },
    ],
  },
  {
    stageId: '15df331e-f034-5353-afac-6c7be3f3c60e',
    requestTitle: '3人掛かりのリレーで金庫を満タンに！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '2人からさらに助っ人が増えて3人同時に金庫へ運び込みます！ぶつからずに6ポイントまで貯められますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '3人でも5人でも一列に並べばバッチリカニ！順番を守ってコツコツ貯めるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '3人掛かりでも1つも取りこぼしなし！素晴らしいチームワークです！',
      },
    ],
  },
  {
    stageId: '59331df0-516f-5b5b-a7d8-00b6a8565f58',
    requestTitle: 'お引越しできる道具、できない道具',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '遠くの部屋へ安全に持っていける道具と、持って行くと危ない道具を見分ける練習だよ！',
      },
      {
        speaker: 'milk',
        emotion: 'normal',
        text: '危ない裸のままの道具は、ちゃんと鍵付きの安全なケースに入れ替えれば安心して持っていけるね！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'バッチリ！安全じゃない運び方をしっかり防げたね！',
      },
    ],
  },
  {
    stageId: '7dce4831-1304-5e03-bc52-fe604de23da8',
    requestTitle: 'おもちゃの取り合いは「伝言渡し」で仲直り',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '別々の部屋から同じリストを引っ張り合って取り合いになっちゃったわ。仲良く受け渡すにはどうしたらいいかしら？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '引っ張り合う代わりに糸電話パイプで「はい、どうぞ！」って送り合えば、ケンカゼロで平和に解決だよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '奪い合うより送り合うほうがずっと仲良しで素敵ね♪',
      },
    ],
  },
  {
    stageId: 'e345d21f-9d47-5057-9d01-dcf0e549f33f',
    requestTitle: '糸電話と金庫番のハイパー連携プレー',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '金庫への貯金は鍵つき順番待ち、光の玉の受け渡しは糸電話で同時にさばく、見事な連携を見せてくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'みるく号と一緒ならどんな注文もへっちゃらカニ！いっくよ〜！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'お見事としか言いようがないね。見ていて惚れ惚れする連携だよ。',
      },
    ],
  },
  {
    stageId: '4f0d82ae-fb14-5e35-a27d-2950a1fac060',
    requestTitle: 'お祭り前の総リハーサル！ふたりで決めろ！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'いよいよ町のお祭りが近づいてきたね！スイッチ踏み・糸電話・磨き上げ・金庫チャージをふたり同時に決めよう！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！これができたらお祭り本番もバッチリだね！フェリスちゃん、いくよー！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'やったー！！リハーサル大成功！さあ、いよいよ町中が待ちに待ったお祭り準備の始まりだよ！！',
      },
    ],
  },
];
