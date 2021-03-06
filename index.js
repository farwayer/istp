export const isType = type => val => typeof val === type
export const isFn = isType('function')
export const isStr = isType('string')
export const isObj = isType('object')
export const isNum = isType('number')
export const isBool = isType('boolean')
export const isSym = isType('symbol')
export const isBigInt = isType('bigint')
export const isDef = val => val !== undefined
export const isUndef = val => val === undefined
export const isNul = val => val === null
export const isNil = val => val == null
export const isInt = Number.isInteger
export const isNan = Number.isNaN
export const isArr = Array.isArray
export const isDate = val => val instanceof Date
export const isErr = val => val instanceof Error
export const isMap = val => val instanceof Map
export const isWeakMap = val => val instanceof WeakMap
export const isSet = val => val instanceof Set
export const isWeakSet = val => val instanceof WeakSet
export const isGen = val => {
  if (!val) return false

  const {constructor} = val
  if (!constructor) return false
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  ) return true

  const {prototype} = constructor
  return isFn(prototype.next) && isFn(prototype.throw)
}
