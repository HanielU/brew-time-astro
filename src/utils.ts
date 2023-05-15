export const getGoogleLink = (id: string) =>
  `https://drive.google.com/uc?export=view&id=${id}`;

  export function toggleClass(
    el: HTMLElement,
    className: string,
    action?: "add" | "remove"
  ) {
    className.split(" ").forEach(c => el.classList[action || "toggle"](c));
  }