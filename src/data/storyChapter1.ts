import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_1: StageStoryEntry[] = [
  {
    "stageId": "3d738a54-da4a-52c6-b1cb-c05b7553fc60",
    "requestTitle": "看板カニのフェリス、初出勤でずっこけ",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "今日から「鉄と歯車のからくり工房」がオープンだよ！フェリスちゃん、まずは玄関の旗までカッコよく歩いてお客さんをお迎えして！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "まかせるカニ！看板カニとして華麗なウォーキングを見せちゃうカニ……あれっ、自分のハサミで足がもつれたカニ！？"
      }
    ],
    "outro": [
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "なんとか旗までたどり着いたカニ！……ふぅ、今の転びかけは「そういうダンス」ってことでごまかすカニ！"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "あはは、前途多難だけど楽しそう！さあ、これから町のみんなのお手伝いがたくさん来るよ！"
      }
    ]
  },
  {
    "stageId": "d9ea670f-238a-54b4-879b-8201d9706c66",
    "requestTitle": "右曲がりが苦手なカニの特訓",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "ferris",
        "emotion": "panic",
        "text": "くるみちゃん大変カニ！まっすぐ歩くのは得意なんだけど、カニだから横歩きしかできなくて角が曲がれない気がするカニ！"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "いやいや、フェリスちゃん前向きに歩けてたじゃん！とりあえず角を右に曲がる練習をしてみようよ！"
      }
    ],
    "outro": [
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "キュキュッと右折できたカニ！僕、カニ界の革命児かもしれないカニ〜！"
      }
    ]
  },
  {
    "stageId": "5da9d1d4-abaa-508e-aabc-f56914cf3969",
    "requestTitle": "お花畑でダンス！？ジグザグ水やり",
    "client": "mimosa",
    "intro": [
      {
        "speaker": "mimosa",
        "emotion": "normal",
        "text": "こんにちは、くるみちゃん！花壇のチューリップを踏まないように、じょうろを持ってジグザグに歩いてもらえるかしら？"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "お花のあいだを華麗にステップするカニ！……あれ、水をまきすぎて自分の頭がびしょ濡れカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "mimosa",
        "emotion": "happy",
        "text": "お花は元気いっぱいだし、ついでにフェリスちゃんのホコリも落ちてピッカピカになったわね♪"
      }
    ]
  },
  {
    "stageId": "f82c6a65-fb35-5d1b-8409-c3354d315bdd",
    "requestTitle": "小麦粉の山とぐるぐる迷子",
    "client": "coppe",
    "intro": [
      {
        "speaker": "coppe",
        "emotion": "panic",
        "text": "大変だ〜！特売の小麦粉を買いすぎたら通路のど真ん中が山になっちゃって、奥の棚まで遠回りしないと通れないんだよ！"
      },
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "コッペさん、毎回買いすぎだってば！フェリスちゃん、つまみ食いしないでぐるっと回り込んで届けてきて！"
      }
    ],
    "outro": [
      {
        "speaker": "coppe",
        "emotion": "happy",
        "text": "お見事！粉まみれにもならず一発到着だ。お礼に焼きたての塩パンをどうぞ〜！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "もぐもぐ……焼きたて最高カニ！（ほっぺが粉だらけ）"
      }
    ]
  },
  {
    "stageId": "56ba2a08-9045-5e05-a06d-61cd7405338b",
    "requestTitle": "連動スイッチの順序制御の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「状態遷移 / スイッチ / ゲート」を使う依頼が届いたよ。スイッチの状態変化を利用して、閉じたゲートを通過できます。"
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
        "text": "できた！スイッチ (1, 1) を作動させてゴール (6, 1) へ。教わった「状態遷移 / スイッチ / ゲート」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "370edeb4-9a0c-5c13-9068-2b556311ff20",
    "requestTitle": "二段コンベアの最短経路の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「経路最適化 / コンベア」を使う依頼が届いたよ。移動先の環境を先読みすると、少ない操作で長い距離を進めます。"
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
        "text": "できた！二つのコンベアを使い4ティック以内にゴール。教わった「経路最適化 / コンベア」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "056e99f3-0ba8-5565-b054-7898e7d05c9d",
    "requestTitle": "モカさんのマグカップ行方不明事件",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "モカさん、お気に入りのマグカップが見当たらないんだって。さっきから手に持ったまま探してるけど……気づくかな？"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "くるみちゃん、僕のはさみの間にも何か挟まってるカニ！……あっ、クッキーだったカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "あったよ。手に持っていたのを忘れて、カウンターの上をずっと探していたみたいだ。……お茶を淹れて一服しよう。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "お茶の横にクッキーも置いたら、さっきハサミに挟まってたのとそっくりカニ！"
      }
    ]
  },
  {
    "stageId": "48e019d2-b72d-58e6-9d3a-bab9d88bec16",
    "requestTitle": "連動スイッチの順序制御の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「状態遷移 / スイッチ / ゲート」を使う依頼が届いたよ。スイッチの状態変化を利用して、閉じたゲートを通過できます。"
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
        "text": "できた！スイッチ (1, 1) を作動させてゴール (3, 1) へ。教わった「状態遷移 / スイッチ / ゲート」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "0d8bcb34-fd7a-5522-9511-5f5740dd9a69",
    "requestTitle": "二段コンベアの最短経路の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「経路最適化 / コンベア」を使う依頼が届いたよ。移動先の環境を先読みすると、少ない操作で長い距離を進めます。"
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
        "text": "できた！二つのコンベアを使い4ティック以内にゴール。教わった「経路最適化 / コンベア」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "0ade949b-3d7b-5a3c-8cc7-713d5b8450c1",
    "requestTitle": "ポッポさん、帽子がないよ！",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "ポッポさんが大事な配達帽をなくしちゃった！帽子をかぶってるのに、頭の上を探してるよ。郵便局までのまっすぐな道を一緒に歩きながら探そう。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "ぼ、僕の頭に？ ええっ、本当だ！帽子があるのに風で飛んだと思い込んでいました！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "見つかってよかったね。帽子を深くかぶり直したら、今度は目まで隠れちゃったよ！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "帽子を少し上げたら前が見えたカニ！……今度は羽根が鼻をくすぐるカニ〜！"
      }
    ]
  },
  {
    "stageId": "ea2c70b1-4a0b-5616-b4ad-ba8449d43429",
    "requestTitle": "連動スイッチの順序制御の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「状態遷移 / スイッチ / ゲート」を使う依頼が届いたよ。スイッチの状態変化を利用して、閉じたゲートを通過できます。"
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
        "text": "できた！スイッチ (1, 1) を作動させてゴール (4, 1) へ。教わった「状態遷移 / スイッチ / ゲート」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "f097b407-b547-5f31-90f7-d20b5e3d0141",
    "requestTitle": "二段コンベアの最短経路の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「経路最適化 / コンベア」を使う依頼が届いたよ。移動先の環境を先読みすると、少ない操作で長い距離を進めます。"
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
        "text": "できた！二つのコンベアを使い4ティック以内にゴール。教わった「経路最適化 / コンベア」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "63df2438-d620-5ce9-86bc-c3703825cf8f",
    "requestTitle": "コッペさんのパン、ふくらみすぎ！？",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "コッペさん、焼きたてパンがふくらみすぎてトレーからはみ出しちゃったんだって。お店の看板までパンの香りが届いてるよ！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "こんがりいい匂いカニ！看板の代わりにパンを掲げたら、お客さんが集まりそうカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "ふふっ、看板よりパンのほうが目立つわね。お客さんが来たから、焼きたてを並べましょう！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "看板の代わりにパンを持ったら、お客さんより先に僕が試食の列に並んでたカニ！"
      }
    ]
  },
  {
    "stageId": "d4dc4dd5-37fe-55b0-840d-6f5cd5c28449",
    "requestTitle": "連動スイッチの順序制御の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「状態遷移 / スイッチ / ゲート」を使う依頼が届いたよ。スイッチの状態変化を利用して、閉じたゲートを通過できます。"
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
        "text": "できた！スイッチ (1, 1) を作動させてゴール (5, 1) へ。教わった「状態遷移 / スイッチ / ゲート」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "df52b0f7-29aa-5965-8db4-b5616f725645",
    "requestTitle": "二段コンベアの最短経路の依頼",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "「経路最適化 / コンベア」を使う依頼が届いたよ。移動先の環境を先読みすると、少ない操作で長い距離を進めます。"
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
        "text": "できた！二つのコンベアを使い4ティック以内にゴール。教わった「経路最適化 / コンベア」が役に立ったね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "今回の学びを次の依頼にも活かしていこう！"
      }
    ]
  },
  {
    "stageId": "43ab1131-4d40-515c-a2d4-442f803d6756",
    "requestTitle": "ミモザさんの鉢植え、帽子をかぶる",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "ミモザさんの鉢植えに、風で飛ばない小さな帽子をかぶせるんだって。フェリスちゃん、鉢植えに自分の帽子を貸してあげて！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "似合うカニ？じゃあ僕は日よけに葉っぱをかぶるカニ！……あれ、頭が緑になったカニ！？"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "鉢植えもフェリスちゃんも、とってもおしゃれね。葉っぱの帽子は返してもらって、鉢植えには花柄の帽子を作りましょう♪"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "葉っぱの帽子を返したら、今度は花柄の帽子カニ？……あっ、鉢植え用だったカニ！"
      }
    ]
  },
  {
    "stageId": "3dc08e11-a91c-53de-9ebb-d47c15b5ecc1",
    "requestTitle": "お昼寝ネコに毛布をお届け",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "喫茶店の窓辺でネコちゃんがお昼寝中だよ。青いベルトのそばを通って、起こさないように毛布をそっとかけてあげよう。フェリスちゃん、寝息につられて一緒に寝ないでね！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "すやすや……僕も毛布の端っこで丸くなりたいカニ……はっ、いまはお手伝いカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "毛布がかかったわ。ネコちゃん、寝ぼけてフェリスちゃんのハサミを枕にしちゃったみたい♪"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "枕にされて動けないカニ……でもネコちゃんの寝顔がかわいいから、もう少しこのままカニ！"
      }
    ]
  },
  {
    "stageId": "7751d7c0-99d8-578b-8ac6-8a6b5e6045c2",
    "requestTitle": "コッペさんの試食パン、どれから？",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "コッペさんが新作パンを並べて、試食会をするんだって。蒸気門の向こうからも焼きたての香りがするよ。フェリスちゃん、まずは香りを楽しんでから、みんなにお皿を配ってね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "いい香りカニ！お皿を配る前に、僕のお腹へ試食を配ってもいいカニ？"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "みんなにちゃんと行き渡ったよ！フェリスちゃんの試食は……お皿が空っぽね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "あれれ、味見係としては満点だったカニ！おかわりは一個だけにするカニ！"
      }
    ]
  },
  {
    "stageId": "bf44af99-9150-56bf-8660-f45dfeaf1227",
    "requestTitle": "ポッポさんの配達かばんがパンパン！",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "ポッポさんの配達かばんが、お手紙とおやつでふくらんじゃった！ベルトの横でかばんの口が開いて、おやつが飛び出しそう。フェリスちゃん、押さえてあげて。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "おやつが飛び出す前にぎゅっと押さえるカニ！……あっ、僕のほっぺにクッキーが入ったカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "かばんが閉まって助かりました！クッキーは……あれ、フェリスちゃんのほっぺから出てきましたね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "これは緊急用の保存場所カニ！お手紙は一枚も食べてないカニ！"
      }
    ]
  },
  {
    "stageId": "9e823160-a764-556e-95b9-48f519d8e6c4",
    "requestTitle": "ミモザさんの花束、色合わせ大作戦",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "ミモザさんが花束を作ってるよ。赤い花と黄色い花を、庭の二つの飾り台に並べたら、フェリスちゃんが自分の赤いリボンもそっと混ぜちゃった！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "僕のリボンもお花の仲間カニ！……えっ、結び目がほどけて花束がくるくるカニ！？"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "赤と黄色に赤いリボン、よく似合うわ。フェリスちゃんのリボンは花束の持ち手に結んでおくわね♪"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "僕のリボンが花束デビューしたカニ！でも頭がちょっぴり寒いカニ〜！"
      }
    ]
  },
  {
    "stageId": "f57d3e58-9575-5163-8c39-5ba16985ba21",
    "requestTitle": "モカさんのコーヒー豆、いい香り！",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "モカさんが新しいコーヒー豆を焙煎したよ。お店いっぱいに香りが広がって、フェリスちゃんの鼻がくんくん止まらない！焙煎機のそばでは小さな火花がぱちぱちしてるよ。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "この香り、ふわふわの雲みたいカニ〜！豆を一粒だけ見せてもらうカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "豆を挽く前から楽しんでくれてうれしいよ。フェリス、鼻がくすぐったくてくしゃみが出そうだね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "はっくしょん！……あっ、コーヒーの泡がハートになったカニ！"
      }
    ]
  },
  {
    "stageId": "e34ed4af-4924-5008-9856-45f158f643a8",
    "requestTitle": "花屋さんの臨時お茶会、大盛況！",
    "client": "mimosa",
    "intro": [
      {
        "speaker": "mimosa",
        "emotion": "normal",
        "text": "今日は花屋さんの庭でお茶会！ミモザさんが花柄のテーブルクロスを広げたら、風で飛んでいった帽子を追いかけてフェリスちゃんが庭をぐるぐる。奥の蒸気門の向こうでは、赤い光がちらちらしているよ。"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "帽子をつかまえたカニ！……と思ったら、ミモザさんの大きな花びらだったロボ！"
      }
    ],
    "outro": [
      {
        "speaker": "mimosa",
        "emotion": "happy",
        "text": "まあ、花びらを帽子にするのもかわいいわね。お茶菓子を並べたら、みんなでのんびりしましょう♪"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "花びらの帽子でお茶会も華やかだね！……ってフェリスちゃん、お茶菓子を帽子にのせないで！"
      }
    ]
  },
  {
    "stageId": "97cc03cb-b7c6-531c-85f4-775660346be9",
    "requestTitle": "パン屋の「いらっしゃいませ！」大音量事件",
    "client": "coppe",
    "intro": [
      {
        "speaker": "coppe",
        "emotion": "normal",
        "text": "焼きたてパンが並んだ合図に、元気よく店先で「おはよう！」って声かけしてくれるお迎え係をお願いしたいんだ。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "のど飴なめたから準備バッチリカニ！町中に響きわたる声であいさつするカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "coppe",
        "emotion": "happy",
        "text": "おお〜っ、元気がよすぎて屋根の上のハトまでお辞儀したよ！お礼のクリームパン置いとくね！"
      }
    ]
  },
  {
    "stageId": "c3cdcf8a-02f3-54a9-9358-f873fcb627de",
    "requestTitle": "出発まえの「いってきます！」忘れ",
    "client": "poppo",
    "intro": [
      {
        "speaker": "poppo",
        "emotion": "panic",
        "text": "あっ、また朝ごはんのトーストくわえたまま飛び出してきちゃいました！郵便局では「出発報告」と「到着報告」がルールなのに！"
      },
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "ポッポさん、まず落ち着いてパンを飲み込もうね。フェリスちゃんが代わりに出発と到着のあいさつ、ちゃんとしてくるよ！"
      }
    ],
    "outro": [
      {
        "speaker": "poppo",
        "emotion": "happy",
        "text": "出発も到着もパーフェクトな礼儀正しさ！見習わなくっちゃ……。"
      }
    ]
  },
  {
    "stageId": "8fbca29b-fc90-5a12-b7f2-1038db1c6314",
    "requestTitle": "喫茶店の常連さん呼び出しトラブル",
    "client": "moka",
    "intro": [
      {
        "speaker": "moka",
        "emotion": "normal",
        "text": "おはよう。今日は混みそうだから、お客さんの番号札をカウンターで分かりやすく読み上げてくれると助かるんだがね。"
      },
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "モカさんおはよう！フェリスちゃん、注文した人の番号を間違えて「自分の年齢」とか言わないでね？"
      }
    ],
    "outro": [
      {
        "speaker": "moka",
        "emotion": "happy",
        "text": "よし、間違えずに届いたね。おかげでミルクの泡立てもちょうどよく仕上がったよ。"
      }
    ]
  },
  {
    "stageId": "fc1e8444-017a-5f77-a6d3-646044eec856",
    "requestTitle": "商店街の朝、フェリスのあいさつ大作戦",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "商店街のみんなに朝のあいさつをして回ろう！フェリスちゃん、元気なのはいいけど、寝起きのモカさんには小さめの声でね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "おはようカニー！今日も一日よろしくカニー！……あっ、声が大きすぎて看板がびっくりして揺れてるカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "みんな笑顔でお返事してくれたよ。モカさんだけはコーヒーをこぼさないよう、寝ぼけ顔で小さく手を振ってくれたね。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "おはようの声を少し小さくしたら、今度は自分に聞こえなかったカニ！朝の声量はむずかしいカニ〜！"
      }
    ]
  },
  {
    "stageId": "b022d65a-c79c-5290-93b0-e24c94ca7c37",
    "requestTitle": "ご近所あいさつ回りでぜんまい切れ！？",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "開店祝いのご近所あいさつ巡りだよ！U字の通りをぐるっと回りながら、パン屋さんも花屋さんも一気に挨拶しちゃおう！"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "あいさつのたびに手土産もらえる予感がするカニ！はりきって行くカニ〜！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "みんなと仲良くなれたし大成功！……ってフェリスちゃん、もらいすぎたお菓子で動きが重くなってるよ！"
      }
    ]
  },
  {
    "stageId": "88728e13-36e6-54a1-8354-99c8bc40d969",
    "requestTitle": "商店街の巨大サンドイッチ作り",
    "client": "kurumi",
    "intro": [
      {
        "speaker": "kurumi",
        "emotion": "normal",
        "text": "商店街のみんなで巨大サンドイッチを作るよ！コッペさんのパンに、ミモザさんのレタスとモカさんのトマトをのせて、最後にフェリスちゃんが旗を立ててね。工房のベルトの上を大きなお皿がゆっくり流れてくるよ。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "任せるカニ！旗を高く……あっ、僕の頭に刺さっちゃったカニ！"
      }
    ],
    "outro": [
      {
        "speaker": "kurumi",
        "emotion": "happy",
        "text": "旗も立ったし、サンドイッチの完成！フェリスちゃん、その旗は食べられないよ。"
      },
      {
        "speaker": "ferris",
        "emotion": "happy",
        "text": "ええっ、飾りのピックじゃなかったカニ！？あぶないところだったカニ〜！"
      }
    ]
  }
];
