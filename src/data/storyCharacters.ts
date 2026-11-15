import kurumiImg from '../assets/images/kurumi_anime_face_1794631912164.jpg';
import coppeImg from '../assets/images/visitor_coppe_baker_1794639561230.jpg';
import mimosaImg from '../assets/images/visitor_mimosa_florist_1794639561451.jpg';
import poppoImg from '../assets/images/visitor_poppo_mailman_1794639562252.jpg';
import mokaImg from '../assets/images/visitor_moka_barista_1794639562441.jpg';
import { StorySpeakerId } from '../types/game';

export interface StoryCharacterMeta {
  id: StorySpeakerId;
  name: string;
  role: string;
  side: 'left' | 'right';
  accentColor: string;
  surfaceBg: string;
  imageSrc?: string;
  svgVariant?: 'ferris' | 'milk';
}

export const STORY_CHARACTERS: Record<StorySpeakerId, StoryCharacterMeta> = {
  kurumi: {
    id: 'kurumi',
    name: 'くるみちゃん',
    role: 'からくり工房の見習い看板娘',
    side: 'left',
    accentColor: '#EA580C',
    surfaceBg: '#FFF7ED',
    imageSrc: kurumiImg,
  },
  ferris: {
    id: 'ferris',
    name: 'フェリスちゃん',
    role: 'お調子者の看板カニロボ',
    side: 'left',
    accentColor: '#F97316',
    surfaceBg: '#FFEDD5',
    svgVariant: 'ferris',
  },
  milk: {
    id: 'milk',
    name: 'みるく号',
    role: 'しっかり者のおてつだいロボ',
    side: 'left',
    accentColor: '#0D9488',
    surfaceBg: '#CCFBF1',
    svgVariant: 'milk',
  },
  coppe: {
    id: 'coppe',
    name: 'コッペさん',
    role: 'ひなたパン屋の食いしん坊店主',
    side: 'right',
    accentColor: '#D97706',
    surfaceBg: '#FEF3C7',
    imageSrc: coppeImg,
  },
  mimosa: {
    id: 'mimosa',
    name: 'ミモザさん',
    role: 'そよかぜ花屋のお姉さん',
    side: 'right',
    accentColor: '#059669',
    surfaceBg: '#D1FAE5',
    imageSrc: mimosaImg,
  },
  poppo: {
    id: 'poppo',
    name: 'ポッポさん',
    role: '歯車町ののんびり郵便屋さん',
    side: 'right',
    accentColor: '#0284C7',
    surfaceBg: '#E0F2FE',
    imageSrc: poppoImg,
  },
  moka: {
    id: 'moka',
    name: 'モカさん',
    role: '路地裏喫茶のこだわりマスター',
    side: 'right',
    accentColor: '#92400E',
    surfaceBg: '#FDE68A',
    imageSrc: mokaImg,
  },
};
