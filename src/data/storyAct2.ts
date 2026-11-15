import { StageStoryEntry } from '../types/game';

export const STORY_ACT2: StageStoryEntry[] = [
  // ===== 第5章：特製スタンプと名物メモ帳 (5-1 〜 5-8) =====
  {
    stageId: '5-1',
    requestTitle: 'お花配達カードが風で飛ばされた！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '最近お花のお届け先が増えてきたから、「送り先」と「歩数」をひとまとめにした可愛い配達カードを作りたいの。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'あっ！バラバラのメモ用紙が窓からの風で全部ヒラヒラ飛んでいくカニ〜！カードにまとめて正解ロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'すごく見やすい配達カードね！これならお店番の子にもすぐ渡せるわ。',
      },
    ],
  },
  {
    stageId: '5-2',
    requestTitle: '配達カードの字がクセ字すぎて読めない？',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: 'カードに書かれた「右への歩数」と「下への歩数」を読み取って、角を曲がってお届けお願いできますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'はーい！ちゃんと項目ごとに欄が分かれてるから、ポッポさんの丸文字でもばっちり読めるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'カード通りのコースで一発配達ですね！字の練習もちょっとだけ頑張ります……。',
      },
    ],
  },
  {
    stageId: '5-3',
    requestTitle: '「お名前おんなじ」なら省略しちゃえ！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'パンの名前を書くとき「メロンパンの欄にメロンパン」って2回書くの、手が疲れちゃうよね？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'たしかに！同じなら1回で済ませちゃおう！ついでに燃料も満タンまで足して出発だよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'おお、短くて読みやすい！これで注文票を書くスピードが倍になるぞ〜！',
      },
    ],
  },
  {
    stageId: '5-4',
    requestTitle: '大事なレシピカード、丸ごとあげないで！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'panic',
        text: 'おつかい係にレシピのカードを渡したら、向こうに持っていかれたきり僕の手元からなくなっちゃって困ってるんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それなら渡す前に「見るだけね」って約束して貸し出そう！終わったらちゃんと手元に残るよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '大事なメモを手元に残したまま配達まで済んだね。助かったよ。',
      },
    ],
  },
  {
    stageId: '5-5',
    requestTitle: 'フェリスちゃんの特技！必殺カニダッシュ',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ねえねえくるみちゃん！僕にも「必殺カニダッシュ！」みたいなカッコいい特技ボタンを付けてほしいロボ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ふふ、いいよ！でも勢い余って壁に激突しないように、ちゃんと止まれる特技にしておくね！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'わーい！自分専用の特技が増えてヒーローみたいになったカニ！',
      },
    ],
  },
  {
    stageId: '5-6',
    requestTitle: 'オーブンロボのセルフ充電タイム',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'お店のオーブンロボが「充電お願いしまーす！」って自分で元気をチャージできるようにしたいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '自分で自分の電池を回復するカニ！？僕もおやつを自分で焼いて食べられるようになりたいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'セルフ充電でバッチリ金庫が満たされたよ〜！',
      },
    ],
  },
  {
    stageId: '5-7',
    requestTitle: '新装カートをピカピカ量産！',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '新しい鉢植えカートを用意するたび、車輪を1個ずつ組み立てるより「はい出来上がり！」って一発で出せたらおしゃれよね！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'カート製造ボタンを作っちゃえば、いつでも新品ピッカピカのカートが出せるよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '見た目も押し心地も、まさに工房特製のカートね！',
      },
    ],
  },
  {
    stageId: '5-8',
    requestTitle: '特製おてつだいロボの完成おひろめ会！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '特技も充電もカート作りも全部まとめた特製おてつだいメニューで、金庫チャージとL字のお届けをカッコよく決めよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'よしっ、商店街のみんなにカッコいいところを見せちゃうカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '大拍手！フェリスちゃん、今日はおやつのメロンパン特大サイズだよ！',
      },
    ],
  },

  // ===== 第6章：お天気くるくる商店街 (6-1 〜 6-12) =====
  {
    stageId: '6-1',
    requestTitle: '晴れの日？雨の日？お出かけモード切替',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '雨の日と晴れの日と急ぎ便で、歩き方のモードをカチッと切り替えられたら配達ミスが減るのになあ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お天気ダイヤルを回すみたいに「今日は晴れモード！」って決められるといいかもロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'モード切り替えが分かりやすくて、朝ぼーっとしてても間違えなくなりました！',
      },
    ],
  },
  {
    stageId: '6-2',
    requestTitle: '指令カードの順番どおりにL字ウォーキング',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '「前に進む」「右に曲がる」「前に進む」っていう指令カードを並べて、その通りにパンを運んでほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'カードをトランプみたいに並べて、上からめくるだけで楽しいカニ！……うっかりジョーカー混ぜないでね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'カードどおりのスイスイ配達、見ていて気持ちよかった〜！',
      },
    ],
  },
  {
    stageId: '6-3',
    requestTitle: 'スタンプ自身に「動け！」とお願いしてみよう',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '指示カードそのものが自分の動き方を知っていてくれたら、いちいち説明書を見返さなくて済むんだけどね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'カード1枚1枚に「これを見たらこう動く！」って書き込んでおけばラクチンだよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'なるほど、注文伝票が自分で歩いていくみたいで面白いね。',
      },
    ],
  },
  {
    stageId: '6-4',
    requestTitle: 'おまけのタネ、入ってる？空っぽ？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '花束におまけのお花のタネが「入っているとき」と「入っていないとき」、開ける前にちゃんと見分けたいの。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: '空っぽの袋に「タネどこ〜！？」って大騒ぎしないよう、落ち着いて確認するカニ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '空っぽのときでも慌てずニコニコ対応できて安心だわ♪',
      },
    ],
  },
  {
    stageId: '6-5',
    requestTitle: '郵便物の仕分け棚、1通だけポロリ事件',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '大変です！町内あての郵便物、1つの地区だけ仕分け先を忘れて棚の横のゴミ箱に落ちそうになりました〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '全地区の箱をひとつも漏らさずチェックリストに並べよう！そしたら絶対に落ちないよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '全パターン網羅で1通もこぼれませんでした！ホッと一安心です！',
      },
    ],
  },
  {
    stageId: '6-6',
    requestTitle: '豆の種類ごとに決まる本日の湯量',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '豆の種類ごとに決まるぴったりの湯量を、選んだ瞬間にスッと受け取って淹れたいんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'モカさんのコーヒー、種類がいっぱいあって迷っちゃうカニ！どれでもおいしいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'ぴったりの湯量で淹れられたよ。いい香りが路地裏に広がってるね。',
      },
    ],
  },
  {
    stageId: '6-7',
    requestTitle: '当たり券以外はぜんぶ「残念賞」でひとまとめ',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '福引きの当たり番号は1番と3番だけ！残りのハズレ番号はぜんぶまとめて「お気持ちだけ0ポイント」にできないかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'ええっ！？せめてハズレでもパンの耳くらいおまけしてほしいカニ〜！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '100通りあってもたった1行で受け止められてスッキリだ！パンの耳はオマケであげるよ！',
      },
    ],
  },
  {
    stageId: '6-8',
    requestTitle: '飛び石お庭のダンス＆蒸気ゲート',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お庭の飛び石コースに蒸気ゲートがあるの。進むか待つか、カードをめくりながらリズミカルに渡ってくれる？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '飛び石から落ちたら池ポチャカニ！お魚とお友達にならないよう気をつけるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'まるで軽やかなステップみたい！水しぶきひとつ立てず渡りきったわね！',
      },
    ],
  },
  {
    stageId: '6-9',
    requestTitle: 'コーヒー缶に当たり券が入ってた時だけベル！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '豆の空き缶に「おまけの当たり券」が入っていた時だけ、カランと嬉しいベルを鳴らしてほしいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ハズレのときは黙ってスルー！当たりのときだけ盛大に鳴らそうね！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'カランと良い音が鳴ったね。こういう気取らないサプライズ、嫌いじゃないよ。',
      },
    ],
  },
  {
    stageId: '6-10',
    requestTitle: '手紙が空っぽのときは「おやすみ1歩」',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '郵便受けに荷物が「あるとき」はその数だけ進み、「空っぽ」のときは予備で1歩だけ進むようにしたいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '空っぽのときでも「おつかれさま！」って1歩だけお辞儀して進むカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'どんな郵便受けでも立ち止まらずスマートに回れるようになりました！',
      },
    ],
  },
  {
    stageId: '6-11',
    requestTitle: 'お楽しみ袋から当たりお菓子だけつまみ出し！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'お楽しみ箱を順番に開けて、中にポイント券が入っていた分だけを金庫に全部足し込みたいんだ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '空箱はポイッと飛ばして、当たりだけしっかり拾い集めよう！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '当たりポイント全部回収だ〜！ホクホクだね！',
      },
    ],
  },
  {
    stageId: '6-12',
    requestTitle: 'お天気くるくる商店街のまとめ日誌',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'どんなお天気や注文が来ても慌てないのが町の人気工房！お目当ての荷物を拾いつつ、スイッチを踏んで門を抜けよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '晴れでも雨でもへっちゃらカニ！今日も元気にいってくるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'すごい！どんな条件が重なっても落ち着いてさばけるようになったね！',
      },
    ],
  },

  // ===== 第7章：お片づけ大作戦と秘密の棚 (7-1 〜 7-8) =====
  {
    stageId: '7-1',
    requestTitle: 'みるく号登場！工房のお片づけ大作戦',
    client: 'kurumi',
    intro: [
      {
        speaker: 'milk',
        emotion: 'normal',
        text: 'ピピッ！はじめまして、しっかり者の「みるく号」だよ！工房の道具が散らかってるから、部屋ごとに分けて整理しよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'うわっ、お片づけ警察がやってきたカニ！？隠してたおやつのクッキーがバレちゃうロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！棚がスッキリ整頓されたよ！フェリスちゃんの秘密のクッキーも「おやつ箱」にしまっておいたからね！',
      },
    ],
  },
  {
    stageId: '7-2',
    requestTitle: '箱の中の小箱、カギが開かない！？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'アトリエの大きな戸棚の中にある「車輪の小箱」から道具を取り出したいのに、途中の扉にカギがかかってるみたい。',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'あっ、みるく号が几帳面すぎて二重にカギ掛けたんだ！表の扉も中の小箱も開けて取り出そうね！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '扉をぜんぶ通れるようにしたら、すんなり取り出せたわ！',
      },
    ],
  },
  {
    stageId: '7-3',
    requestTitle: '発電室と操縦室の伝言ゲーム',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '電力を作る部屋とロボットを動かす部屋、2つの作業場に分けてお仕事を進めるとスッキリしそうだね。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！役割ごとに部屋を分けておけば、探し物も1秒で見つかるよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '道具の整理ができていると、お仕事のテンポまで良くなるね。',
      },
    ],
  },
  {
    stageId: '7-4',
    requestTitle: 'パン箱の「秘密の引き出し」問題',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '倉庫の外から特製のパン箱を使いたいんだけど、箱だけじゃなくて中身の引き出しも見えないように封印されてるみたいでさ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '外から触っていい引き出しだけ「どうぞ！」って札をつけて公開しておこうね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '見せていいところだけ見せてくれるなんて、よくできてるなあ！',
      },
    ],
  },
  {
    stageId: '7-5',
    requestTitle: '長〜い町内住所のニックネーム作り',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '「歯車町三丁目・裏路地・ひなたパン屋横・青いポストの前」って毎回フルネームで書くのに手がプルプル震えます！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それ、最初に手帳の表紙へ省略名をメモしておけば、あとは「パン屋横」の一言で済むよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'わあ、短くて書きやすい！インク代も半分で済みそうです！',
      },
    ],
  },
  {
    stageId: '7-6',
    requestTitle: 'お気に入り道具2つを手元に引き寄せ',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '充電の道具とお散歩の道具、どっちも別の棚にあるから両方とも作業台の手前に並べておきたいわ。',
      },
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピ！よく使う道具を最初から手元に並べておけば、作業効率が3倍アップだよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お気に入り道具が一列に並んで、作業台がすっきりしたわ！',
      },
    ],
  },
  {
    stageId: '7-7',
    requestTitle: '同じ名前の「太郎くん」がふたり！？',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '右の棚にも左の棚にも「おまかせボタン」って名前の同じボタンがあってね。呼び間違えない工夫はあるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それなら「右の棚のおまかせ！」「左の棚のおまかせ！」って部屋の名前ごと読べばバッチリ見分けられるよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '名前のカブりもスマートにかわせるんだね。なるほど。',
      },
    ],
  },
  {
    stageId: '7-8',
    requestTitle: 'ピカピカ部品庫と隠しスイッチ攻略',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '整理された棚から大事な道具をパッと取り出して、金庫と連動ゲートをきれいにクリアしよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お片づけの達人になった今なら、どんな道具もすぐ取り出せるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'milk',
        emotion: 'happy',
        text: 'ピピッ！フェリスちゃんも少しはお片づけ上手になったみたいだね！',
      },
    ],
  },

  // ===== 第8章：食べすぎ注意のメニュー表 (8-1 〜 8-12) =====
  {
    stageId: '8-1',
    requestTitle: '伸び縮みするパン予約カゴが大行列',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: '今日のパンの予約数がどんどん増えたり減ったりするんだ！あとからいくつでもポンポン足せる大きなカゴが欲しいよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '任せてコッペさん！どんなに注文が増えてもパンクしない、伸び縮みする買い物リストを用意したよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '予約が追加されても余裕だね！焼きたてをぜんぶ並べられたよ〜！',
      },
    ],
  },
  {
    stageId: '8-2',
    requestTitle: '空っぽのリストから集荷スタート！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '最初は空っぽの荷物リストから始めて、集荷した順番にどんどん書き足しながら歩きたいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '最初はゼロでも、回るうちに袋がパンパンになっていくのワクワクするカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '集荷のたびにリストが育っていくみたいで頼もしいですね！',
      },
    ],
  },
  {
    stageId: '8-3',
    requestTitle: '空の引き出しを無理やり開けてパニック！？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '棚に何番目の箱があるか分からないとき、勢いよく引っ張ったら引き出しごと抜けちゃいそうで心配なの。',
      },
      {
        speaker: 'milk',
        emotion: 'normal',
        text: 'ピピ！まずはそっと中身があるか覗いて確かめれば、空振りしてひっくり返ることはないよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '空の段を確認しても壊れないなんて、とっても優しい工夫ね。',
      },
    ],
  },
  {
    stageId: '8-4',
    requestTitle: '注文リストの合計を数えながらL字歩き',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'リストに入っている数をぜんぶ足して金庫をいっぱいにして、そのあとL字のカウンターへパンを届けてくれないかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'パンを数えながら歩くカニ〜！……あれっ、2回同じパン数えちゃったかも？やり直しロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '合計もルートもピタリと一致！いつも助かるよ〜！',
      },
    ],
  },
  {
    stageId: '8-5',
    requestTitle: 'つなげて楽しい！お花屋さんの看板ボード',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'お店の看板に季節のあいさつと「本日のおすすめ」をくっつけて、長い1つのメッセージにしたいの。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '言葉をペタペタつなぎ足して、可愛いおすすめ看板を仕上げちゃおう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '素敵な看板メッセージができあがったわ！通りすがりの人も立ち止まって見てる♪',
      },
    ],
  },
  {
    stageId: '8-6',
    requestTitle: '2つの看板文字をガチャンと合体！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '前半の看板板と後半のメッセージ板、ガチャンとひとつに合体させて店頭に出したいんだけどね。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ボンドとテープでしっかり合体させるカニ！……あっ、自分のハサミまでくっついちゃったロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '看板がビシッと1本につながったよ。お客さんにもよく見えそうだ。',
      },
    ],
  },
  {
    stageId: '8-7',
    requestTitle: '秘密の合言葉を組み立てて叫ぼう！',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '郵便局の秘密の合言葉を、文字パーツを順番につなぎ合わせて完成させたいんです！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '文字をひとつずつ間違えずにくっつけて、合言葉を元気よくお届けしよう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '合言葉バッチリ通りました！噛まずに言えてよかったです！',
      },
    ],
  },
  {
    stageId: '8-8',
    requestTitle: '看板の合図が「特急」に変わったらダッシュ！',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '看板の文字が「特急便」に切り替わったら、大事な光の玉を持って一気に納品台まで走ってほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '合図の文字をじーっと見張って、変わったらロケット発進カニ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '特急便すごいスピードだったよ〜！ホカホカのまま届いたね！',
      },
    ],
  },
  {
    stageId: '8-9',
    requestTitle: '常連さんの「いつもの！」早見表',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'お客さんの名前を引いたら、いつもの好みのコーヒー豆がすぐ出てくる名簿を作りたいんだ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '名前と好みをペアでメモしておく「いつもの帳」を作ろう！これで常連さんが来てもドヤ顔で出せるね！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '「いつもの」でサッと出せるようになったよ。頼もしいね。',
      },
    ],
  },
  {
    stageId: '8-10',
    requestTitle: 'コッペさんとミモザさんの「いつもの」合計！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'コッペさんとミモザさんの2人分の注文数を、名簿から引き出して合計してくれるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '名簿をめくって2人分を足し算カニ！コッペさんだけ甘めのお砂糖山盛りなのもメモしてあるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '2人分のカップ、ちょうどいいタイミングで淹れ上がったよ。',
      },
    ],
  },
  {
    stageId: '8-11',
    requestTitle: '町内スタンプ帳のポイント上乗せ作戦',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '同じお家のポイントカードに、お届けするたび点数を消さずに上乗せしていきたいんですが、どうすればいいですか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '前の数字に今回の分を足して書き直せば完璧！これでポイントが消えちゃう悲劇は起きないよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '古い記録を消さずに加算できました！町内会の名簿にも使えそうです！',
      },
    ],
  },
  {
    stageId: '8-12',
    requestTitle: 'リスト・看板・名簿の合同ミッション！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '注文リストも看板文字も常連さん名簿も全部そろったよ！町の合同おつかいを気持ちよく締めくくろう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '準備万端カニ！終わったらモカさんのお店でココアをごちそうになるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '見事な連携だったね。約束どおり特製ココアを淹れて待っていたよ。ゆっくりしていきな。',
      },
    ],
  },
];
