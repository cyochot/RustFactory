import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_14: StageStoryEntry[] = [
  {
    "stageId": "20649eef-f71c-5821-b966-a1e23b920e2f",
    "requestTitle": "お急ぎダッシュ！最短コースをかけ抜けろ",
    "client": "poppo",
    "intro": [
      {
        "speaker": "poppo",
        "emotion": "panic",
        "text": "お祭りのチラシ配りが遅れそうです！今日は「お急ぎオプション」をオンにして最短歩数で駆け抜けたいです！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "お急ぎモード発動カニ！ハサミを後ろに流して空気抵抗を減らすロボ〜！"
      }
    ],
    "outro": [
      {
        "speaker": "poppo",
        "emotion": "happy",
        "text": "スイスイ進んで新記録達成です！これならお昼寝の時間もたっぷり確保できます〜。"
      }
    ]
  },
  {
    "stageId": "1d1d1eae-a488-5133-9fdd-a0b378a96eaa",
    "requestTitle": "店の奥から「お急ぎ窓口」を開放せよ！",
    "client": "moka",
    "intro": [
      {
        "speaker": "moka",
        "emotion": "normal",
        "text": "店の奥に隠れている便利な道具を、玄関からひと声かけるだけで使えるように表へ出しておいてくれるかい？"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "受け渡し窓口を玄関にポンッと移しておけば、走ってきたまま立ち止まらず受け取れるよ！"
      }
    ],
    "outro": [
      {
        "speaker": "moka",
        "emotion": "happy",
        "text": "見た目もシンプルで速い！いいお店番になってきたね。"
      }
    ]
  },
  {
    "stageId": "9de2fcd1-59e3-5e8c-85a5-46e76c89a7c2",
    "requestTitle": "数え役と走り役の二人三脚リレー",
    "client": "coppe",
    "intro": [
      {
        "speaker": "coppe",
        "emotion": "normal",
        "text": "「計算する係」と「走る係」のふたりで協力して、確認チェックもしながらパンを届けてみよう！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "僕が走る係カニ！計算はしっかり者の誰かにお願いするロボ！"
      }
    ],
    "outro": [
      {
        "speaker": "coppe",
        "emotion": "happy",
        "text": "チェック合格も配達もバッチリ！息の合ったチームワークだね！"
      }
    ]
  },
  {
    "stageId": "12c1af9f-0396-5ba7-826d-d039f93befd9",
    "requestTitle": "制限時間内にゴール！かけっこ大会！",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "町内かけっこ大会のタイムアタックだよ！ムダな寄り道をぜんぶ省いて、制限時間内にゴールへ飛び込もう！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "一等賞の金メダル（チョコ味）は僕のものカニ！よーいドンロボ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "すごいスピードで新記録！はい、お約束のチョコレート金メダルだよ！"
      }
    ]
  },
  {
    "stageId": "a47779e1-d34b-5350-879c-9f257d73aec7",
    "requestTitle": "タイムアタック！ベルト加速＋#[cfg(feature=\"fast\")]の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「cfg(fast) + ベルト加速」を使う依頼が届いたよ。環境側の加速（搬送ベルト）とプログラム側のリリース最適化（#[cfg(feature = \"fast\")]）を合わせると極限の短時間航行が可能になります。"
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
        "text": "できた！fast 最適化とコンベア利用で 4ティック以内にゴール (5, 1) へ。教わった「cfg(fast) + ベルト加速」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "cdecc4e1-f218-52f7-8f00-8c8273122a40",
    "requestTitle": "2クレート協調タイムアタック（ダイヤル＋L字）の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「ワークスペース + ダイヤル + fast」を使う依頼が届いたよ。複数モジュールの計算結果をそのまま最短移動へつなぎ、余計なウェイトなしで目標を達成します。"
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
        "text": "できた！2テスト合格＋ダイヤル(5)＋L字ゴール (3, 3) を 9ティック以内で達成。教わった「ワークスペース + ダイヤル + fast」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "d7f2d369-4988-5e3c-a141-7effcf5a3db9",
    "requestTitle": "第14章マスター：最短リリース便＋全設備制覇の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「第14章 パズル総仕上げ」を使う依頼が届いたよ。不要な待ち時間を削りつつ必須の安全検査とテストをすべてパスさせるリリース品質の設計です。"
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
        "text": "できた！fast 最適化でコア検査・強化⚡4+・スイッチ突破を 10ティック以内に達成。教わった「第14章 パズル総仕上げ」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "dbacae9d-d4be-50b7-b0c8-74faf457c401",
    "requestTitle": "再エクスポートクレート＋テスト＋スイッチ高速突破の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「mod pub + #[test] + maxTicks」を使う依頼が届いたよ。ライブラリの公開APIを単体テストで検証したうえで、fast ビルドで制限時間内にタスクを完了させます。"
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
        "text": "できた！テスト合格＋スイッチ連動ゲート通過を 6ティック以内で達成。教わった「mod pub + #[test] + maxTicks」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  }
];
