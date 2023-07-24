# CSS class joiner/remover utility

## Install

```bash
yarn add jcls
# or
npm install -S jcls
```

```javascript
import jcls, {rcls} from 'jcls'
// or
const jcls = require('jcls')
const {rcls} = require('jcls')
```

## API

### Exported methods

```typescript
export default function jcls(...classNames: readonly any[]): string;
export declare const rcls: (classNames: string, ...toRemove: readonly any[]) => string;
```

- `jcls(...classNames)`: Join classes into a single string.
  
  Falsy parameters are ignored. Other values are joined.
  
- `rcls(classNames, ...toRemove)`: remove classes from an existing class string.

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
rcls('mb-2 p-3 flex', 'p-3', 'flex') // note: toRemove must include class name separatedly
rcls('mb-2 p-3 flex', /p-.*/, /p?-.*/)
```
