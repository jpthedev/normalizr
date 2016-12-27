import PolymorphicSchema from './Polymorphic';

export default class ValuesSchema extends PolymorphicSchema {
  normalize(input, parent, key, visit, addEntity) {
    return Object.keys(input).reduce((output, key, index) => {
      const value = input[key];
      return {
        ...output,
        [key]: this.normalizeValue(value, input, key, visit, addEntity)
      };
    }, {});
  }
}
