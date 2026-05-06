/** OpenAI Realtime `session.update.session.voice` — single source for FE + BE. */
export const OPENAI_REALTIME_VOICE_IDS = [
  'alloy',
  'ash',
  'ballad',
  'cedar',
  'coral',
  'echo',
  'marin',
  'sage',
  'shimmer',
  'verse',
] as const;

export type OpenaiRealtimeVoiceId = (typeof OPENAI_REALTIME_VOICE_IDS)[number];

export const DEFAULT_OPENAI_REALTIME_VOICE: OpenaiRealtimeVoiceId = 'sage';

const VOICE_SET = new Set<string>(OPENAI_REALTIME_VOICE_IDS);

export function normalizeRealtimeVoiceFromDb(raw: string | null | undefined): OpenaiRealtimeVoiceId {
  if (raw && VOICE_SET.has(raw)) return raw as OpenaiRealtimeVoiceId;
  return DEFAULT_OPENAI_REALTIME_VOICE;
}

export function parseRealtimeVoiceField(
  raw: unknown,
): { ok: true; value: OpenaiRealtimeVoiceId } | { ok: false; error: string } {
  if (raw === null || raw === '') {
    return { ok: true, value: DEFAULT_OPENAI_REALTIME_VOICE };
  }
  if (typeof raw !== 'string') {
    return { ok: false, error: 'realtime_voice bir metin olmalıdır' };
  }
  const v = raw.trim().toLowerCase();
  if (!VOICE_SET.has(v)) {
    return {
      ok: false,
      error: `realtime_voice şu değerlerden biri olmalıdır: ${OPENAI_REALTIME_VOICE_IDS.join(', ')}`,
    };
  }
  return { ok: true, value: v as OpenaiRealtimeVoiceId };
}
