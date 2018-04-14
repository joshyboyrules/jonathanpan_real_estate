
export const required = value => {
  return value || value === 0 ? undefined : 'Required'
}