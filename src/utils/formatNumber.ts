export const formatNumber = (value: number) =>
  value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
