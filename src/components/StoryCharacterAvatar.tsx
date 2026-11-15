import React, { useState } from 'react';
import { STORY_CHARACTERS } from '../data/storyCharacters';
import { StoryEmotion, StorySpeakerId } from '../types/game';

interface StoryCharacterAvatarProps {
  speakerId: StorySpeakerId;
  emotion?: StoryEmotion;
  size?: 'sm' | 'lg';
}

const RobotPortraitSvg: React.FC<{
  variant: 'ferris' | 'milk';
  emotion: StoryEmotion;
}> = ({ variant, emotion }) => {
  const isMilk = variant === 'milk';
  const main = isMilk ? '#2DD4BF' : '#FB923C';
  const shade = isMilk ? '#0D9488' : '#EA580C';
  const highlight = isMilk ? '#99F6E4' : '#FED7AA';
  const bg = isMilk ? '#E6FFFA' : '#FFF7ED';

  return (
    <svg
      viewBox="0 0 120 120"
      className="h-full w-full"
      role="img"
      aria-label={isMilk ? 'みるく号のポートレート' : 'フェリスちゃんのポートレート'}
    >
      <rect width="120" height="120" fill={bg} />
      <circle cx="24" cy="22" r="10" fill={highlight} opacity="0.55" />
      <circle cx="96" cy="94" r="14" fill={highlight} opacity="0.45" />

      {/* Wind-up key */}
      <rect
        x="56"
        y="12"
        width="8"
        height="16"
        rx="2"
        fill="#FBBF24"
        stroke="#4A352B"
        strokeWidth="3"
      />
      <ellipse
        cx="50"
        cy="13"
        rx="8"
        ry="6"
        fill="#FBBF24"
        stroke="#4A352B"
        strokeWidth="3"
      />
      <ellipse
        cx="70"
        cy="13"
        rx="8"
        ry="6"
        fill="#FBBF24"
        stroke="#4A352B"
        strokeWidth="3"
      />

      {/* Legs */}
      <path
        d="M28 74L14 86M28 84L16 98M92 74L106 86M92 84L104 98"
        stroke="#4A352B"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Pincers */}
      <circle
        cx="20"
        cy="54"
        r="12"
        fill={main}
        stroke="#4A352B"
        strokeWidth="3.2"
      />
      <circle
        cx="100"
        cy="54"
        r="12"
        fill={main}
        stroke="#4A352B"
        strokeWidth="3.2"
      />

      {/* Main shell */}
      <ellipse
        cx="60"
        cy="70"
        rx="36"
        ry="28"
        fill={main}
        stroke="#4A352B"
        strokeWidth="3.5"
      />
      <path
        d="M28 76C34 90 86 90 92 76C86 85 34 85 28 76Z"
        fill={shade}
      />
      <ellipse
        cx="46"
        cy="52"
        rx="13"
        ry="5.5"
        transform="rotate(-14 46 52)"
        fill={highlight}
      />

      {/* Milk-go ribbon */}
      {isMilk && (
        <g transform="translate(86, 40) rotate(18)">
          <path
            d="M0 0L-13 -9L-10 7Z M0 0L13 -7L10 9Z"
            fill="#F472B6"
            stroke="#4A352B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle
            cx="0"
            cy="0"
            r="4.5"
            fill="#FDE047"
            stroke="#4A352B"
            strokeWidth="2.2"
          />
        </g>
      )}

      {/* Eyes based on emotion */}
      {emotion === 'panic' ? (
        <g stroke="#4A352B" strokeWidth="3.5" strokeLinecap="round" fill="none">
          <path d="M38 61L48 67L38 73" />
          <path d="M82 61L72 67L82 73" />
        </g>
      ) : emotion === 'happy' ? (
        <g stroke="#4A352B" strokeWidth="3.5" strokeLinecap="round" fill="none">
          <path d="M37 68C40 61 48 61 51 68" />
          <path d="M69 68C72 61 80 61 83 68" />
        </g>
      ) : (
        <g>
          <circle cx="44" cy="67" r="6.5" fill="#4A352B" />
          <circle cx="76" cy="67" r="6.5" fill="#4A352B" />
          <circle cx="41.8" cy="64.5" r="2.4" fill="#FFFFFF" />
          <circle cx="73.8" cy="64.5" r="2.4" fill="#FFFFFF" />
        </g>
      )}

      {/* Blush */}
      <ellipse cx="32" cy="76" rx="5.5" ry="3" fill="#F472B6" opacity="0.6" />
      <ellipse cx="88" cy="76" rx="5.5" ry="3" fill="#F472B6" opacity="0.6" />

      {/* Mouth */}
      {emotion === 'panic' ? (
        <circle
          cx="60"
          cy="79"
          r="5"
          fill="#FFF8EE"
          stroke="#4A352B"
          strokeWidth="2.8"
        />
      ) : emotion === 'happy' ? (
        <path
          d="M52 76C55 84 65 84 68 76Z"
          fill="#FB7185"
          stroke="#4A352B"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M54 77C57 81 63 81 66 77"
          fill="none"
          stroke="#4A352B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

export const StoryCharacterAvatar: React.FC<StoryCharacterAvatarProps> = ({
  speakerId,
  emotion = 'normal',
  size = 'lg',
}) => {
  const [imgError, setImgError] = useState(false);
  const char = STORY_CHARACTERS[speakerId];

  const boxClass =
    size === 'lg'
      ? 'h-24 w-24 sm:h-28 sm:w-28 rounded-2xl border-2 border-[#4A352B] shadow-[0_3px_0_#D9C0A3]'
      : 'h-11 w-11 rounded-xl border-2 border-[#4A352B]';

  if (char.svgVariant) {
    return (
      <div
        className={`${boxClass} shrink-0 overflow-hidden`}
        style={{ backgroundColor: char.surfaceBg }}
      >
        <RobotPortraitSvg variant={char.svgVariant} emotion={emotion} />
      </div>
    );
  }

  if (char.imageSrc && !imgError) {
    return (
      <div
        className={`${boxClass} shrink-0 overflow-hidden`}
        style={{ backgroundColor: char.surfaceBg }}
      >
        <img
          src={char.imageSrc}
          alt={`${char.name}のポートレート`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`${boxClass} shrink-0 flex items-center justify-center font-display text-sm font-extrabold text-[#4A352B]`}
      style={{ backgroundColor: char.surfaceBg }}
    >
      {char.name.slice(0, 3)}
    </div>
  );
};
