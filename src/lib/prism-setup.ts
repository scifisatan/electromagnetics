/**
 * This is an "infinite" mock for PrismJS to satisfy MDXEditor's deep dependencies
 * without bundling the real library. It uses a Proxy to return a safe value
 * for any property access (e.g., Prism.languages.clike.comment[0]).
 */

const createRecursiveMock = (): any => {
  const fn = () => mock;
  const mock: any = new Proxy(fn, {
    get: (_target, prop) => {
      if (prop === Symbol.toPrimitive) return () => "";
      if (prop === "length") return 0;
      if (prop === "toString") return () => "";
      return mock;
    },
  });
  return mock;
};

const PrismMock = {
  languages: new Proxy(
    {},
    {
      get: (target: any, prop) => {
        if (prop === "extend" || prop === "insertBefore") {
          return () => PrismMock.languages;
        }
        if (prop in target) return target[prop];
        return createRecursiveMock();
      },
    },
  ),
  plugins: {},
  manual: true,
  highlightAll: () => {},
  highlight: (code: string) => code,
  tokenize: (code: string) => [code],
  hooks: {
    add: () => {},
    run: () => {},
  },
};

if (typeof window !== "undefined") {
  (window as any).Prism = PrismMock;
  (globalThis as any).Prism = PrismMock;
}

export default PrismMock;
