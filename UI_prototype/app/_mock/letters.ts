export type LetterStatus = 'DELIVERED' | 'SCHEDULED';
export type LetterTheme = 'simple' | 'night' | 'japanese';

export type Letter = {
  id: string;
  from: string;
  to: string;
  title: string;
  body: string;
  status: LetterStatus;
  scheduledAt?: string;
  deliveredAt?: string;
  theme: LetterTheme;
  preview?: string;
};

export const mockLetters: Letter[] = [
  {
    id: '1',
    from: 'ゆかり',
    to: 'あなた',
    title: 'この前のお出かけ、楽しかったね',
    body: `この前の週末、一緒に行ったカフェの静けさがとても心地よくて、
窓際の席で見た午後の光がまだ目に焼き付いています。

あなたの笑顔がふと浮かぶだけで、少し背筋が伸びるような気がするんだ。
また時間を見つけて、あの道を一緒に歩こうね。`,
    status: 'DELIVERED',
    deliveredAt: '2025-05-12 21:00',
    theme: 'simple',
    preview: 'この前の週末、一緒に行ったカフェのこと…',
  },
  {
    id: '2',
    from: '未来のあなた',
    to: 'あなた',
    title: '1年後の自分へ',
    body: `1年後のあなたへ。

いまよりも少し肩の力が抜けて、好きなものを好きと言える毎日でありますように。
朝の空気を吸い込むとき、胸の奥がひんやりして気持ちいいのを忘れないで。
迷ったときは空を見上げて、大きく深呼吸するんだよ。`,
    status: 'SCHEDULED',
    scheduledAt: '2026-11-10 08:00',
    theme: 'night',
    preview: '1年後にこの手紙を読み返しているあなたへ…',
  },
  {
    id: '3',
    from: '母より',
    to: 'さくら',
    title: '成人の日、おめでとう',
    body: `さくらへ。成人の日おめでとう。

小さな手を握って歩いた商店街の匂いまで思い出して、胸がいっぱいになります。
これからも自分らしく、ゆっくりでいいから前に進みなさい。
困ったらいつでも帰っておいで。`,
    status: 'DELIVERED',
    deliveredAt: '2025-01-13 12:00',
    theme: 'japanese',
    preview: '成人の日、おめでとう。これからも自分らしく…',
  },
  {
    id: '4',
    from: 'コーチ',
    to: 'チームのみんな',
    title: '決勝戦前夜のメッセージ',
    body: `いつものみんなへ。

明日のコートで大切なのは、練習してきたことを信じる勇気だけ。
バスの揺れと同じリズムで深呼吸して、スタートの笛を迎えよう。
勝ち負けよりも、笑顔で終われるよう全力で楽しむんだ。`,
    status: 'SCHEDULED',
    scheduledAt: '2025-06-30 07:00',
    theme: 'simple',
    preview: '明日のコートで大切なのは、練習してきたことを信じる勇気…',
  },
];

export const mockRecipients = ['あなた', '未来のあなた', 'さくら', 'ゆかり'];
