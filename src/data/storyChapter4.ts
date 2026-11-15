import { StageStoryEntry } from '../types/game';

export const STORY_CHAPTER_4: StageStoryEntry[] = [
  // ===== 第4章：広場のからくり大時計 (4-1 〜 4-4) =====
  {
    stageId: '62c16d48-5006-58eb-a279-15dc4fbab59e',
    requestTitle: '広場の古いからくり時計、最後のネジ調整！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'normal',
        text: 'お祭り広場の古いからくり時計、最後の微調整だけは安全カバーを外して歯車をそっと触る必要があるんだ。',
      },
      {
        speaker: 'ferris',
        emotion: 'panic',
        text: 'ど、どきどき……ハサミが滑ってバネがビヨーンって飛び出さないよう、息を止めてそっと調整するカニ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'チクタク、カチッ……完璧なリズム！時計台の針もご機嫌に動き出したよ！',
      },
    ],
  },
  {
    stageId: '63517659-1139-5cc9-9399-c16490d7cf29',
    requestTitle: '熟練の時計調整、安全ラインの中で慎重に',
    client: 'moka',
    intro: [
      {
        speaker: 'moka',
        emotion: 'normal',
        text: '時計職人向けの特別な調整作業が用意されているんだが、うっかり触れないよう安全な範囲をはっきり囲って使う決まりなんだよね。',
      },
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: '立ち入り禁止テープを張って慎重に作業して、大事な調整パワーをしっかり取り出そう！',
      },
    ],
    outro: [
      {
        speaker: 'moka',
        emotion: 'happy',
        text: '危ない場所を狭い範囲に閉じ込めつつ、精密な調律値が取り出せたね。さすがだ。',
      },
    ],
  },
  {
    stageId: '7e58cc7c-831e-5f71-a098-53511a88fcf7',
    requestTitle: 'お好みのステップを唱える魔法の呪文！？',
    client: 'coppe',
    intro: [
      {
        speaker: 'coppe',
        emotion: 'normal',
        text: '「指定した数だけ進んで右を向く」っていうお決まりの動き、短い呪文を唱えるだけでパッと広がったらカッコいいな！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'ちちんぷいぷい、カニカニダッシュ〜！って唱えたら勝手に足が動く魔法みたいで楽しいロボ！',
      },
    ],
    outro: [
      {
        speaker: 'coppe',
        emotion: 'happy',
        text: 'ほんとに魔法の呪文みたいにスッとL字に到着したよ！すごいね！',
      },
    ],
  },
  {
    stageId: '62a4650f-fe84-5fda-836a-c0036f5ffe9b',
    requestTitle: 'ボーン！広場の時計台グランドオープン！',
    client: 'kurumi',
    intro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ついに時計台のお披露目だよ！基準値の歯車をピタッと合わせて、自家製の号令でゲートを抜け、鐘を鳴らそう！',
      },
      {
        speaker: 'ferris',
        emotion: 'happy',
        text: 'これで町中の時計がピタリと合ったカニ！いよいよお祭り本番の始まりロボ！',
      },
    ],
    outro: [
      {
        speaker: 'kurumi',
        emotion: 'happy',
        text: 'ボーン、ボーン！時計台の鐘が鳴り響いたよ！さあ、町の全員で最高のお祭りを始めよう！',
      },
    ],
  },

];
