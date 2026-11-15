import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_10: StageStoryEntry[] = [
  // ===== 第10章：お天気くるくる商店街 (10-1 〜 10-12) =====
  {
    stageId: '1395d0fb-100f-5691-bb36-d711fd1986a4',
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
    stageId: '5cec4f53-25c5-5d1a-9e73-5237c34fab1b',
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
    stageId: '3bf874e0-1b14-507d-ab3e-f9bab2d94df7',
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
    stageId: '39d37ecf-45a1-554c-a739-37b5aac62d84',
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
    stageId: 'd14868f8-8cbf-530d-a93d-a98815a08d63',
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
    stageId: '0abe7860-9851-59fc-a65f-b3773dcbc1e4',
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
    stageId: 'aaf4d7e9-f870-51f1-adf1-33c70b50c739',
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
    stageId: '670de184-8b92-50de-9968-d8c01ebcb71a',
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
    stageId: 'b8655651-9707-54d9-9fdf-78b6aa2502b1',
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
    stageId: 'd9880bf2-1382-506d-9278-982f6a23b006',
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
    stageId: '64c45e7d-03c6-56a7-907d-ce965a9b5065',
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
    stageId: 'e9eb0507-342b-51a4-835f-29d3b7e4a845',
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

];
