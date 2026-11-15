import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_9: StageStoryEntry[] = [
  // ===== 第9章：特製スタンプと名物メモ帳 (9-1 〜 9-8) =====
  {
    stageId: '1980bf6e-258f-5ba0-80b7-eebe20305171',
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
    stageId: '6bc94245-f5e4-561c-b1a1-f702ad499fb6',
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
    stageId: '1255fea6-f0fc-5911-9d77-9e6386a528cf',
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
    stageId: 'd4f80b3d-a05c-5b52-af65-5dac0d83bd98',
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
    stageId: 'cc08fb86-3ef1-5b5c-be2c-bcd5f084d0a9',
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
    stageId: '192b0b47-cbdf-57df-9e79-5b6b9661e700',
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
    stageId: '2fcba75b-b840-54f5-ace5-9e10d4f3ecd6',
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
    stageId: '15fbf14e-4902-5a68-b725-e98586b19c62',
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

];
