export * from './array'
export * from './platform'
export * from './time'

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const fnDefault = () => {}
