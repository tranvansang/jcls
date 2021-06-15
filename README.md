# CSS class joiner/remover utility

## Install

```bash
yarn add jcls
# or
npm install -S jcls
```

```javascript
import {jcls, rmcls} from 'jcls'
// or
const {jcls, rmcls} = require('jcls')
```

## API

### Exported methods

```typescript
export declare const jcls: (...classNames: ReadonlyArray<string | boolean | null | undefined>) => string;
export declare const rmcls: (classNames: string, ...toRemove: (string | boolean | RegExp | ((cls: string) => any) | null | undefined)[]) => string;
```

- `jcls(...classNames)`: Join classes into a single string.
  
  Falsy parameters are ignored. Other values are joined.
  
- `rmcls(classNames, ...toRemove)`: remove classes from an existing class string.

 `toRemove` can contain `string`, `boolean`, `RegExp`, or `function`.
 Falsy parameters from `toRemove` are ignored.

### Sample usages

```javascript
jcls(
	styles.container,
    isDisabled && styles.disabled,
    '', // ignored
)
jcls('mb-2 p-3', styles.button)
rmcls('mb-2 p-3 flex', 'p-3', 'flex') // note: toRemove must include class name separatedly
rmcls('mb-2 p-3 flex', /p-.*/, /p?-.*/)
```
