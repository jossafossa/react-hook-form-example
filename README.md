# Form Test Project

> **Exploring advanced React Hook Form patterns with Zod discriminated unions, dynamic field arrays, and type-safe form handling in TypeScript.**

A React TypeScript form project exploring React Hook Form with Zod validation and internationalization.

## Quick Start

### Prerequisites
- Node.js (v18+)
- PNPM package manager

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build
```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Key Takeaways

This project explored various patterns and best practices for complex form handling in React. Here are the main lessons learned:

### 1. Type-safe Form Hooks
Create smart aliases for `useOrderForm` and `useOrderFormState` to build the entire form in a type-safe manner. This ensures proper TypeScript inference throughout the form components.

### 2. Automatic Re-rendering with register
Fields registered with `register()` automatically re-render when their own values change (e.g., user input, programmatic updates, resets). Use `useWatch()` to re-render components when other fields change.

### 3. Zod Discriminating Unions
Use Zod's discriminating unions for conditional validation. For example, company fields that are required for business customers but not for individual customers.

**Bonus**: Fields not in the active union branch are automatically excluded from the submit data. So when `customerType` is "individual", the `company` field won't be included in the final form data - no manual cleanup needed!

```tsx
// Real example from the project
const customerSchema = z.discriminatedUnion('customerType', [
  z.object({
    customerType: z.literal('individual'),
    phone: phoneValidation.or(z.string().length(0)), // Optional
  }),
  z.object({
    customerType: z.literal('business'),
    company: z.string().min(1), // Required
    phone: phoneValidation, // Required
  }),
]);
```

### 4. Custom Error Handling
Handle custom validation errors in the `zodResolver`, not in the Zod schema itself. This provides better integration with React Hook Form's error system.

### 5. Leverage useFieldArray
Use `useFieldArray` extensively for dynamic array operations. It handles adding, removing, and reordering items efficiently with proper form state management.

### 6. useFieldArray Context Sharing
**Important**: When using `useFieldArray` in multiple components, ensure you're using the exact same reference. Put it in a context provider, otherwise it won't work properly. Items will be added to the state but won't appear in the UI.

### 7. Conditional Rendering with useWatch
Use `useWatch()` for smart conditional rendering based on form state. This works perfectly with discriminated unions:

```tsx
const watch = useOrderFormWatch();
const isVisible = watch.customerType === "business";

if (!isVisible) {
  return null;
}

return (
  <Field required={true}>
    <Field.Label>Company</Field.Label>
    <Input {...register("company")} />
  </Field>
);
```
