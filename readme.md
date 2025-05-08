# Make Your TypeScript Smarter with `keyof` and Type Safety Tools

When working with TypeScript, many beginners get confused by some of the advanced-looking keywords and types. But once you understand them, they’ll help you write cleaner, safer, and more reliable code.

In this post, we’ll explore:

- How to **work with object keys dynamically** using `keyof`
- How to choose between `any`, `unknown`, and `never` to **protect your code**

---

## Dynamically Access Object Keys with `keyof`

Imagine you have an object, and you want to safely access one of its keys. Normally, you might use a string like `"name"` or `"age"`. But what if the object changes later? That’s where `keyof` comes in!

### Example

```ts
type User = {
  username: string;
  email: string;
  isActive: boolean;
};

type UserKeys = keyof User; // "username" | "email" | "isActive"

function showUserKey(key: UserKeys) {
  console.log(`Accessed key: ${key}`);
}

showUserKey("email"); // Works fine
// showUserKey("password"); //  Error: "password" is not a key of User
```

### Why Use `keyof`?

- It gives you all the **valid property names** of a type.
- It **prevents mistakes** like using wrong key names.
- Your code becomes **future-proof** — if you add or remove keys, TypeScript keeps you safe.

## Choosing Between `any`, `unknown`, and `never`

These three types often confuse beginners, but they each have a unique purpose:

---

### `any` – Turn Off Type Checking

If a variable is `any`, TypeScript stops checking it. This can be dangerous because you lose all safety.

```ts
let value: any = 42;
value = "Now a string";
value = false;
value(); // No error, but risky — might crash!
```

> **Avoid using `any` unless absolutely necessary.** It’s like disabling your seatbelt in a moving car.

### `unknown` – Safer but Requires Checking

You can assign anything to `unknown`, but TypeScript forces you to check the type before using it.

```ts
let input: unknown = "Hello World";

// input.toUpperCase(); Not allowed directly

if (typeof input === "string") {
  console.log(input.toUpperCase()); // Safe and correct
}
```

> **Use `unknown` when you want to accept anything, but still keep type safety.**

### `never` – For the Impossible

The `never` type is used for things that should **never happen**. It’s often used in functions that **never return** or always throw an error.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

> **Use `never` for guaranteed errors.**
