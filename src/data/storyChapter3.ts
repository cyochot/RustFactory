import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_3: StageStoryEntry[] = [
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

];
