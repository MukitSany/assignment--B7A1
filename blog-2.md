#Keeping code dry with `Pick` and `Omit`

##In large TypeScript, Developers needs to use multiple interface to share similar fields. This may lead to duplication and maintenance problems.

##Full Type are 

```tsx
type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
```

##Using `Pick`
-	Pick Specefic type of utilities.
-	We must have this type of utilities.

```tsx
type ProductSummary = Pick<Product, "id" | "name" | "price">;
```

-	In this TypeScript We must have product id, name and price.

##Using `Omit`
-	Omit Specefic type of utilities.
-	We remove these type from utilities.

```tsx
type ProductWithoutStock = Omit<Product, "stock" | "color">;
```

-	We did not use stock and color type from our fields.

##The importance of using `Pick` and `Omit`
 
-	Reduce duplication.
-	Easier Update.
-	Improve maintenance.

So, rewriting interfaces repeatedly, developers can create reusable “slices” from one master interface.




