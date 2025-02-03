# Perp + Beacon Subgraph

This subgraph indexes historic data from Perp and Beacon contracts.

## Deploying the subgraph:

**First time only**
```ssh
pnpm install
```

**Deploy** 

```ssh
pnpm prepare:base-sepolia
pnpm codegen
pnpm build
pnpm deploy:base-sepolia
```