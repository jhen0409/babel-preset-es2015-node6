import { expect } from 'chai';

describe('babel-preset-es2015-node6', () => {

  // https://github.com/jhen0409/babel-preset-es2015-node6/issues/2
  it('should be work for object-rest-spread with destructuring', () => {
    const spread = {
      a: 1,
      b: 2,
      c: 3,
    };
    const obj = {
      ...spread,
      d: 4,
    };
    const { a, b, ...rest } = obj;
    expect(a).to.equal(1);
    expect(b).to.equal(2);
    expect(rest).to.eql({ c: 3, d: 4 });
  });
  it('should be work for object-rest-spread with destructuring, parameters', () => {
    const spread = {
      a: 1,
      b: 2,
      c: 3,
    };
    const obj = {
      ...spread,
      d: 4,
    };
    const func = ({ a, b, ...rest }) => {
      expect(a).to.equal(1);
      expect(b).to.equal(2);
      expect(rest).to.eql({ c: 3, d: 4 });
    };
    func(obj);
  });
});
