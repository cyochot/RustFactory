import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_15: StageStoryEntry[] = [
  // ===== 第15章：お味見チェックと合格スタンプ (15-1 〜 15-8) =====
  {
    stageId: '0a19c51a-2f6c-5a4c-9247-29534bd93f8a',
    requestTitle: '出荷まえのひと押し！焼き上がりチェック',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '新しいオーブンタイマーを作ったんだけど、ちゃんと時間通りに鳴るか毎回出荷まえにためし運転しておきたいんだよね。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '焼き上がりの味見チェックなら僕におまかせカニ！1回につき3個ずつ試食するロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '味見チェック大合格！試食しすぎないでくれて助かったよ〜！',
      },
    ],
  },
  {
    stageId: '570bc484-898f-5e5f-91d9-3f80f7e43530',
    requestTitle: 'タイマーの計算ミスを発見！犯人は誰だ？',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'panic',
        text: 'おっと、タイマーの計算チェックに赤いバツがついちゃったよ！せっかく見つけたんだし、中身を正しく直してくれるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'お店に出す前に気づけてラッキー！さっそく計算間違いを直しちゃおう！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'よし、ばっちり合格マークだ！事前のチェックって頼もしい番犬みたいだね。',
      },
    ],
  },
  {
    stageId: '5b076c31-42b8-59b9-aabe-7805a786eac2',
    requestTitle: 'お花の栄養剤、濃さはバッチリかな？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お花の栄養剤が「元気に育つ十分な濃さ」になっているか、マルバツで確かめるチェックをしたいの。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '薄すぎたら僕が水でうすめたのバレちゃうカニ！？……うそ、ちゃんと規定どおりに混ぜるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '元気に咲きそうな濃さね！チェック合格でひと安心だわ。',
      },
    ],
  },
  {
    stageId: 'f7279691-407d-568c-8f17-97b5a23aad9b',
    requestTitle: '重すぎ小包が来たときの限界チェック！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '普通のときだけじゃなく、荷物が重さの上限を超えたときにきちんとセーブできるかも確かめておきたいんです！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '「普通のとき」と「重すぎのとき」、両方とも合格マークがつくように調整しよう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '上限チェックも完了済みなら、スイカくらい重い小包が来ても怖くありません！',
      },
    ],
  },
  {
    stageId: '163a23b2-ec90-5f86-a31b-8bc41aa59448',
    requestTitle: 'お祝いブーケのダブルチェック大作戦',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '今日は大事なお祝いのブーケだから、重さも本数もどっちも間違いがないか2重で見ておきたいの。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！僕も虫眼鏡を持ってダブルチェックを手伝うよ！リボンもまっすぐだね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '全部のチェックが合格ね！お祝いのお花、笑顔で渡してこられるわ。',
      },
    ],
  },
  {
    stageId: '6cdfbfb3-0af5-52c3-b817-05dbbbc623e5',
    requestTitle: 'パン生地3種類の重さチェック合格せよ！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '食パン・あんぱん・バゲットの3種類の生地計算、どれも合格スタンプが押せるように仕上げてくれないかな？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '3つ全部に合格スタンプが並んだら完璧だね！さあ、生地の重さを整えよう！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '3つぜんぶ合格！これで明日からのパン作りもバッチリだ！',
      },
    ],
  },
  {
    stageId: 'ae5f34d9-8b3d-5240-b03b-053ab713166e',
    requestTitle: '失敗理由もメモしてくれる賢い検査スタンプ',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'ダメだったときに「ここがダメだよ」って一言添えて教えてくれる、ちょっと親切なチェック方法にしてみたいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それ親切でいいね！原因がすぐわかれば直すのもあっという間だよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '問題なく美しくパスしたね。おいしいコーヒーが淹れられそうだ。',
      },
    ],
  },
  {
    stageId: '9dc94aec-ccf0-5432-8846-c0c15b87b666',
    requestTitle: '合格スタンプを並べて堂々と出荷ゲートへ！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '2つの点検チェックに全部合格したあと、スイッチを踏んで連動ゲートを堂々と突破しよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ぴっかぴかの合格シールつきで出荷ロボ！いってくるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'おつかれさま！これで町の品質検査はお墨付きだね！',
      },
    ],
  },

];
