import { StageStoryEntry } from '../types/game';

export const STORY_ACT1: StageStoryEntry[] = [
  // ===== 第1章：工房オープンとご近所あいさつ (1-1 〜 1-8) =====
  {
    stageId: '1-1',
    requestTitle: '看板カニのフェリス、初出勤でずっこけ',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '今日から「鉄と歯車のからくり工房」がオープンだよ！フェリスちゃん、まずは玄関の旗までカッコよく歩いてお客さんをお迎えして！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'まかせるカニ！看板カニとして華麗なウォーキングを見せちゃうロボ……あれっ、自分のハサミで足がもつれたカニ！？',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'なんとか旗までたどり着いたカニ！……ふぅ、今の転びかけは「そういうダンス」ってことでごまかすロボ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'あはは、前途多難だけど楽しそう！さあ、これから町のみんなのお手伝いがたくさん来るよ！',
      },
    ],
  },
  {
    stageId: '1-2',
    requestTitle: '右曲がりが苦手なカニの特訓',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'くるみちゃん大変カニ！まっすぐ歩くのは得意なんだけど、カニだから横歩きしかできなくて角が曲がれない気がするロボ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'いやいや、フェリスちゃん前向きに歩けてたじゃん！とりあえず角を右に曲がる練習をしてみようよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'キュキュッと右折できたカニ！僕、カニ界の革命児かもしれないロボ〜！',
      },
    ],
  },
  {
    stageId: '1-3',
    requestTitle: 'お花畑でダンス！？ジグザグ水やり',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: 'こんにちは、くるみちゃん！花壇のチューリップを踏まないように、じょうろを持ってジグザグに歩いてもらえるかしら？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お花のあいだを華麗にステップするカニ！……あれ、水をまきすぎて自分の頭がびしょ濡れロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お花は元気いっぱいだし、ついでにフェリスちゃんのホコリも落ちてピッカピカになったわね♪',
      },
    ],
  },
  {
    stageId: '1-4',
    requestTitle: '小麦粉の山とぐるぐる迷子',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: '大変だ〜！特売の小麦粉を買いすぎたら通路のど真ん中が山になっちゃって、奥の棚まで遠回りしないと通れないんだよ！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'コッペさん、毎回買いすぎだってば！フェリスちゃん、つまみ食いしないでぐるっと回り込んで届けてきて！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お見事！粉まみれにもならず一発到着だ。お礼に焼きたての塩パンをどうぞ〜！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'もぐもぐ……焼きたて最高カニ！（ほっぺが粉だらけ）',
      },
    ],
  },
  {
    stageId: '1-5',
    requestTitle: 'パン屋の「いらっしゃいませ！」大音量事件',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '焼きたてパンが並んだ合図に、元気よく店先で「おはよう！」って声かけしてくれるお迎え係をお願いしたいんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'のど飴なめたから準備バッチリカニ！町中に響きわたる声であいさつするロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'おお〜っ、元気がよすぎて屋根の上のハトまでお辞儀したよ！お礼のクリームパン置いとくね！',
      },
    ],
  },
  {
    stageId: '1-6',
    requestTitle: '喫茶店の常連さん呼び出しトラブル',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'おはよう。今日は混みそうだから、お客さんの番号札をカウンターで分かりやすく読み上げてくれると助かるんだがね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'モカさんおはよう！フェリスちゃん、注文した人の番号を間違えて「自分の年齢」とか言わないでね？',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'よし、間違えずに届いたね。おかげでミルクの泡立てもちょうどよく仕上がったよ。',
      },
    ],
  },
  {
    stageId: '1-7',
    requestTitle: '出発まえの「いってきます！」忘れ',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: 'あっ、また朝ごはんのトーストくわえたまま飛び出してきちゃいました！郵便局では「出発報告」と「到着報告」がルールなのに！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'ポッポさん、まず落ち着いてパンを飲み込もうね。フェリスちゃんが代わりに出発と到着のあいさつ、ちゃんとしてくるよ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '出発も到着もパーフェクトな礼儀正しさ！見習わなくっちゃ……。',
      },
    ],
  },
  {
    stageId: '1-8',
    requestTitle: 'ご近所あいさつ回りでぜんまい切れ！？',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '開店祝いのご近所あいさつ巡りだよ！U字の通りをぐるっと回りながら、パン屋さんも花屋さんも一気に挨拶しちゃおう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'あいさつのたびに手土産もらえる予感がするカニ！はりきって行くロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'みんなと仲良くなれたし大成功！……ってフェリスちゃん、もらいすぎたお菓子で動きが重くなってるよ！',
      },
    ],
  },

  // ===== 第2章：ひみつの鍵とジャム缶騒動 (2-1 〜 2-4) =====
  {
    stageId: '2-1',
    requestTitle: 'おやつ缶の番号、誰が忘れたの！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'やっちゃった！特製のイチゴジャムが入ったおやつ缶、秘密のダイヤル番号を忘れちゃって開かないんだよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'たしか「誕生日」とか「好きなパンの値段」とか言ってなかった？1つずつヒントを頼りに当ててみよう！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'カチャッと開いた〜！思い出した、「今日食べたあんぱんの数」にしてたんだった！てへっ！',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: '食べすぎカニ！！',
      },
    ],
  },
  {
    stageId: '2-2',
    requestTitle: '温室物置のダイヤルと居眠りネコ',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '温室の物置もダイヤル錠なの。開けたあと奥の棚まで鉢植えを運びたいんだけど、1から8のどれだっけ……。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'カチカチ回せばそのうち開くカニ！開いたらお礼にお花のミツ舐めさせてほしいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '開いたわ！……あら、棚の奥でお昼寝してた野良ネコちゃんがびっくりして飛び出していったわね。',
      },
    ],
  },
  {
    stageId: '2-3',
    requestTitle: '珈琲豆の秘密金庫とマスターのこだわり',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: 'うちの秘蔵ブレンド豆をしまった金庫の番号、ちょっとど忘れしてしまってね。ヒントに合わせてピタリと当ててくれないかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'モカさんでも忘れ物するんだね！よし、大きい小さいのヒントを見ながら一発で開けちゃうよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '助かったよ。番号は「お気に入りのマグカップの数」だったか……いや、内緒にしておいてくれ。',
      },
    ],
  },
  {
    stageId: '2-4',
    requestTitle: 'シュッシュッと噴き出す蒸気ドアの向こう',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '郵便倉庫の金庫を開けようとしたら、手前の蒸気ドアがシューシュー閉まったり開いたりして進めません〜！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'タイミングを見計らって「せーの！」で潜り抜けるカニ！あせって挟まれるとペチャンコになっちゃうロボ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ひゃ〜、お見事です！僕だったら絶対にしっぽの羽を挟んでました……。',
      },
    ],
  },

  // ===== 第3章：おつかい三昧の春らんまん (3-1 〜 3-24) =====
  {
    stageId: '3-1',
    requestTitle: 'ひなたぼっこ争奪戦！鉢植えのお引越し',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '春の日差しが気持ちいいから、日当たりのいい角のむこうまで、同じ歩数ずつ鉢植えを運んでほしいの。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '日向ぼっこは僕も大好物カニ！鉢植えのとなりで一緒にお昼寝したいロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'わあ、ぴったり日向におさまったわ。……ってフェリスちゃん、本当に寝ちゃったの！？',
      },
    ],
  },
  {
    stageId: '3-2',
    requestTitle: '駅前と公園、どっちが遠い？暗算大失敗',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'panic',
        text: '駅前までの歩数と公園までの歩数を足して一気に歩こうとしたら、指が足りなくなって数え間違えちゃいました！',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ポッポさん、靴を脱いで足の指まで使おうとしないで！ちゃんとメモしてきっちり届けようね！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ぴったり目的のポストに着きました！これで靴下を脱がずに済みます！',
      },
    ],
  },
  {
    stageId: '3-3',
    requestTitle: '工房の「絶対動かしちゃダメ」な定規',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'normal',
        text: 'ねえくるみちゃん、このピカピカの「基準の定規」、おやつのかき氷を測るのに借りてもいいカニ？',
      },
      {
        speaker: 'kurumi',
        emotion: 'panic',
        text: 'ダメに決まってるでしょ！シロップでベタベタになったら棚の幅が計れなくなるよ！大事な基準は絶対そのまま！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ベタベタにせずお仕事できたカニ！……じゃあ次は定規の代わりにスプーン借りるロボ！',
      },
    ],
  },
  {
    stageId: '3-4',
    requestTitle: '石段ガーデンで花びらチャレンジ',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '階段みたいな石畳の上を、お花を揺らさずにゴールまで運んでくれる？落ちたらお花の妖精が怒るかも♪',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'お、お花の妖精！？そっとそろりそろり歩くカニ〜！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '花びら1枚こぼさず登りきったわね！実は妖精の話は冗談よ、ふふっ♪',
      },
    ],
  },
  {
    stageId: '3-5',
    requestTitle: '小銭貯金箱の「あと2コイン」事件',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: '新しいバターを買うのに、貯金箱の中身があと2コイン足りないんだ！でもフタが固くて増やせないよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'それ、「開けられない秘密の貯金箱」じゃなくて、ただフタがジャムでくっついてるだけじゃ……？',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'ぱかっ！ほんとだ、イチゴジャムが糊になってた！バッチリ貯まったからバター買ってくるね！',
      },
    ],
  },
  {
    stageId: '3-6',
    requestTitle: 'おかわりコーヒーとカップのすり替え',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '最初は小さい見本カップ、おかわりが来たら同じ銘柄のまま大きいカップに差し替えたいんだがね。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '同じ名前でも中身が大きくなるマジックカニ！僕のおやつのお皿もそうしてほしいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'よし、たっぷりのおかわりを出せたよ。フェリスにはちっちゃいビスケットをあげよう。',
      },
    ],
  },
  {
    stageId: '3-7',
    requestTitle: 'スタンプカード3回分のパン屋さん',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'パンを1斤焼くごとにスタンプを1個ずつ押して、3個貯まったら景品ボックスを満たしたいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'スタンプ3個でメロンパン1個おまけカニ！？僕が全力でポンポン押しちゃうロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'スタンプ3つ満タンだ〜！……ってフェリス、自分の甲羅にもスタンプ押してるじゃないか！',
      },
    ],
  },
  {
    stageId: '3-8',
    requestTitle: '2回に分けて荷物積み！坂道お届け',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '最初から重いと転びそうなので、途中で荷物を2回に分けて積み増ししながら曲がり角の先まで行けますか？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'なるほど、賢い作戦！フェリスちゃん、途中で荷物が重くなってもふらつかないでね！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ちょうどいい重さでピタッと到着しました！これで坂道も怖くありません！',
      },
    ],
  },
  {
    stageId: '3-9',
    requestTitle: '晴れスイッチがオフのまま雨具装備！？',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '今日は雲ひとつない青空なのに、お庭の「お出かけスイッチ」がオフのまま動かないみたいなの。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'あわわ！僕は雨の日用のカッパを着て待機中カニ！外はカンカン照りで蒸れ蒸れロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'スイッチを入れてお庭をピッカピカに掃除できたわ！カッパを脱いだら風が涼しいわね♪',
      },
    ],
  },
  {
    stageId: '3-10',
    requestTitle: '地図メモが破れた！？縦横ペアの解読',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '地図の端に「右にいくつ、下にいくつ」ってペアでメモしてあるんですが、急いでると見分けがつかなくて……。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'メモのペアを落ち着いて読み解けば一発だよ！ほら、ちゃんと右と下を順番に見てみよう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'おお〜っ、もう迷子になりません！メモ帳の達人ですね！',
      },
    ],
  },
  {
    stageId: '3-11',
    requestTitle: '焼きたてトレーの「2番目」つまみ食い未遂',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'トレーに3つ並んだパンのうち、左から数えて2番目の数だけ取り出して金庫に入れたいんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'えっ、「0番目、1番目、2番目」って数えるから……あっ、うっかり3番目のチョココロネに手が伸びちゃうカニ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'ばっちり真ん中が取れたよ！コロネはあとでオヤツに分けてあげるからね。',
      },
    ],
  },
  {
    stageId: '3-12',
    requestTitle: '秘密の豆リストと喫茶店の開錠スイッチ',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '豆の配分メモと「準備よし」の合図を組み合わせて、奥の倉庫まで運んでもらえるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '任せてモカさん！フェリスちゃん、いい香りに釣られて勝手に豆をガリガリ食べちゃダメだよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '香りも仕事ぶりも文句なしだ。ごほうびに甘いカフェオレを淹れてあげよう。',
      },
    ],
  },
  {
    stageId: '3-13',
    requestTitle: 'おねむの郵便屋さんと倍速配達',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: 'ふぁ〜あ……今日はいつもの2倍の距離まで配達なんです。歩きながら寝ちゃいそうで……。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ポッポさん、歩き寝は危ないよ！倍の歩数を計算するおまじないを決めて、一気に配達してきちゃおう！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ぴったり到着！これなら夢の中に行く前に帰り着けそうです……Zzz。',
      },
    ],
  },
  {
    stageId: '3-14',
    requestTitle: '花束お出かけメモの1行まとめ術',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '「右へ何歩、曲がって下へ何歩」って、お花の配達メモを毎回同じ形式でササッとまとめられたら楽なのにね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'お決まりのルートを手帳に「お出かけセット」として登録しちゃえば、次からは一言で呼び出せるよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'まあ素敵！これなら忙しい朝でもサッとお願いできるわ♪',
      },
    ],
  },
  {
    stageId: '3-15',
    requestTitle: '屋根裏の粉倉庫！同じ階段を何度も往復',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '屋根裏へ上がるカクカク階段、毎回おんなじ段差を登るのが大変でさ。リズミカルにポンポン登れないかな？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '「右！左！右！」って掛け声をかけながら登れば楽しくなるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'テンポが良すぎてダンスみたいだったね！粉袋もあっという間に運べたよ！',
      },
    ],
  },
  {
    stageId: '3-16',
    requestTitle: '準備係と出発係のバタバタ連携',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'normal',
        text: 'くるみちゃん、僕ひとりであれもこれもやるより、作業を「準備係」と「走る係」に分けたらカッコいいカニ？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'いいね！役割分担を決めておけば、どっちも慌てずにスマートにこなせるよ！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '役割分担ばっちりカニ！……あれ、でも結局どっちも僕が動いてる気がするロボ？',
      },
    ],
  },
  {
    stageId: '3-17',
    requestTitle: 'パン窯の蒸気ドアで焦らずひと休み',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '通路の蒸気ドアがシューッと閉まってるときがあるんだ。焦って突っ込むとパンがペチャンコになるから待ってね！',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'わっ、ドアが閉まってる間にパンのいい匂いを嗅いで我慢大会カニ〜！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '焦らず待ったおかげでふわふわのまま届いたよ！我慢したごほうびに端っこあげるね！',
      },
    ],
  },
  {
    stageId: '3-18',
    requestTitle: '小包の重さチェック！3つの仕分けコース',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '小包が「軽い」「ふつう」「重い」のどれかで、運ぶ棚を分けたいんです！まちがえると棚がギシギシ鳴っちゃって……。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '重さをしっかり測って3つのコースに振り分けよう！フェリスちゃん、ついでに自分の体重測っちゃダメだよ？',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'ぴったりの棚へスッと収まりました！棚もご機嫌そうです！',
      },
    ],
  },
  {
    stageId: '3-19',
    requestTitle: '急ぎ足？のんびり？お天気しだいのお散歩',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '急いでるときは大股で、のんびりのときは小股で歩くように、お出かけ前に気分で歩幅を決めたいんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '僕はいつでもお菓子が見えたら超ダッシュカニ！お天気が良ければお散歩日和ロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'スマートな歩き分けだね。これなら雨上がりの水たまりも避けられそうだ。',
      },
    ],
  },
  {
    stageId: '3-20',
    requestTitle: '秘密の踏み石でゲートを開けよう',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '温室の通路の先に足踏みスイッチがあるの。先にそれをギュッと踏まないと、向こうの大きな門が開かない仕掛けなのよ。',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '体重には自信があるカニ！……いや、ちょっとだけ増えたかもだからそっと踏むロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'ガシャンと気持ちよく門が開いたわ！フェリスちゃんの体重、ちょうど良かったみたいね♪',
      },
    ],
  },
  {
    stageId: '3-21',
    requestTitle: '2つの蒸気ゲートでタイミング勝負',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '温室の奥に蒸気ゲートが2つ並んでいて、開くリズムがバラバラなの。リズムに乗って通り抜けられるかしら？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '「イチ、ニ、今だ！」ってよく見て進もう！急がば回れ、安全第一だよ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'わぁ、まるでダンスみたいにスイスイ抜けていったわね！',
      },
    ],
  },
  {
    stageId: '3-22',
    requestTitle: 'ビリビリ巡回ロボットにご用心！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'うわわっ！廊下をビリビリ光るお掃除スパークが行ったり来たりしてるカニ！あたったら髪の毛チリチリになっちゃう〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'フェリスちゃん、髪の毛ないでしょ！落ち着いて通り過ぎるのを待ってからまっすぐ駆け抜けよう！',
      },
    ],
    outro: [
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'シビれずにすり抜けられたカニ！甲羅もつやつやのままロボ！',
      },
    ],
  },
  {
    stageId: '3-23',
    requestTitle: '広場のぐるぐるパトロールで目が回る〜',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '広場の四隅にあるポストを順番に回って、忘れ物がないかパトロールしたいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ぐるっと四角く回るだけカニ？お手のものロボ……あれ、4回まわったら目がぐるぐるしてきたカニ〜！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'きれいな四角形で戻ってきました！忘れ物もゼロで完璧です！',
      },
    ],
  },
  {
    stageId: '3-24',
    requestTitle: '商店街の合同大そうじリレー！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'これまでのお手伝いの総まとめ！3つの蒸気ゲートを抜けて、町の金庫をいっぱいにしよう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '全部やりきったら、きっとコッペさんが特大メロンパン焼いてくれるカニ！気合マシマシで行くロボ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '大成功！町の頼まれごともすっかり板についてきたね。さあ、明日からも楽しくおてつだいしよう！',
      },
    ],
  },

  // ===== 第4章：迷子の荷物とひとりじめ事件 (4-1 〜 4-12) =====
  {
    stageId: '4-1',
    requestTitle: 'お花のタネ、手放したあとも気になっちゃう',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '大事な光のタネを1つだけ花壇のゴールへ運んでほしいの。渡したあとも気になって触ろうとしちゃダメよ？',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'えっ、預けたあともピカピカしてるからついツンツンしたくなっちゃうカニ……我慢するロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'タネが迷子にならず、きちんと1つだけ届いたわ！これで春のお花も安心ね。',
      },
    ],
  },
  {
    stageId: '4-2',
    requestTitle: 'お買い物カゴ、誰が持ってるの！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'あれっ！？隣の店員さんにパンのカゴを渡したはずなのに、うっかり自分の空っぽのカゴを届けようとしちゃったよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'コッペさん、それただのエア荷物だよ！受け取った人の手元からちゃんと届けようね！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'そっか、中身は1つしかないから受け取ったほうを渡せばいいんだね！あはは、うっかりうっかり！',
      },
    ],
  },
  {
    stageId: '4-3',
    requestTitle: '預けた大事なもの、ちゃんと返して〜！',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '点検に出した光る豆ランプ、向こうに持っていかれたまま戻ってこないんだが。ちゃんと手元へ返してもらえるかな？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'おまかせ！点検が終わったらきちんと持ち主へ返すように伝えておいたよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'おお、ピカピカになって戻ってきたよ。これなら安心して預けられるね。',
      },
    ],
  },
  {
    stageId: '4-4',
    requestTitle: '2つの光の玉を順番リレー',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '今日は大事なお届け物が2つあります！1つ目を届けてから、忘れずに2つ目もお願いできますか？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '両手に1個ずつ……は重くてコケそうだから、1個ずつしっかり届けるカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: '2つとも取り違えゼロで完璧に届きました！',
      },
    ],
  },
  {
    stageId: '4-5',
    requestTitle: 'ランプのちょっと貸し出し＆ピカピカ磨き',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '喫茶店のランプ、ちょっとだけ見せて、ついでに光パワーを強くしてから返してくれるかい？',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'はーい！「ちょっと見せて」と「ちょっと磨くよ」を順番にやれば、持ち主の手元からなくならないよ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'うん、温かみのあるいい光だ。お店がぐっと明るくなったよ。',
      },
    ],
  },
  {
    stageId: '4-6',
    requestTitle: '新種のお花、クンクン香りチェックは大人気',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '珍しいお花が咲いたの！見るだけなら何人で覗き込んでも減らないし、2回続けてチェックしても平気よね？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'クンクン……甘い香りがするカニ！触らないで眺めるだけなら100人でも見れるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: '2回のチェックも合格ね！さっそくお店の特等席に並べましょう♪',
      },
    ],
  },
  {
    stageId: '4-7',
    requestTitle: 'チョコペンは1本だけ！取り合いケンカ勃発',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'panic',
        text: 'たいへんだ！ケーキに字を書くチョコペンを2人同時に使おうとして、クリームがぐちゃぐちゃになりそうだよ〜！',
      },
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: '書き換えるペンは1回に1人ずつ！順番を守ればケンカにならないし、文字もきれいに書けるよ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: '順番を守ったら「たんじょうびおめでとう」が綺麗に書けたよ！仲直りだね！',
      },
    ],
  },
  {
    stageId: '4-8',
    requestTitle: 'まぶしすぎ！？特大パワーの光お届け',
    client: 'poppo',
    intro: [
      {
        speaker: 'poppo',
        emotion: 'normal',
        text: '遠くの灯台へ送るランプ、夜道でも目立つように2回ぶんピカピカに磨いて届けてほしいんです！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'キュキュッと2回磨いたら……うわっ、まぶしすぎてサングラスがほしいカニ！',
      },
    ],
    outro: [
      {
        speaker: 'poppo',
        emotion: 'happy',
        text: 'お星さまみたいにキラキラですね！これなら夜中の配達も道に迷いません！',
      },
    ],
  },
  {
    stageId: '4-9',
    requestTitle: '焼き菓子トレーの真ん中だけ味見タイム',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: 'オーブンから出した4個のパンのうち、真ん中の2個だけ焼き色がちょうどいいか見てほしいんだ！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'お皿ごと運ばなくても、真ん中2つだけチラッと見ればいいカニ！……味見はダメロボ？',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お見事！こんがりきつね色、完璧な焼き上がりだよ！',
      },
    ],
  },
  {
    stageId: '4-10',
    requestTitle: '端っこからザックリ花束づくり',
    client: 'mimosa',
    intro: [
      {
        speaker: 'mimosa',
        emotion: 'normal',
        text: '「最初から3本だけ」とか「後ろの残り全部」みたいに、パッと見てすぐわかる束ね方をしたいのよ。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'それならリボンでサッとくくる場所だけ決めて、端っこからまとめて見よう！',
      },
    ],
    outro: [
      {
        speaker: 'mimosa',
        emotion: 'happy',
        text: 'お花束のサイズ分けがとっても見やすくなったわ♪',
      },
    ],
  },
  {
    stageId: '4-11',
    requestTitle: '数えたお豆の数だけトコトコ歩き',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '選んだ豆のグループの本数をそのまま歩数にして、カウンターの端まで運んでもらえるかい？',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '豆を1、2、3……って数えたらお腹がすいてきたカニ。寄り道しないで届けるロボ！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: 'ちょうど注文数とおんなじ歩数で届いたね。無駄のない動きだ。',
      },
    ],
  },
  {
    stageId: '4-12',
    requestTitle: '町内会のおおそうじ・みんなでひと休み！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '商店街のみんなからの合同おてつだいだよ！大事な荷物も貸し出しの道具も、ぜんぶまとめてやりきっちゃおう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: '終わったらおやつタイムが待ってるカニ！最後のひとふんばりロボ〜！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'お見事！全部スッキリ片付いたね。試食会のパンを山盛り持ってきたよ〜！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'わーい！いただきまーすカニ！！',
      },
    ],
  },
];
