import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_6: StageStoryEntry[] = [
  // ===== 第6章：ひみつの鍵とジャム缶騒動 (6-1 〜 6-4) =====
  {
    stageId: 'c7db5262-fe5d-5bd7-ada8-b547ecb72e20',
    requestTitle: 'おやつ缶の番号、誰が忘れたの！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'やっちゃった！特製のイチゴジャムが入ったおやつ缶、秘密のダイヤル番号を忘れちゃって開かないんだよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'たしか「誕生日」とか「好きなパンの値段」とか言ってなかった？1つずつヒントを頼りに当ててみよう！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'カチャッと開いた〜！思い出した、「今日食べたあんぱんの数」にしてたんだった！てへっ！',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: '食べすぎカニ！！',
      },
    ],
  },
  {
    stageId: '7fd4e25e-40fb-5133-adee-a1a0221e491d',
    requestTitle: '温室物置のダイヤルと居眠りネコ',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '温室の物置もダイヤル錠なの。開けたあと奥の棚まで鉢植えを運びたいんだけど、1から8のどれだっけ……。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'カチカチ回せばそのうち開くカニ！開いたらお礼にお花のミツ舐めさせてほしいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '開いたわ！……あら、棚の奥でお昼寝してた野良ネコちゃんがびっくりして飛び出していったわね。',
      },
    ],
  },
  {
    stageId: 'd9193199-6424-5df5-b90b-3fd3665c6a67',
    requestTitle: '珈琲豆の秘密金庫とマスターのこだわり',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'うちの秘蔵ブレンド豆をしまった金庫の番号、ちょっとど忘れしてしまってね。ヒントに合わせてピタリと当ててくれないかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'モカさんでも忘れ物するんだね！よし、大きい小さいのヒントを見ながら一発で開けちゃうよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '助かったよ。番号は「お気に入りのマグカップの数」だったか……いや、内緒にしておいてくれ。',
      },
    ],
  },
  {
    stageId: 'eb488e99-3eeb-56ad-8db6-716fca47d7b3',
    requestTitle: 'シュッシュッと噴き出す蒸気ドアの向こう',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '郵便倉庫の金庫を開けようとしたら、手前の蒸気ドアがシューシュー閉まったり開いたりして進めません〜！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'タイミングを見計らって「せーの！」で潜り抜けるカニ！あせって挟まれるとペチャンコになっちゃうロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ひゃ〜、お見事です！僕だったら絶対にしっぽの羽を挟んでました……。',
      },
    ],
  },

];
