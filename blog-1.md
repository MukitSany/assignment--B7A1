#  `any` vs `uknown`

##  any

- diseable type checking
- can assign any type of value without restriction.
- do not show any type error
- could be runtime Erros which is: callback is not a function

```tsx
function output(input: any){
  const result = typeof input;
  console.log(result);
}

output(1)
```
## unknown

- also accept all type value but inforce type safety when try to use
- checking before performing operation
- This is safer because it prevent accidental misuse
- could be runtime Erros which is: callback is not a function


```tsx
function output(input: unknown){
  const result = typeof input;
  console.log(result);
}

output(1)
```