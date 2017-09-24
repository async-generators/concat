export default async function* <T>(
  ...sources: (AsyncIterable<T> | Iterable<T>)[],
): AsyncIterable<T> {
  for (const source of sources) {
    yield* source;
  };
}