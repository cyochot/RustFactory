import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_7: StageStoryEntry[] = [
  // ===== 第7章：おつかい三昧の春らんまん (7-1 〜 7-24) =====
  {
    stageId: '6e466d1c-6446-50a6-9f20-5713b0f001bc',
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
    stageId: 'ee29dcf5-b86c-5d88-a78c-bcadf4f31c38',
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
    stageId: 'c039a435-cf9f-5b6d-87cf-6bc49c25ab78',
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
    stageId: 'b4247893-4f8e-55a6-bf4b-bfd93240b2f4',
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
    stageId: '039e4a88-0c87-5c92-8e17-3cf0b2f296ca',
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
    stageId: '377498db-d9ab-5616-bbb4-224392d3567f',
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
    stageId: 'f15cf767-4a5e-5cc3-a583-ef9a0b9066c1',
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
    stageId: 'f7b3e4bb-0166-575d-a501-a676dfc374f0',
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
    stageId: 'd1c509c8-ae38-50bc-a8fa-ab48455d6760',
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
    stageId: 'b11c3a34-ea38-54b2-8739-ab0bb02b4dfe',
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
    stageId: '8ad7a0c6-1726-556b-ba4d-308098dc63b2',
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
    stageId: '627e9a97-0fe4-5eea-b8d4-b8130c2b866c',
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
    stageId: 'ad8723b7-9cb3-5a23-a8e0-f0ddc061b223',
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
    stageId: '0a3c9f77-c645-5cd5-af0e-bbc385222479',
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
    stageId: '041cf963-f0ba-508c-92a4-f44dac3db59d',
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
    stageId: 'f734e8a9-cba0-5a6b-814c-dc38fc85ee09',
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
    stageId: 'e41c8968-0b68-5dca-a17c-0cdd5b6ac63d',
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
    stageId: '8adb3fdd-da52-5b73-a97b-ccffec78fe4f',
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
    stageId: 'a90971e7-5050-5236-ba1f-7abfe3891ba7',
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
    stageId: 'f66e8848-d720-552b-905d-bc7647dd47fa',
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
    stageId: '91c103b3-4b14-5702-825b-17ba9f9def66',
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
    stageId: '3164f81c-a2e0-50c3-8b9c-ed58da4e0c6b',
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
    stageId: '156c1e98-7679-5841-bb20-4bc9e0bd9ea6',
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
    stageId: '4197175c-0415-5922-90de-969c839b1e44',
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

];
