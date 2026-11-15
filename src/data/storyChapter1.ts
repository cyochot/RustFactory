import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_1: StageStoryEntry[] = [
  // ===== 第1章：工房オープンとご近所あいさつ (1-1 〜 1-8) =====
  {
    stageId: '3d738a54-da4a-52c6-b1cb-c05b7553fc60',
    requestTitle: '看板カニのフェリス、初出勤でずっこけ',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '今日から「鉄と歯車のからくり工房」がオープンだよ！フェリスちゃん、まずは玄関の旗までカッコよく歩いてお客さんをお迎えして！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'まかせるカニ！看板カニとして華麗なウォーキングを見せちゃうロボ……あれっ、自分のハサミで足がもつれたカニ！？',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'なんとか旗までたどり着いたカニ！……ふぅ、今の転びかけは「そういうダンス」ってことでごまかすロボ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'あはは、前途多難だけど楽しそう！さあ、これから町のみんなのお手伝いがたくさん来るよ！',
      },
    ],
  },
  {
    stageId: 'd9ea670f-238a-54b4-879b-8201d9706c66',
    requestTitle: '右曲がりが苦手なカニの特訓',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'くるみちゃん大変カニ！まっすぐ歩くのは得意なんだけど、カニだから横歩きしかできなくて角が曲がれない気がするロボ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'いやいや、フェリスちゃん前向きに歩けてたじゃん！とりあえず角を右に曲がる練習をしてみようよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'キュキュッと右折できたカニ！僕、カニ界の革命児かもしれないロボ〜！',
      },
    ],
  },
  {
    stageId: '5da9d1d4-abaa-508e-aabc-f56914cf3969',
    requestTitle: 'お花畑でダンス！？ジグザグ水やり',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'こんにちは、くるみちゃん！花壇のチューリップを踏まないように、じょうろを持ってジグザグに歩いてもらえるかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お花のあいだを華麗にステップするカニ！……あれ、水をまきすぎて自分の頭がびしょ濡れロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お花は元気いっぱいだし、ついでにフェリスちゃんのホコリも落ちてピッカピカになったわね♪',
      },
    ],
  },
  {
    stageId: 'f82c6a65-fb35-5d1b-8409-c3354d315bdd',
    requestTitle: '小麦粉の山とぐるぐる迷子',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: '大変だ〜！特売の小麦粉を買いすぎたら通路のど真ん中が山になっちゃって、奥の棚まで遠回りしないと通れないんだよ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'コッペさん、毎回買いすぎだってば！フェリスちゃん、つまみ食いしないでぐるっと回り込んで届けてきて！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お見事！粉まみれにもならず一発到着だ。お礼に焼きたての塩パンをどうぞ〜！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'もぐもぐ……焼きたて最高カニ！（ほっぺが粉だらけ）',
      },
    ],
  },
  {
    stageId: '97cc03cb-b7c6-531c-85f4-775660346be9',
    requestTitle: 'パン屋の「いらっしゃいませ！」大音量事件',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '焼きたてパンが並んだ合図に、元気よく店先で「おはよう！」って声かけしてくれるお迎え係をお願いしたいんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'のど飴なめたから準備バッチリカニ！町中に響きわたる声であいさつするロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'おお〜っ、元気がよすぎて屋根の上のハトまでお辞儀したよ！お礼のクリームパン置いとくね！',
      },
    ],
  },
  {
    stageId: '8fbca29b-fc90-5a12-b7f2-1038db1c6314',
    requestTitle: '喫茶店の常連さん呼び出しトラブル',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'おはよう。今日は混みそうだから、お客さんの番号札をカウンターで分かりやすく読み上げてくれると助かるんだがね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'モカさんおはよう！フェリスちゃん、注文した人の番号を間違えて「自分の年齢」とか言わないでね？',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'よし、間違えずに届いたね。おかげでミルクの泡立てもちょうどよく仕上がったよ。',
      },
    ],
  },
  {
    stageId: 'c3cdcf8a-02f3-54a9-9358-f873fcb627de',
    requestTitle: '出発まえの「いってきます！」忘れ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: 'あっ、また朝ごはんのトーストくわえたまま飛び出してきちゃいました！郵便局では「出発報告」と「到着報告」がルールなのに！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'ポッポさん、まず落ち着いてパンを飲み込もうね。フェリスちゃんが代わりに出発と到着のあいさつ、ちゃんとしてくるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '出発も到着もパーフェクトな礼儀正しさ！見習わなくっちゃ……。',
      },
    ],
  },
  {
    stageId: 'b022d65a-c79c-5290-93b0-e24c94ca7c37',
    requestTitle: 'ご近所あいさつ回りでぜんまい切れ！？',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '開店祝いのご近所あいさつ巡りだよ！U字の通りをぐるっと回りながら、パン屋さんも花屋さんも一気に挨拶しちゃおう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'あいさつのたびに手土産もらえる予感がするカニ！はりきって行くロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'みんなと仲良くなれたし大成功！……ってフェリスちゃん、もらいすぎたお菓子で動きが重くなってるよ！',
      },
    ],
  },

];
