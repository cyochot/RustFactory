import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_18: StageStoryEntry[] = [
  // ===== 第18章：お急ぎ便とかけっこ勝負 (18-1 〜 18-4) =====
  {
    stageId: '20649eef-f71c-5821-b966-a1e23b920e2f',
    requestTitle: 'お急ぎダッシュ！最短コースをかけ抜けろ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: 'お祭りのチラシ配りが遅れそうです！今日は「お急ぎオプション」をオンにして最短歩数で駆け抜けたいです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お急ぎモード発動カニ！ハサミを後ろに流して空気抵抗を減らすロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'スイスイ進んで新記録達成です！これならお昼寝の時間もたっぷり確保できます〜。',
      },
    ],
  },
  {
    stageId: '1d1d1eae-a488-5133-9fdd-a0b378a96eaa',
    requestTitle: '店の奥から「お急ぎ窓口」を開放せよ！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '店の奥に隠れている便利な道具を、玄関からひと声かけるだけで使えるように表へ出しておいてくれるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '受け渡し窓口を玄関にポンッと移しておけば、走ってきたまま立ち止まらず受け取れるよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '見た目もシンプルで速い！いいお店番になってきたね。',
      },
    ],
  },
  {
    stageId: '9de2fcd1-59e3-5e8c-85a5-46e76c89a7c2',
    requestTitle: '数え役と走り役の二人三脚リレー',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '「計算する係」と「走る係」のふたりで協力して、確認チェックもしながらパンを届けてみよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '僕が走る係カニ！計算はしっかり者の誰かにお願いするロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'チェック合格も配達もバッチリ！息の合ったチームワークだね！',
      },
    ],
  },
  {
    stageId: '12c1af9f-0396-5ba7-826d-d039f93befd9',
    requestTitle: '制限時間内にゴール！かけっこ大会！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '町内かけっこ大会のタイムアタックだよ！ムダな寄り道をぜんぶ省いて、制限時間内にゴールへ飛び込もう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '一等賞の金メダル（チョコ味）は僕のものカニ！よーいドンロボ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'すごいスピードで新記録！はい、お約束のチョコレート金メダルだよ！',
      },
    ],
  },

];
