<script>
  let { children } = $props();
</script>

{@render children()}

<style>
  :root {
    --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
    --color-text-primary: #111827;
    --color-text-secondary: #4b5563;
    --color-text-tertiary: #9ca3af;
    --color-background-primary: #f9fafb;
    --color-background-secondary: #f3f4f6;
    --color-border-secondary: #e5e7eb;
    --color-border-tertiary: #f3f4f6;
    --border-radius-lg: 12px;
    
    --green: #16a34a;
    --grn-lt: #cbd5e1;
    --text-p: var(--color-text-primary);
    --text-s: var(--color-text-secondary);
    --text-t: var(--color-text-tertiary);
    --bg-p: var(--color-background-primary);
    --bg-s: var(--color-background-secondary);
    --grid: rgba(0, 0, 0, 0.04);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-text-primary: #f9fafb;
      --color-text-secondary: #9ca3af;
      --color-text-tertiary: #6b7280;
      --color-background-primary: #0b0f12;
      --color-background-secondary: #111827;
      --color-border-secondary: #1f2937;
      --color-border-tertiary: #111827;
      
      --green: #4ade80;
      --grn-lt: #374151;
      --grid: rgba(255, 255, 255, 0.04);
    }
  }

  :global(body) {
    background-color: var(--color-background-primary);
    color: var(--color-text-primary);
    font-family: var(--font-sans);
    margin: 0;
    padding: 0;
    letter-spacing: -0.02em;
    -webkit-font-smoothing: antialiased;
  }
</style>