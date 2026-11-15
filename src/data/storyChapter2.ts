import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_2: StageStoryEntry[] = [
  {
    "stageId": "c7db5262-fe5d-5bd7-ada8-b547ecb72e20",
    "requestTitle": "おやつ缶の番号、誰が忘れたの！？",
    "client": "coppe",
    "intro": [
      {
        "speaker": "coppe",
        "emotion": "panic",
        "text": "やっちゃった！特製のイチゴジャムが入ったおやつ缶、秘密のダイヤル番号を忘れちゃって開かないんだよ〜！"
      },
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "たしか「誕生日」とか「好きなパンの値段」とか言ってなかった？1つずつヒントを頼りに当ててみよう！"
      }
    ],
    "outro": [
      {
        "speaker": "coppe",
        "emotion": "happy",
        "text": "カチャッと開いた〜！思い出した、「今日食べたあんぱんの数」にしてたんだった！てへっ！"
      },
      {
        "speaker": "ferris",
        "emotion": "panic",
        "text": "食べすぎカニ！！"
      }
    ]
  },
  {
    "stageId": "7fd4e25e-40fb-5133-adee-a1a0221e491d",
    "requestTitle": "温室物置のダイヤルと居眠りネコ",
    "client": "mimosa",
    "intro": [
      {
        "speaker": "mimosa",
        "emotion": "normal",
        "text": "温室の物置もダイヤル錠なの。開けたあと奥の棚まで鉢植えを運びたいんだけど、1から8のどれだっけ……。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "カチカチ回せばそのうち開くカニ！開いたらお礼にお花のミツ舐めさせてほしいロボ！"
      }
    ],
    "outro": [
      {
        "speaker": "mimosa",
        "emotion": "happy",
        "text": "開いたわ！……あら、棚の奥でお昼寝してた野良ネコちゃんがびっくりして飛び出していったわね。"
      }
    ]
  },
  {
    "stageId": "d9193199-6424-5df5-b90b-3fd3665c6a67",
    "requestTitle": "珈琲豆の秘密金庫とマスターのこだわり",
    "client": "moka",
    "intro": [
      {
        "speaker": "moka",
        "emotion": "normal",
        "text": "うちの秘蔵ブレンド豆をしまった金庫の番号、ちょっとど忘れしてしまってね。ヒントに合わせてピタリと当ててくれないかい？"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "モカさんでも忘れ物するんだね！よし、大きい小さいのヒントを見ながら一発で開けちゃうよ！"
      }
    ],
    "outro": [
      {
        "speaker": "moka",
        "emotion": "happy",
        "text": "助かったよ。番号は「お気に入りのマグカップの数」だったか……いや、内緒にしておいてくれ。"
      }
    ]
  },
  {
    "stageId": "eb488e99-3eeb-56ad-8db6-716fca47d7b3",
    "requestTitle": "シュッシュッと噴き出す蒸気ドアの向こう",
    "client": "poppo",
    "intro": [
      {
        "speaker": "poppo",
        "emotion": "panic",
        "text": "郵便倉庫の金庫を開けようとしたら、手前の蒸気ドアがシューシュー閉まったり開いたりして進めません〜！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "タイミングを見計らって「せーの！」で潜り抜けるカニ！あせって挟まれるとペチャンコになっちゃうロボ！"
      }
    ],
    "outro": [
      {
        "speaker": "poppo",
        "emotion": "happy",
        "text": "ひゃ〜、お見事です！僕だったら絶対にしっぽの羽を挟んでました……。"
      }
    ]
  },
  {
    "stageId": "d78a5e8c-49cf-5a67-85b6-81d77e50f861",
    "requestTitle": "変数の影（シャドーイング）と座標比較の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「cmp(&target) / 変数計算」を使う依頼が届いたよ。Rustでは let x = x  2; のように同じ名前で変数を上書き（シャドーイング）して型や値を整理できます。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "必要な手順を整理して、工房のロボットに解決してもらおう！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "できた！ダイヤル(18)を解いたあと、5歩進んでゴール (5, 1) に到達。教わった「cmp(&target) / 変数計算」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "bffca818-f6e4-50f8-b50f-4ff61be8ee4e",
    "requestTitle": "二分探索ダイヤルと角曲がりの依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「match Ordering / 二分探索パズル」を使う依頼が届いたよ。Ordering::Less なら low = guess + 1、Ordering::Greater なら high = guess - 1 に更新して中央値 guess = (low + high) / 2 を試すと"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "必要な手順を整理して、工房のロボットに解決してもらおう！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "できた！10ティック以内にダイヤル(13)を解き、ゴール (4, 1) へ到達。教わった「match Ordering / 二分探索パズル」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "1df14795-f8d1-5b67-80ef-75c29087e00d",
    "requestTitle": "逆算ダイヤルとスイッチの鍵の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「Ordering + スイッチパズル」を使う依頼が届いたよ。目的地の順序に応じて「スイッチを踏みゲートを開く」「ダイヤルを解く」「ゴールへ向かう」の順番をプログラム内で組み立てましょう。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "必要な手順を整理して、工房のロボットに解決してもらおう！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "できた！スイッチを踏み、ダイヤル(11)を解いて 15ティック以内にゴール (4, 1) へ。教わった「Ordering + スイッチパズル」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "7ba5c375-80ef-52b3-bf2c-e4c386b2aab2",
    "requestTitle": "第2章マスター：二分探索とコンベア回廊の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「第2章最終チャレンジ」を使う依頼が届いたよ。探索アルゴリズムでティック数を抑えることで、後続の移動・スパーク待ちにも十分な余裕が生まれます。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "必要な手順を整理して、工房のロボットに解決してもらおう！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "できた！1〜50を二分探索し、コンベア＆スパークを越えて 14ティック以内にゴール (6, 2) へ。教わった「第2章最終チャレンジ」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  }
];
