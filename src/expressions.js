export const defaultExpression = {
  HM: 'true|true|false',
  HP: 'true|true|true',
  HT: 'false|true|true',
  KM: (d, e, f) => d + ( d * ( e / 10 )),
  KP: (d, e, f) => d + ( d * ( (e - f) / 25.5 ) ),
  KT: (d, e, f) => d - ( d * ( f / 30 ) )
};

export const customExpression1 = {
  KP: (d, e, f) => 2 * d + ( d * ( e / 100 ) )
}

export const customExpression2 = {
  HM: 'true|false|true',
  HT: 'true|true|false',
  KM: (d, e, f) => f + d + ( d * ( e / 100 ))
}