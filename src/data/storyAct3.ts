import { StageStoryEntry } from '../types/game';

export const STORY_ACT3: StageStoryEntry[] = [
  // ===== 第13章：うっかり防止の安全マット (13-1 〜 13-12) =====
  {
    stageId: '30b7ab6e-c1d6-5da6-b49c-1d325b5fcc04',
    requestTitle: '空っぽの小箱を開けてドッキリ大騒ぎ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: 'うわぁっ！空っぽの小包を「何か入ってるはず！」って無理やり開けたら、びっくり箱みたいに機械が止まっちゃいました！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'そんな急に止まらなくてもいいのにね！空っぽだった時用の「予備の数字」を用意して落ち着いて進もう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ほっ……止まらずに予備プランで動いてくれました！安全マットって安心ですね。',
      },
    ],
  },
  {
    stageId: '31f89893-aee2-53ab-9ede-48b08dee2dd9',
    requestTitle: '風邪をひいた温度計と元気な温度計',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '焙煎機の温度計のうち1台がご機嫌ナナメで数字を教えてくれないんだ。予備の数字で補って動かせるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '1台がお休みなら、代わりに僕が手で触って「あったかいカニ！」って測ってあげるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'ハサミが焦げなくてよかったよ。予備の数字のおかげでお店を止めずに済んだね。',
      },
    ],
  },
  {
    stageId: '0c8e7fea-a205-584d-9f37-d4d0f1659487',
    requestTitle: '予備バッテリーでL字おつかい走破',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '予備バッテリーが空っぽのときでも、奥の手のバックアップを取り出して金庫を満たし、角を曲がってほしいの。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'もしもの時のための予備プランをセットしておけば、どんなハプニングが起きてもゴールまでたどり着けるよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'バックアップのおかげで止まらず届いたわね。とっても心強いわ♪',
      },
    ],
  },
  {
    stageId: 'fecb5db3-4f07-5baf-acbe-87c4035235a5',
    requestTitle: 'パン焼きタイマーのあわてんぼう停止を直せ！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'あわわ、パン焼きタイマーが「ちょっとでも焦げそう！」ってすぐ非常ベルを鳴らして止まろうとしてるよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '本当に危ない時だけ止まるように見直せば、焦げずにスイッチを踏んでゲートを抜けられるよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '焦げずにふわふわパンが取り出せたし、安全装置もばっちりだね！',
      },
    ],
  },
  {
    stageId: 'd0ae5f54-2197-50fa-9847-9d1206122074',
    requestTitle: 'たまごパックの「割れあり」見分け術',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '仕入れた卵パック、たまに「ヒビ割れあり」が混ざってるんだ。無事な卵だけ運んで、割れてたらやり直したいな。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'そーっと運ぶカニ！……あっ、つるっと滑ってたまごが宙を舞った……セーフ！キャッチしたロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '割れた卵もきちんと見分けられたし、無事にふわふわプリンが焼けそうだよ！',
      },
    ],
  },
  {
    stageId: '7b9aba47-b647-55a6-ac6f-bb5628471879',
    requestTitle: 'おつかいメモが雨でにじんだ時の代替ルート',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: 'おつかいメモが失敗印だったとき、そこで立ち止まらずに安全な代わりの歩数でゴールへ向かえますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '大丈夫！「成功した時」と「失敗した時」の両方の動きを決めておけば、雨の日でも迷わず進めるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '失敗印が出てもニコニコ代替ルートで届けてくれて助かりました！',
      },
    ],
  },
  {
    stageId: '190eda01-8414-5c6a-82d4-c243fb94df7d',
    requestTitle: 'モカさん直伝・豆の「合格・やり直し」選別',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'コーヒー豆の検品を自分でやりたいんだけど、合格なら「よし」、ダメなら「やり直し」って返事する仕組みにできるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ダメな豆は僕がハサミでパチンと弾き飛ばすカニ！……あ、それモカさんの大事なマグカップだったロボ！？',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'マグカップはギリギリセーフだったね。おかげで不良豆をきちんと弾けるようになったよ。',
      },
    ],
  },
  {
    stageId: '23405996-2992-5507-8492-e6961dbe4a43',
    requestTitle: '合格シール付きの光の玉だけ納品！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '検査を通ったピカピカの玉だけをしっかり受け取って、金庫をチャージしながら納品台へ運んでもらえるかしら？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '合格シール付きの玉だけを厳選して、確実にゴールと納品を決めよう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '品質バッチリの玉が届いたわ！安心ね♪',
      },
    ],
  },
  {
    stageId: '64c273dd-e5b8-5a07-b2ce-c8fc0e6505fd',
    requestTitle: '伝言リレーのチェックが長すぎて目が回る〜',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '確認する手順が増えてメモが何段にも重なっちゃって、読んでるだけで目がグルグル回りそうです〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'そんなときは「ダメならそのまま上へパス！」の合図を使えば、伝言メモがスッキリ1本道になるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'わあ、短いのにちゃんとチェックできてる！おめめパッチリです！',
      },
    ],
  },
  {
    stageId: '2b843031-35fa-56e4-b78e-0b0c1745840c',
    requestTitle: '小麦粉と卵のダブル確認を一気につなごう',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '小麦粉のチェックと卵のチェック、2つ連続で確認してからパン焼き金庫に入れたいんだけど、もっと手短に書けないかな？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '1個目よし！2個目よし！ダメなら即Uターン！これでサクッと焼き上がりが早くなるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '読みやすくてミスもなし！まるで魔法のレシピブックみたいだね！',
      },
    ],
  },
  {
    stageId: 'e8bba780-ccd3-5cd3-986e-997f4979a8af',
    requestTitle: '伝言が戻ってきたあとのフォロー大作戦',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'おつかい先から「ダメでした〜」って伝言が返ってきた時、親元でしっかり受け止めて安全に進みたいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '一番上の担当がしっかり受け止めて代わりの作戦に切り替えれば、トラブルが起きてもへっちゃらだね！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '下から上まで責任のリレーがつながっているね。頼もしいよ。',
      },
    ],
  },
  {
    stageId: 'e204841a-48fc-5a37-952f-a00f0e10c9be',
    requestTitle: 'どんなハプニングもへっちゃら航行！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '安全対策の総まとめ！予備プランとトラブル回避を組み合わせて、スイッチを押してゲートを堂々と越えよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '転んでもタダでは起きない、タフなカニロボに進化したカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'どんなトラブルが起きても止まらなくなったね！さあ、明日はもっと便利な道具を作ってみよう！',
      },
    ],
  },

  // ===== 第14章：なんでも運べる魔法のトレイ (14-1 〜 14-12) =====
  {
    stageId: '814eb34c-a41c-5c6b-8eea-651e248a469b',
    requestTitle: 'お花もパンも乗る万能おぼん',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お花用のトレイと、パン用のトレイ、形はおんなじなのに別々に用意するのはもったいないわよね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それなら「何を乗せてもぴったり収まる万能トレイ」を1つ作っちゃえば解決だね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お花も光の玉もすっぽり運べるわね！洗い物も減ってエコだわ〜。',
      },
    ],
  },
  {
    stageId: 'a9910c82-84a5-5e5e-abcf-75706a78d6eb',
    requestTitle: 'おそろいパン2個入りの仲良しボックス',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'おそろいの2つをセットで入れる箱を作って、それぞれの数だけ右と下へ歩いてほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'クリームパン2個入りボックスカニ！？おそろいで見た目もかわいいし、なんだかおめでたいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'ペアセットでばっちりゴールできたね！お土産にもぴったりだ！',
      },
    ],
  },
  {
    stageId: '581e38ad-f1a7-5277-bd7d-5df7a4769556',
    requestTitle: '万能トレイに便利な取り出し口をつけよう',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'どんなものでも入る箱に、いつでも同じ手順で中身を取り出せる小窓をつけられるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'おやすいごよう！中身がコーヒー豆でもお菓子でも、同じ「取り出す」ボタン1つでスッと出せるようにしておくよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '中身を気にせず同じ手つきで扱えるのはとても気持ちがいいね。',
      },
    ],
  },
  {
    stageId: 'dcacc81e-6cfa-53a1-ab53-9c2ecc9e4126',
    requestTitle: '手紙とキャラメル、ちがう種類の仲良しコンビ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '「お届け先の名前」と「歩数」みたいに、違う種類の2つをセットにして落とさないよう持ち歩きたいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '「左のポケットに手紙、右のポケットにオヤツ」みたいに合体セットにすれば絶対バラバラにならないカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '宛先と歩数がズレずにずっと一緒だから迷子ゼロですね！',
      },
    ],
  },
  {
    stageId: 'd39e7fc6-3812-56fd-bce7-72c69cd529bf',
    requestTitle: 'フェリスとみるく号、おそろいの号令！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '僕とみるく号、見た目はちょっと違うけど「せーの！」の合図で同じお仕事をできるようになりたいカニ！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！共通のお約束を決めておけば、ふたりで息ぴったりに動けるよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お揃いの合図で息ぴったりカニ！これぞ最強コンビロボ！',
      },
    ],
  },
  {
    stageId: '2ffed195-378d-5077-b5bd-d451e2930f47',
    requestTitle: '花屋ロボとパン屋ロボの合同充電',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '私の花屋ロボとコッペさんのパン屋ロボ、両方から同じやり方でエネルギーを集めて金庫に届けたいの。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'お店がちがっても「元気をわける」っていう同じお約束を覚えさせれば、力を合わせて金庫をいっぱいにできるよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お店がちがっても力を合わせられるなんて素敵だわ！',
      },
    ],
  },
  {
    stageId: '9488c624-3fd3-54cf-a8a1-8490c9c47af7',
    requestTitle: '「走れる約束」がある車だけ発進ゲート！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '車輪のついてない植木鉢を間違えて発進させないように、「ちゃんと走れる約束」がある子だけ通す発進台を作りたいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '足のないパン箱がブーンって走り出したらホラーカニ！しっかりチェックして発進するロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お約束を守れる子だけを通すから、事故の心配ゼロだね！',
      },
    ],
  },
  {
    stageId: 'dc872ad3-345b-5f25-95d4-1d780fd8a7eb',
    requestTitle: 'ゲート突破の名人、颯爽と駆け抜ける！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '門開け名人のお約束を持った特製ロボで、途中のスイッチを踏みながらゲートの奥まで突っ走ってください！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '金庫チャージも移動もバッチリ準備したよ！かっこよく駆け抜けよう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '風がビューッと吹くくらい颯爽と駆け抜けて行きましたね！かっこいいです！',
      },
    ],
  },
  {
    stageId: '501b44e2-7067-5e83-8742-ecb185d3add7',
    requestTitle: '喫茶店の貸出ブック、返却期限を守ろう！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'お店の貸出本、持ち主が帰ったあともしおりだけ残ってたら困るだろう？返却期限をしっかり合わせたいんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'えっ、僕がこの前借りた絵本……たしかベッドの下に……じゃなくて今すぐ返却しに走るカニ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'ははは、期限を守ってくれてありがとう。これで喫茶店の本棚もずっと平和だ。',
      },
    ],
  },
  {
    stageId: 'c0fd3332-442d-55fc-838d-c594d61eb5cc',
    requestTitle: '2つの見積もりメモ、期限切れにご注意！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '2つのお花の見積もりを比べて短い方の歩数を使いたいんだけど、どっちを借りても期限が切れないように気をつけたいわ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '2つとも「お返しするまでずっとここにあるよ！」って約束しておけば、安心して比べられるね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'どちらを選んでも期限切れにならないから安心ね！',
      },
    ],
  },
  {
    stageId: '11ff3b4b-9609-535e-9aa0-286223f193a5',
    requestTitle: '案内メモに「借りた数字の有効期限」シール',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'パン屋の案内メモに別の人から借りた歩数を書き留めたいんだけど、元の人が帰る前までに使い切らないとダメなんだよね？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'その通り！案内メモにも「この数字がある間だけ有効」ってシールを貼っておけば完璧だよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '案内メモにも有効期限をつけられるんだね！賢いなあ！',
      },
    ],
  },
  {
    stageId: '0bd720eb-7730-583a-a337-672efa528996',
    requestTitle: '魔法のトレイとお約束、全部まとめて大活躍！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'どんな荷物も運べて、誰とでも同じ合図で動けて、お約束の期限も守れる！集大成のおてつだいを決めよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '難しそうに見えたお約束も、慣れたらとっても快適カニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'お見事！よし、明日はみんなで出荷まえの味見チェックに挑戦だよ！',
      },
    ],
  },

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

  // ===== 第16章：探偵ごっこと迷子の手紙 (16-1 〜 16-8) =====
  {
    stageId: 'cb19db0b-240d-50ed-be38-89c3fe355fee',
    requestTitle: 'ポッポ探偵登場！キーワードで届け先を探せ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'じゃじゃーん！今日は帽子を深めにかぶって、手がかりのキーワードと夜間ランプ設定から届け先を推理します！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ポッポ探偵カッコいいカニ！僕も助手のカニワトソンとして虫眼鏡をのぞくロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'おおっ、ひと目で正しい住所がヒットしました！なんだか名探偵になった気分です！',
      },
    ],
  },
  {
    stageId: '82b69a1f-ff10-522f-b41d-dc663fc6fa3f',
    requestTitle: 'バラバラの手がかりを手帳1冊にまとめよう',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '捜査メモがポケットのあちこちに散らかっていると探しづらいね。設定専用のカード1枚にまとめられないかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それ名案！手帳のカードにスッキリひとまとめにしておけば、ポケットを探り回らなくて済むよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '情報が1枚のカードにまとまると、あとからの見直しもぐっと楽になるね。',
      },
    ],
  },
  {
    stageId: 'cdcc5256-5359-5cce-a2aa-61ab4a272fc1',
    requestTitle: '昼モード・夜モードの切り替えスイッチ',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '夜のランプがオンのときは、お昼のときとちょっと歩数を変えてお庭を見回りたいわ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お昼は元気に大股、夜はお星さまを見ながらそろり歩きカニ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '時間帯に合わせて賢く歩き方を変えてくれて助かったわ！',
      },
    ],
  },
  {
    stageId: 'cf512ac5-9221-505e-870c-1d52ec940528',
    requestTitle: '忘れん坊さんにも優しいお助けメッセージ',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'うっかり必要なメモを渡し忘れたとき、機械がプイッと止まっちゃわないで優しく「忘れてるよ〜」って教えてほしいんだ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '任せて！足りないときは親切なメッセージでお知らせするようにしておけば、誰でも安心して使えるね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'これなら初めて使うお客さんにも優しい道具になるね！',
      },
    ],
  },
  {
    stageId: 'c7c95c3c-4f38-5cdc-9522-57b0cea1a312',
    requestTitle: '普通の伝票と赤い注意メモの仕分け術',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'ふつうのお手紙と緊急の注意書きが同じカゴに混ざると見づらくてね。注意書きだけは赤いトレイに分けたいんだ。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！大事な注意書きを赤いトレイに分けておけば、いざという時も見落とさないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'すっきり分かれて見やすいね。頼もしい道具になったよ。',
      },
    ],
  },
  {
    stageId: '98bb6489-186b-53c3-828e-0cf6576d9cb5',
    requestTitle: '「OK！」と「気をつけて！」の二重奏',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '順調なときの記録はふつうの日記に、注意のお知らせは赤い連絡帳に、両方きちんと分けて記録したいです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '右手に日記、左手に連絡帳を持ってササッと書き分けるカニ！……文字がカニ文字にならないよう気をつけるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '綺麗な仕分けで記録がぴかぴかになりました！',
      },
    ],
  },
  {
    stageId: '06f4c9fa-5322-5af9-81f8-2f52695e366d',
    requestTitle: '探偵の虫眼鏡道具だけ別箱に整理しよう',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '全部をひとつの机に広げずに、探し物の道具だけを小さな専用ケースにまとめてチェックもつけておきたいの。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '道具を小さなケースに分けて、しかも点検チェック付きにするんだね！とってもきれいで使いやすいよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '点検付きの探し物道具、とっても頼もしいわ！',
      },
    ],
  },
  {
    stageId: '1ebcf4e6-6bc1-5f61-9487-faa01683ed43',
    requestTitle: 'ポッポ探偵・迷子の手紙をぜんぶ解決！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '探偵道具がぜんぶ揃ったね！手がかり読み取り・赤メモ仕分け・連動ゲート突破まで一気に決めよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '名探偵フェリス＆ポッポの活躍、とくと見るカニ！真実はいつもお菓子箱の中ロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'よくここまで調べ上げたね。迷子の手紙もみんな持ち主の元へ戻って、町がまたひとつ明るくなったよ。',
      },
    ],
  },
];
