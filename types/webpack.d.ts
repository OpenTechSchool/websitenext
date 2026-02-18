interface RequireContext {
  keys(): string[]
  <T>(id: string): T
  (id: string): any
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): RequireContext
}

declare const require: NodeRequire
