import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_13: StageStoryEntry[] = [
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

];
