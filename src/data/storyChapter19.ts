import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_19: StageStoryEntry[] = [
  // ===== 第19章：みんなで回そう回覧板！ (19-1 〜 19-12) =====
  {
    stageId: '5745f0f2-7b62-5d82-a59e-c01c09ac7b17',
    requestTitle: '背の高い観葉植物は広い倉庫へ！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '背の高い観葉植物がテーブルに乗りきらなくて。広い倉庫にしまって、手元には小さな引換券だけ持てないかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '大きな箱にしまって引換券だけ持てば、ポッケも軽々で走れるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'テーブルが広々！しかも引換券からすぐ中身が出せるから便利ね。',
      },
    ],
  },
  {
    stageId: 'b901a04c-139c-52fd-9d85-acc046a59495',
    requestTitle: '箱を開けずに中身を数えるマジック！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '箱の中にしまった数字を取り出して足し算したいときは、どうやって箱の中身をのぞけばいいのかな？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '魔法のメガネで中身の値だけをスッと取り出して計算しちゃおう！箱はそのままでも大丈夫だよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '箱に入ったままでも足し算がスッキリできたよ！',
      },
    ],
  },
  {
    stageId: 'a5eb96f6-5132-5eff-afab-00ba03aaa75f',
    requestTitle: '大きな設計図を丸ごと箱詰めしてL字配達',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '配達ルートが書かれた大きな板ごと箱に包んで、角を曲がった先まで軽く運んでもらえますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '箱にしまえば重たい板も羽みたいに軽くなるカニ！ヒョイッと運んじゃうロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '大きな設計図も軽々と運べました！',
      },
    ],
  },
  {
    stageId: '6df8d4cc-5e97-58e3-b339-01c6055e64de',
    requestTitle: '使い終わった道具は今すぐお片づけ！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '使い終わった道具を「いまこの瞬間に片付けたよ！」って声に出してから次の作業へ進みたいんだが。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！後片付けしてから次に進むの、すっごく気持ちがいいよね！「片付け完了！」って元気よく報告しよう！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '使う前にちゃんと後片付けできるのは気持ちがいいね。',
      },
    ],
  },
  {
    stageId: 'bb17e121-9dc5-594a-ace4-b233fef8e9d4',
    requestTitle: 'ふたりで一緒に読める町内会回覧板',
    client: 'kurumi',
    intro: [
      {
        speaker: 'milk',
        emotion: 'normal',
        text: 'ピピッ！町内会のお知らせメモ、フェリスちゃんと僕のふたりで同時に持って眺めたいよ！取り合いになっちゃうから！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それなら「みんなで見る用コピー札」を作って、ふたりで仲良くシェアしよう！読み終わったらお片付けだよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ふたりとも同じメモが見れたカニ！ケンカせずに仲良しロボ！',
      },
    ],
  },
  {
    stageId: '89fad8cc-d58d-5e7b-b0d8-b9c93b216b4f',
    requestTitle: '3軒で分け合うお祭りレシピの回覧板',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'パン屋・花屋・喫茶店の3軒で、同じお祭りレシピを分け合って金庫にチャージしたいの！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '1枚のレシピを3軒のあいだでくるくるシェアすれば、紙も節約できてみんなニコニコだね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '3軒とも同じレシピで準備できたわ！地球にも優しいわね♪',
      },
    ],
  },
  {
    stageId: 'e2eb4f07-4104-50a4-82ba-f7f105174fe4',
    requestTitle: 'おつかい先に渡しても手元に残る不思議なメモ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '最初の人にメモを渡したら手元から消えて、そのあとの歩数計算ができなくなっちゃいました〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '渡すときに「共有コピー札」を差し出せば、元のメモも手元に残って最後まで使えるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '消えずにちゃんと再利用できました！もう慌てません！',
      },
    ],
  },
  {
    stageId: 'fb8c2141-1beb-5df9-a172-a207752b4715',
    requestTitle: '分け合った元気玉で光の玉もお届け！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '分け合った元気パワーで金庫を満たしつつ、スイッチを踏んで光の玉も納品まで運んでくれないかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'みんなで分け合ったパワーなら無敵カニ！ゴールまで一気に走り抜けるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '金庫も光の玉も満点！バッチリだったよ〜！',
      },
    ],
  },
  {
    stageId: 'e54dc38b-c506-5de5-b893-6ffe329eb759',
    requestTitle: '観察日記にこっそり追記したいのに！？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お店の観察日記、表紙はそのままで中のページだけこっそり書き足したいの。でも2人同時にペンを持ったら叱られちゃって……。',
      },
      {
        speaker: 'milk',
        emotion: 'normal',
        text: 'ピピ！おしゃべりしながら同時に書き込むとぐちゃぐちゃになっちゃうからね。ひとりずつ順番に書こう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お花の開花メモが無事に書き足せたわ！きれいな字で書けて満足よ♪',
      },
    ],
  },
  {
    stageId: '4f384d79-8afd-55ea-b24f-1048346a3680',
    requestTitle: 'ペンを置いてから次の人に読んでもらおう',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'ノートに数字を +2 書き足したあと、すぐにもう一度みんなで読み返したいときはどう整理すればいいんだい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '書き終えたらペンをしっかり机に置いて手放せば、次の瞬間から安全に読み返せるよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'なるほど、書き終えたらすぐペンを置くわけだね。スマートだ。',
      },
    ],
  },
  {
    stageId: 'ffd83129-76d5-5bed-bef0-56d280dbddab',
    requestTitle: '読んでる最中に横から書き換え禁止〜！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '僕がノートを読んでいる最中に誰かが横から数字を書き直そうとして、紙がビリッと破けそうになりました〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '読み終わってから書き換えるのがお約束！順番をきれいに並べ直せば仲良く使えるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '順番を整理したら破れずに 4 まで増えました！',
      },
    ],
  },
  {
    stageId: '451659e2-c700-5579-a149-c060ef9f5d3a',
    requestTitle: 'お片付け・回覧板・観察ノートの三重奏！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '箱にしまったり、回覧板でシェアしたり、ノートに追記したり！いろんな工夫を組み合わせて金庫とゴールをクリアしよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '回覧板マスターの名にかけてバッチリ決めるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '完璧！次はいよいよフェリスちゃんとみるく号、ふたり同時の大作戦が始まるよ！',
      },
    ],
  },

];
