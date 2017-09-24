import equal from '@async-generators/equal';
import concat from '../src';
import { expect } from 'chai';

describe("@async-generator/concat", () => {
  it("should yield sources in order", async () => {
    let a = async function* () {
      yield 1; yield 2;
    }
    let b = function* () {
      yield 3;
    }
    let c = [
      4
    ]

    let expected = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    
    expect(await
      equal(
        expected(),
        concat(a(), b(), c)
      )).to.be.true;
  });

  it("should yield nothing if no sources", async () => {
    let expected = [];
    
    expect(await equal(expected, concat())).to.be.true;
  });
})
