### what we can do

- can add some filters like from to and from date as we saw on manhwa websites

- can we segreagate 'loading' and 'error' state to some other reducer. but then how gameReducer will interact(update) with it?

- create some genres page

- using moment package for dates

### portal

- we can load this text in a div with id `overlays` whereas our whole app will be loaded in div with id `root`

```
  import {createPortal} from "react-dom"

  createPortal(<p>Hello there</p>, document.getElementById("overlays"))
```

### creating a modal

- In plane HTML creating a modal using `HTMLDialogElement`. It provides us a `<dialog></dialog>` tag

```
  <button id="open-btn">Open Dialog</button>

  <dialog id="modal">
    <p>This is testing out HTML dialog element</p>
    <button id="close-btn">Close Dialog</button>
  </dialog>

  <!-- In js -->
  const dialog = document.querySelector("#modal");
  const openBtn = document.querySelector("#open-btn");
  const closeBtn = document.querySelector("#close-btn");

  openBtn.addEventListener("click", () => {
    dialog.showModal()
  })

  closeBtn.addEventListener("click", () => {
    dialog.close()
  })

```

### styling scrollbar

```
  /* firefox */
  scrollbar-width: thin;
  scrollbar-color: #333 #fff;

  /* chrome */
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
    }

    &::-webkit-scrollbar-thumb {
      background: #333;
    }
  }
```
