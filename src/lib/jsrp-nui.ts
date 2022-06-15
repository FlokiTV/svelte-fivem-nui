import { goto } from "$app/navigation";
const CFG = {
  RES_NAME: "",
  debug: false,
};

export function resource(name: string) {
  CFG.RES_NAME = name;
}

export function debug(on: boolean) {
  CFG.debug = on;
}

function log(...args: any) {
  if (CFG.debug) console.log(args);
}

export async function emit(path: string, data: any) {
  return await fetch(`https://${CFG.RES_NAME}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.text())
    .then((resp) => log(resp));
}

export function done() {
  log("done");
  emit("done", { done: true });
}

export function closeNUI() {
  const body: any = document.querySelector("body");
  body.style.opacity = 0;
  emit("close", { close: true });
}

export function setup(fn: any = {}) {
  const body: any = document.querySelector("body");
  window.addEventListener("message", function (event) {
    if (event.data.show != undefined) {
      let status = event.data.show;
      if (status) {
        // body.style.display = "block";
        body.style.opacity = 1;
      } else {
        // body.style.display = "none";
        body.style.opacity = 0;
      }
    }

    if (event.data.goto != undefined) {
      log("/nui" + event.data.goto);
      goto("/nui" + event.data.goto);
    }

    Object.keys(fn).forEach((ev) => {
      if (event.data[ev] != undefined) {
        log("trigger " + ev);
        fn[ev](event.data[ev]);
      }
    });
  });
}
