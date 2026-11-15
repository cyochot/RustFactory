import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_16: StageStoryEntry[] = [
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
