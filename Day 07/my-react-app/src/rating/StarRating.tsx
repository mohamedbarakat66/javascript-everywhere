
interface StarRatingProps {
  value: number;
  max?: number;
}

export default function StarRating({ value, max = 5 }: StarRatingProps) {
  if (
    typeof value !== 'number' ||
    typeof max !== 'number' ||
    isNaN(value) ||
    isNaN(max) ||
    !isFinite(value) ||
    !isFinite(max) ||
    max <= 0
  ) {
    return null; 
  }

  const validMax = Math.floor(max);
  const validValue = Math.max(0, Math.min(value, validMax));
  const roundedValue = Math.round(validValue);

  const stars = Array.from({ length: validMax }, (_, index) => {
    return index < roundedValue ? '★' : '☆';
  }).join('');

  const ariaLabel = `${validValue} out of ${validMax}`;

  return (
    <div role="img" aria-label={ariaLabel} style={{ display: 'inline-flex', gap: '8px', fontSize: '1.2rem' }}>
      <span>{stars}</span>
      <span style={{ color: '#666' }}>({validValue}/{validMax})</span>
    </div>
  );
}