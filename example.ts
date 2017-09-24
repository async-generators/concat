import concat from './src';

async function main() {
  let a = async function* () {
    yield 1; yield 2;
  }
  let b = function* () {
    yield 3;
  }
  let c = () => [4]

  for await (let item of concat(a(), b(), c())) {
    console.log(item);
  }
}
main();