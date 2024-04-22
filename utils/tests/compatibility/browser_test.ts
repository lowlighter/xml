import { expect } from "https://deno.land/std@0.223.0/expect/expect.ts"
import { encodeBase64 } from "https://deno.land/std@0.223.0/encoding/base64.ts"

Deno.test("compatibility: browser", async () => {
  // Simulate browser environment by removing Deno namespace insided worker
  const mod = new URL("../../../mod.ts", import.meta.url)
  const worker = new Worker(
    new URL(`data:application/typescript;base64,${
      encodeBase64(`
    delete globalThis.Deno;
    import { parse, stringify } from "${mod.href}";
    onmessage = () => {
      try {
        parse("<root/>")
        stringify({ root: null })
        postMessage(true)
      }
      catch {
        postMessage(false)
      }
    }
    `)
    }`),
    { type: "module" },
  )
  const promise = new Promise<void>((resolve, reject) => {
    worker.onmessage = ({ data }) => data ? resolve() : reject()
  })
  worker.postMessage(null)
  await expect(promise).not.resolves.toThrow()
})