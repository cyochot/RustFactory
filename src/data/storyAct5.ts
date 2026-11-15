import { StageStoryEntry } from '../types/game';

export const STORY_ACT5: StageStoryEntry[] = [
  // ===== 第2章：お祭り屋台の準備で大わらわ (2-1 〜 2-8) =====
  {
    stageId: 'cc3aa3b6-256c-5917-8355-bdb415791494',
    requestTitle: 'いろんなお店のお祭りロボ大集合！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お祭り実行委員でね、パン屋・花屋・喫茶店の出し物ロボットを同じステージ上に並べてパレードしたいの！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '形はちがっても「お祭りを盛り上げるぞ！」って気持ちはみんな同じカニ！並んで行進ロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'わぁ、いろんなお店のロボが仲良く順番に動いて素敵なお祭りになりそう！',
      },
    ],
  },
  {
    stageId: 'c419f437-352b-5f1d-8298-e4c37e52a12a',
    requestTitle: 'バネ式と歯車式、仲良く屋台を動かそう',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'ビヨーンと跳ねるバネ式と、カチカチ回る歯車式、仕組みは全然ちがうけど両方合わせて屋台を動かしたいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'バネも歯車も力を合わせれば100人力カニ！……って、バネが跳ねすぎて屋根に届きそうロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'ちがうパーツの合体パワーで金庫もゴールもスッキリ達成だ〜！',
      },
    ],
  },
  {
    stageId: '7a5d0c50-d5f6-588f-9f29-ae1174a234f5',
    requestTitle: 'ひみつのレジ箱、中を勝手に触らないで！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '屋台の売上箱、外から勝手に中身をいじられないように「入れる」「合計を見る」だけの小窓から使いたいんだ。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！大事な中身は箱の中にしっかり隠して、決まった小窓からだけ出し入れすれば計算間違いもゼロだよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'これなら誰がレジ番をしても計算が狂わなくて安心だね。',
      },
    ],
  },
  {
    stageId: '8cb63b66-a58b-569e-ae65-433de5ecea2a',
    requestTitle: '充電して発進！お祭り屋台トラック',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '「準備して充電する」「L字に走る」の2つの仕事ができる屋台カートで、広場までお届けお願いできますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '手順どおりに充電して、屋台がひっくり返らないようゆっくりカーブを曲がろうね！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '手順通りに充電して曲がって、ぴったり屋台に届きました！',
      },
    ],
  },
  {
    stageId: '0ab6754a-d4df-54ac-a77f-e80fc746a157',
    requestTitle: '「よし、出発！」の承認ハンコ待ち',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'あっ！準備中の屋台を勝手に動かそうとしたら「まだハンコが押されてないよ！」ってブレーキがかかったカニ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'あはは、安全ブレーキが効いてるね！まずは「準備OK」のハンコを押してから発進しよう！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '「確認ヨシ！」でカチッと発進するの、プロっぽくてかっこいいカニ！',
      },
    ],
  },
  {
    stageId: 'bee5e43c-ba0a-5915-a8bd-4412c17f2ead',
    requestTitle: '広場の大ランタン、点灯までの3ステップ',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '広場の大ランタン、「下書き」→「審査中」→「点灯許可」の順番を飛ばさずに、きちんと手順を踏んで明かりをともしたいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'せっかちに順番を飛ばそうとしてもダメな仕掛けだね！一歩ずつ確実に点灯まで進めよう！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'あたたかい灯りがともったね。夜の広場がぐっと華やかになったよ。',
      },
    ],
  },
  {
    stageId: '661f50ef-b06b-5e02-b076-2228c88a0e8e',
    requestTitle: '省エネお散歩＆ターボダッシュの二段階！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '最初はのんびり2歩だけ、角を曲がったらターボに切り替えて3歩進んでほしいわ。気分で切り替えられるかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'のんびり〜からの、ターボ全開カニ！！切り替えタイミングを見逃さないロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '滑らかなギアチェンジで、ぴったりゴールにおさまったわね♪',
      },
    ],
  },
  {
    stageId: '70cb7557-cf2f-57ca-8b60-541cbead8dc1',
    requestTitle: '屋台パレードの安全確認＆ゲート開放！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '屋台準備の総まとめ！出発ハンコを押してからみんなで走り出して、スイッチを踏んでゲートをくぐろう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お祭りの屋台、どれもおいしそうでヨダレが垂れそうカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '屋台の準備は完璧！さあ、お楽しみの福引き大会の準備に行こう！',
      },
    ],
  },

  // ===== 第3章：福引き大会のあたりくじ騒動 (3-1 〜 3-8) =====
  {
    stageId: 'a4e95ee9-d55c-5c3b-aa42-63d292e22a0e',
    requestTitle: '福引きボックスの中身、ひと目でバラバラ仕分け',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'お祭りの福引きボックスに、賞品の数やら歩く数やらがいっぱい詰まってるんだ。一気に取り出して整理したいな！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '箱をパカッと開けて中身を仕分けるカニ！……あっ、特賞の黄金パン券がキラッと光ってるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '特賞の「黄金クロワッサン券」もばっちり揃ったよ！みんな喜んでくれるぞ〜！',
      },
    ],
  },
  {
    stageId: '7e0db7bd-3d57-50a0-93b7-78ecaeff3f76',
    requestTitle: '配達ルートとおまけ賞品のすっきり整理',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '配達ルートのペア数字と、おまけ賞品が入ってるかどうかの確認をすっきり済ませて屋台へ運んでほしいわ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '必ず入ってるルートとおまけの賞品を綺麗に分けて、L字の屋台まで一気にお届けしよう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '賞品も配達もまとめて片付いて助かったわ♪',
      },
    ],
  },
  {
    stageId: '2408bb72-9259-5dd6-ba85-f9857cf291a5',
    requestTitle: '「1か2」と「3から5」、福引きの点数を一気分け！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '抽選チケットの番号が「1か2」のときと「3から5」のときで景品を分けたいんですが、パッと見で振り分けられますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'グループごとにまとめて箱を用意しておけば、何百枚チケットが来ても一瞬でさばけるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '福引き会場の集計がびっくりするほど速くなりました！行列もスイスイです！',
      },
    ],
  },
  {
    stageId: '6032bb13-8be5-517d-95d7-784a910560e3',
    requestTitle: 'お祭り無線「3歩進め！」の合図を解読',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'お祭り会場から飛んでくる無線メッセージの数字を読み取って、その場でロボットを動かしてくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ピピガガッ……「パンを3つ食べろ」って聞こえたカニ！？……うそ、「3歩進め」だったロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '聞き間違いかと思ったらちゃんと正確に動いたね。見事だよ。',
      },
    ],
  },
  {
    stageId: '7bafe10a-2ef4-517f-b48f-9256122665f4',
    requestTitle: '迷子札のぴったり条件探し！落とし物係',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: 'お祭りの落とし物係を任されたんですが、「番号が範囲内で、しかも条件つき」の札だけ拾い出したいんです！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '細かい条件のフィルターを掛けながらお目当ての番号をキャッチしよう！これでお祭り当日の迷子もすぐ見つかるね！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'お目当ての落とし物札が一瞬で見つかりました！安心です！',
      },
    ],
  },
  {
    stageId: '331c57e3-ad96-5e04-b779-c1c7a378c808',
    requestTitle: 'あたり番号3〜5だけ金庫へぽいぽい回収！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '並んだ番号札の中から「3から5」の当たり番号だけをそのまま受け取って金庫に入れ、L字ゴールへ向かってほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '3と4と5だけ拾うカニ！ほかの数字には見向きもせずクールに素通りするロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '当たりだけの合計パワーがバッチリ貯まったよ！景品も豪華にできそうだ！',
      },
    ],
  },
  {
    stageId: 'b4374fe3-6426-5e4b-ab02-e93453235b97',
    requestTitle: '長い荷物伝票、いるところだけチラ見！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '大きな荷物伝票の中で、本当に必要なのは最初の数字だけなの。残りの飾りは読み飛ばして受け取れるかしら？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'いらない所は「見ないよ〜！」ってサッと飛ばして、欲しい数字だけ受け取っちゃおう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '余計な情報に惑わされず、本当に欲しい数字だけ取れたわね！',
      },
    ],
  },
  {
    stageId: '6881bf72-be99-592e-99bc-f6ad3df32748',
    requestTitle: '福引き司令室からゲートへ突撃！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '複雑な伝票も番号札も一瞬で仕分けられるようになったね！条件をぜんぶ見極めて連動ゲートをカッコよく突破しよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '福引き会場のマスター、フェリスちゃんにおまかせカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '完璧！次はいよいよ広場の大きなからくり時計を直しに行くよ！',
      },
    ],
  },

  // ===== 第4章：広場のからくり大時計 (4-1 〜 4-4) =====
  {
    stageId: '62c16d48-5006-58eb-a279-15dc4fbab59e',
    requestTitle: '広場の古いからくり時計、最後のネジ調整！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'お祭り広場の古いからくり時計、最後の微調整だけは安全カバーを外して歯車をそっと触る必要があるんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'ど、どきどき……ハサミが滑ってバネがビヨーンって飛び出さないよう、息を止めてそっと調整するカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'チクタク、カチッ……完璧なリズム！時計台の針もご機嫌に動き出したよ！',
      },
    ],
  },
  {
    stageId: '63517659-1139-5cc9-9399-c16490d7cf29',
    requestTitle: '熟練の時計調整、安全ラインの中で慎重に',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '時計職人向けの特別な調整作業が用意されているんだが、うっかり触れないよう安全な範囲をはっきり囲って使う決まりなんだよね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '立ち入り禁止テープを張って慎重に作業して、大事な調整パワーをしっかり取り出そう！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '危ない場所を狭い範囲に閉じ込めつつ、精密な調律値が取り出せたね。さすがだ。',
      },
    ],
  },
  {
    stageId: '7e58cc7c-831e-5f71-a098-53511a88fcf7',
    requestTitle: 'お好みのステップを唱える魔法の呪文！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '「指定した数だけ進んで右を向く」っていうお決まりの動き、短い呪文を唱えるだけでパッと広がったらカッコいいな！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ちちんぷいぷい、カニカニダッシュ〜！って唱えたら勝手に足が動く魔法みたいで楽しいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'ほんとに魔法の呪文みたいにスッとL字に到着したよ！すごいね！',
      },
    ],
  },
  {
    stageId: '62a4650f-fe84-5fda-836a-c0036f5ffe9b',
    requestTitle: 'ボーン！広場の時計台グランドオープン！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ついに時計台のお披露目だよ！基準値の歯車をピタッと合わせて、自家製の号令でゲートを抜け、鐘を鳴らそう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'これで町中の時計がピタリと合ったカニ！いよいよお祭り本番の始まりロボ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ボーン、ボーン！時計台の鐘が鳴り響いたよ！さあ、町の全員で最高のお祭りを始めよう！',
      },
    ],
  },

  // ===== 第5章：歯車町みんなでお祭り本番！ (5-1 〜 5-4) =====
  {
    stageId: 'e5174596-ce40-5101-8458-936adfaa471e',
    requestTitle: 'お祭り屋台が超満員！みんなで分担さばき！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お祭り当日の仕込み注文がどんどん届くぞ〜！2人の働き手を常駐させて、次々くる注文を順番にさばいてほしいんだ！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！待機チームを組んでおけば、注文が3つでも4つでも順番にどんどん片付くよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'さすが働き者チーム！焼きそばパンもコロネも詰まらずスイスイ片付いたよ〜！',
      },
    ],
  },
  {
    stageId: '4afacd4d-4762-58fe-a29a-d9d840ab00a1',
    requestTitle: '4つの屋台から「おかわりー！」大合唱',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '4つの屋台から同時にお願いが飛んできているの！それぞれのブースへ金庫チャージと「おっけー！」の返事を届けられるかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'あっちもこっちもお祭り騒ぎカニ！全ブースへ全力で「おっけー！」をお届けするロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '全ブースにピカッと元気な返事が届いたわ！お客さんも大喜びね♪',
      },
    ],
  },
  {
    stageId: 'bbc23ec8-df92-58c5-9893-853e4f7ed3e3',
    requestTitle: 'お祭りの夜、みんなお片付け終わるまで待とう',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '夜の部が終わるとき、途中の作業を抱えたまま急に電気を消しちゃかわいそうだ。全員が終わるのを待ってから仲良く店じまいしよう。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '「みんなお疲れさま〜！」って最後の1人が片付け終えるまで見守ってから、ゆっくりおやすみの明かりを消そうね！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '綺麗に片付けて、明かりを落としておしまい。実に温かい仕事ぶりだね。',
      },
    ],
  },
  {
    stageId: '9f448eba-db6a-5cb2-b0e7-68f02e74f4e5',
    requestTitle: '歯車町のお祭り、みんな大集合グランドフィナーレ！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お祭りクライマックス！パン・お花・手紙・コーヒーの注文が町中からどっさり届いてるよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'フェリスちゃんもみるく号も、町のみんなも心をひとつに！最後の注文をすべて届けきって、最高のお片付けで締めくくろう！！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お祭り大成功ね！町のどこを見ても、くるみちゃんとロボたちの笑顔があふれてるわ。',
      },
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '全192もの頼みごと、本当にお疲れさま。今夜は喫茶店の特製ココアと焼き立てパンで、みんなで盛大に乾杯しようか。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ここまで一緒に遊んでくれてありがとうカニ！これからも「鉄と歯車のからくり工房」のドタバタな毎日をよろしくロボ〜！！',
      },
    ],
  },
];
