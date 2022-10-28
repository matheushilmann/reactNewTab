export function Mask(event) {
  const mask = event.target.value
    .replace(/\D/g, '')
    .replace(/^0*/, '')
    .padStart(3, '0')
    
  event.target.value = 'R$ ' + mask.slice(0, -2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',' + mask.slice(-2)
}