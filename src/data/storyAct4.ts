import { StageStoryEntry } from '../types/game';

export const STORY_ACT4: StageStoryEntry[] = [
  // ===== 第13章：くるくる仕分けとティータイム (13-1 〜 13-8) =====
  {
    stageId: '13-1',
    requestTitle: 'エプロンのポケット計算機でパン作り',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '手元にある小麦粉の量に合わせて、その場でサッと砂糖の量を決める小さいお手伝いメモを使いたいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ポケットからサッと取り出して計算するカニ！ついでにお砂糖ひとさじ味見してもいいロボ？',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お手軽でいいね！メロンパンの焼き加減も甘さもバッチリ決まったよ！',
      },
    ],
  },
  {
    stageId: '13-2',
    requestTitle: 'ミルクとお砂糖、黄金バランスの魔法',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'ミルクとお砂糖の2つを合わせてちょうどいい甘さを計算しながら、L字のカウンターへ届けてくれるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'モカさん特製カフェオレの黄金比だね！2つの数字を受け取ってササッと混ぜ合わせちゃうよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'まろやかで完璧なバランスだ。ありがとう。',
      },
    ],
  },
  {
    stageId: '13-3',
    requestTitle: 'お花の香りスパイスをひと振り！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'さっき決めた香りポイントを覚えたまま、今日のお花にぴったりなエネルギーを金庫へ入れたいわ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'そばにあるお気に入りスパイスをそのままポケットに入れて使えるから、日替わりアレンジも自由自在だね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'ふんわり優しいハーブの仕上がりね♪',
      },
    ],
  },
  {
    stageId: '13-4',
    requestTitle: '蒸気ゲートをリズミカルにポンポン突破！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '蒸気ゲートの様子を確かめながら進む動きをワンセットにして、テンポよく通り抜けられますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'シュッシュッのリズムに合わせて跳ねて進むカニ！なんだか縄跳びみたいで楽しいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'スッスッと迷いなく通り抜けました！すごいです！',
      },
    ],
  },
  {
    stageId: '13-5',
    requestTitle: '喫茶店のコーヒー豆、選別コンベヤー大回転！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '届いたコーヒー豆の中から、いい粒だけを選んで、焙煎して、合計の重さを出したいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '「選んで→磨いて→合計！」って流れ作業にしたら、まるで小さな工場のベルトコンベヤーみたいに美しいね！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'ムダがなくて美しい流れだね。おかげで今日のブレンドは香り高く仕上がりそうだ。',
      },
    ],
  },
  {
    stageId: '13-6',
    requestTitle: '2倍サイズのパン詰め合わせボックス完成！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '並んだパンの数を全部2倍に増やして、新しい詰め合わせボックスとして手元にまとめたいんだよね！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '2倍カニ！？そしたら僕のおやつも2倍になるロボ！？大急ぎで詰めるカニ〜！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '特大サイズの詰め合わせセット、一瞬で完成したよ〜！',
      },
    ],
  },
  {
    stageId: '13-7',
    requestTitle: '大きいつぼみだけ集める選別ネット',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '決めたサイズ以上の大きいつぼみだけを集めて、その合計パワーでL字の温室を一周したいの。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ちっちゃいつぼみはもう少しお日さまの下で待ってもらって、大きな子だけをカゴに集めようね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '元気なつぼみばかりが集まったわ！咲くのが楽しみね。',
      },
    ],
  },
  {
    stageId: '13-8',
    requestTitle: '流れ作業コンベヤーでティータイム間に合え！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'おやつの時間までに流れ作業で必要なパワーを集めて、スイッチ経由でゲートを突破しよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ティータイムに遅れたら大事件カニ！全速力でコンベヤーを回すロボ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'やった、ティータイムにぴったり間に合った！みんなでスコーンと紅茶でほっと一息だね！',
      },
    ],
  },

  // ===== 第14章：お急ぎ便とかけっこ勝負 (14-1 〜 14-4) =====
  {
    stageId: '14-1',
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
    stageId: '14-2',
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
    stageId: '14-3',
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
    stageId: '14-4',
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

  // ===== 第15章：みんなで回そう回覧板！ (15-1 〜 15-12) =====
  {
    stageId: '15-1',
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
    stageId: '15-2',
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
    stageId: '15-3',
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
    stageId: '15-4',
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
    stageId: '15-5',
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
    stageId: '15-6',
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
    stageId: '15-7',
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
    stageId: '15-8',
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
    stageId: '15-9',
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
    stageId: '15-10',
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
    stageId: '15-11',
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
    stageId: '15-12',
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

  // ===== 第16章：ふたりの息ぴったり大作戦 (16-1 〜 16-16) =====
  {
    stageId: '16-1',
    requestTitle: '朝の大注文！フェリス＆みるく同時出動！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'わーっ、朝の大口注文だ！フェリスちゃん1人だけじゃパン運びが間に合わないよ〜！誰か助けて〜！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！みるく号も出動するよ！フェリスちゃんとふたり同時に「せーの！」で出発だ！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！ふたり一緒だとあっという間に終わったね！',
      },
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '息がぴったりのダブル配達、ありがとう〜！',
      },
    ],
  },
  {
    stageId: '16-2',
    requestTitle: '相棒の到着をゴール手前で待ってあげよう',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: 'みるく号が作業を終わらせるまで、フェリスちゃんにゴール手前で「おーい、まだー？」って待っててもらえますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '先に着いて鼻歌をうたいながらみるく号を待つカニ！一緒にゴールしたほうが楽しいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ふたり揃って仲良く完了しましたね！',
      },
    ],
  },
  {
    stageId: '16-3',
    requestTitle: '上の道と下の道、スイッチで道を開け！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '上の通路のみるく号がスイッチを踏むと、下の通路にある門が開く仕掛けになっているの。タイミングを合わせられるかしら？',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！フェリスちゃんは門の前で待っててね！僕が今すぐスイッチを踏みに走るから！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！スイッチ押したよ！呼吸ぴったりのコンビネーションだね！',
      },
    ],
  },
  {
    stageId: '16-4',
    requestTitle: '相棒にお出かけメモを丸ごとプレゼント！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '手元で作った歩数のメモを、別ルートを行く相棒のロボットへ安全に持たせて動かしたいんだが。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '出発するときにメモの持ち主ごと「はい、これ持ってって！」って手渡してしまえば、途中で迷子にならないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '途中でメモが消える心配もなくなって安心だね。',
      },
    ],
  },
  {
    stageId: '16-5',
    requestTitle: '紙コップの糸電話で光の玉をパス！？',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '離れて作業しているフェリスちゃんとみるく号に、安全に光の玉をパスする方法ってありますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ジャーン！特製「なんでも通る糸電話パイプ」を作ったよ！こっちからポイッと送れば、あっちでキャッチできるよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ナイスキャッチカニ！糸電話の向こうからポンッと飛び出してきてびっくりロボ！',
      },
    ],
  },
  {
    stageId: '16-6',
    requestTitle: '糸電話から届いた歩数でゴールへ進め！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'みるく号が測って送ってくれた「進む歩数」を糸電話で受け取って、そのまま金庫とゴールをクリアしてね！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！「右に何歩だよ〜！」って今送るから、ちゃんと聞き取ってね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '糸電話の伝言どおりにピタッと到着したよ〜！',
      },
    ],
  },
  {
    stageId: '16-7',
    requestTitle: 'もしもし？伝言2回まとめてキャッチ！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '向こうの通路から2回送られてくる数字を受け取って、合計のパワーを金庫に届けられるかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '1回目キャッチ！2回目もキャッチ！耳を澄ませて聞き漏らさないカニ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '2回とも取りこぼしなく受け取れたわね！',
      },
    ],
  },
  {
    stageId: '16-8',
    requestTitle: '受け取った光の玉を磨いてから納品だ！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'パイプで受け取った光の玉、そのままじゃ少し曇っているんだ。受け取ったあとにピカッと磨いてから納品してくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'キュキュッと磨き上げるカニ！みるく号から届いた大事な玉、ピカピカにして届けるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '受け取ってからの一手間もスムーズだね。きれいな光だ。',
      },
    ],
  },
  {
    stageId: '16-9',
    requestTitle: 'みんなの小金庫、鍵をかけて順番待ち！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '売上の共有金庫に2人同時にお金を入れようとすると、数が食い違ってケンカになりそうで心配なんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '金庫に鍵を掛けて、開けてる間はもう1人がお行儀よく順番待ちするルールにしよう！これなら絶対ずれないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '1コインの狂いもなくピッタリだ。これなら忙しい昼どきも安心だね。',
      },
    ],
  },
  {
    stageId: '16-10',
    requestTitle: 'あっ！鍵を握ったまま待ちぼうけ事件',
    client: 'kurumi',
    intro: [
      {
        speaker: 'milk',
        emotion: 'panic',
        text: 'ピピッ！前の鍵を握りしめたまま、もう1回鍵を開けようとして自分自身で待ちぼうけになっちゃった〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'あはは、自分の鍵を自分で待ってたら一生開かないよ！使い終わったらすぐ鍵を返すようにしようね！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！鍵がきちんと返ってスムーズに動いたよ！恥ずかしいところ見せちゃった！',
      },
    ],
  },
  {
    stageId: '16-11',
    requestTitle: '「お先にどうぞ！」と鍵をバトンタッチ',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'まだ別の用事が残っているとき、次の人のために今すぐ鍵だけ先に開けて返してあげる方法はないかな？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '「はい、お先にどうぞ！」ってその場で鍵を手放せば、相棒が待たずにすぐ使えるよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '待ち時間ゼロでスッキリ順番交代できたね！',
      },
    ],
  },
  {
    stageId: '16-12',
    requestTitle: '3人掛かりのリレーで金庫を満タンに！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '2人からさらに助っ人が増えて3人同時に金庫へ運び込みます！ぶつからずに6ポイントまで貯められますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '3人でも5人でも一列に並べばバッチリカニ！順番を守ってコツコツ貯めるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '3人掛かりでも1つも取りこぼしなし！素晴らしいチームワークです！',
      },
    ],
  },
  {
    stageId: '16-13',
    requestTitle: 'お引越しできる道具、できない道具',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '遠くの部屋へ安全に持っていける道具と、持って行くと危ない道具を見分ける練習だよ！',
      },
      {
        speaker: 'milk',
        emotion: 'normal',
        text: '危ない裸のままの道具は、ちゃんと鍵付きの安全なケースに入れ替えれば安心して持っていけるね！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'バッチリ！安全じゃない運び方をしっかり防げたね！',
      },
    ],
  },
  {
    stageId: '16-14',
    requestTitle: 'おもちゃの取り合いは「伝言渡し」で仲直り',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '別々の部屋から同じリストを引っ張り合って取り合いになっちゃったわ。仲良く受け渡すにはどうしたらいいかしら？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '引っ張り合う代わりに糸電話パイプで「はい、どうぞ！」って送り合えば、ケンカゼロで平和に解決だよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '奪い合うより送り合うほうがずっと仲良しで素敵ね♪',
      },
    ],
  },
  {
    stageId: '16-15',
    requestTitle: '糸電話と金庫番のハイパー連携プレー',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '金庫への貯金は鍵つき順番待ち、光の玉の受け渡しは糸電話で同時にさばく、見事な連携を見せてくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'みるく号と一緒ならどんな注文もへっちゃらカニ！いっくよ〜！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'お見事としか言いようがないね。見ていて惚れ惚れする連携だよ。',
      },
    ],
  },
  {
    stageId: '16-16',
    requestTitle: 'お祭り前の総リハーサル！ふたりで決めろ！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'いよいよ町のお祭りが近づいてきたね！スイッチ踏み・糸電話・磨き上げ・金庫チャージをふたり同時に決めよう！',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！これができたらお祭り本番もバッチリだね！フェリスちゃん、いくよー！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'やったー！！リハーサル大成功！さあ、いよいよ町中が待ちに待ったお祭り準備の始まりだよ！！',
      },
    ],
  },
];
