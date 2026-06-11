export const SOLUTION_MODES = ['hotel', 'advertisement_agency', 'secretary', 'sales'] as const;

export type SolutionMode = (typeof SOLUTION_MODES)[number];

export const DEFAULT_SOLUTION_MODE: SolutionMode = 'hotel';

export function isSolutionMode(value: unknown): value is SolutionMode {
  return typeof value === 'string' && (SOLUTION_MODES as readonly string[]).includes(value);
}

export function normalizeSolutionMode(value: unknown): SolutionMode {
  return isSolutionMode(value) ? value : DEFAULT_SOLUTION_MODE;
}

export function isHotelMode(value: unknown): boolean {
  return normalizeSolutionMode(value) === 'hotel';
}
