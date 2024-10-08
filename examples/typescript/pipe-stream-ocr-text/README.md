
in screenpipe we have a plugin system called "pipe store" or "pipes"

think of it like this:

screenpipe data -> your pipe like "AI annotate" or "send to salesforce"

a more dev-friendly explanation:

screenpipe | AI tag | notion update

or 

screenpipe | AI tag | slack send report

or 

screenpipe | fill salesforce

or 

screenpipe | logs daily

basically it would read, process, annotate, analyse, summarize, send, your data customisable to your desire, effortlessly

### pipe-stream-ocr-text

this is an experimental, but official pipe, that will stream OCR text from your screen data every 1 min 

this is how you run it through the app:

add the url of this pipe

`https://github.com/mediar-ai/screenpipe/tree/main/examples/typescript/pipe-stream-ocr-text`

### tech details

we run deno runtime (a JS/TS engine) within the rust code, which host your pipes, its 99.9% similar to normal JS code

### dev mode

if you're in dev mode you can run the cli like this:

```bash
screenpipe pipe download https://github.com/mediar-ai/screenpipe/tree/main/examples/typescript/pipe-stream-ocr-text
screenpipe pipe enable pipe-stream-ocr-text
```

this would download the pipe in your local files and enable it

then you need to restart screenpipe backend

### get featured in the pipe store

<img width="1312" alt="Screenshot 2024-08-27 at 17 06 45" src="https://github.com/user-attachments/assets/b6856bf4-2cfd-4888-be11-ee7baae6b84b">

just ask @louis030195

### what's next for pipes

- use dependencies (like vercel/ai so cool)
- access to screenpipe desktop api (control your computer, embedded LLM, better UI feedback API, etc.)
- easier to publish your pipes (like obsidian store)
- everything frictionless, effortless, and maximize the value you get out of screenpipe
