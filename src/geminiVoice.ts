/** Gemini Live prebuilt voice ids — single source for FE + BE. */
export const GEMINI_PREBUILT_VOICE_IDS = [
  'Aoede',
  'Charon',
  'Fenrir',
  'Kore',
  'Puck',
  'Lyra',
] as const;

export type GeminiVoiceId = (typeof GEMINI_PREBUILT_VOICE_IDS)[number];

export const DEFAULT_GEMINI_VOICE: GeminiVoiceId = 'Lyra';

const GEMINI_VOICE_SET = new Set<string>(GEMINI_PREBUILT_VOICE_IDS);

export function normalizeGeminiVoice(raw: string | null | undefined): GeminiVoiceId {
  if (raw && GEMINI_VOICE_SET.has(raw)) return raw as GeminiVoiceId;
  return DEFAULT_GEMINI_VOICE;
}
