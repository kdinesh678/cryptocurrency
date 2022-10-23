export function formatCurrency(value: number, currency: string) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
}
