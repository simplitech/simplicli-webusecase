export class PermissionGroup {
  scopes: string[] = []

  isAllowed(scope: string) {
    return this.scopes.includes(scope)
  }

  isDenied(scope: string) {
    return !this.isAllowed(scope)
  }

  isAllowedAll(...scopes: string[]) {
    return this.scopes.every(it => scopes.includes(it))
  }
  isDeniedAll(...scopes: string[]) {
    return !this.scopes.every(it => scopes.includes(it))
  }
  isAllowedNothing(...scopes: string[]) {
    return this.scopes.every(it => !scopes.includes(it))
  }
  isDeniedNothing(...scopes: string[]) {
    return !this.scopes.every(it => !scopes.includes(it))
  }

  isAllowedEither(...scopes: string[]) {
    return this.scopes.some(it => scopes.includes(it))
  }
  isDeniedEither(...scopes: string[]) {
    return !this.scopes.some(it => scopes.includes(it))
  }
  isAllowedNeither(...scopes: string[]) {
    return this.scopes.some(it => !scopes.includes(it))
  }
  isDeniedNeither(...scopes: string[]) {
    return !this.scopes.some(it => !scopes.includes(it))
  }
}
