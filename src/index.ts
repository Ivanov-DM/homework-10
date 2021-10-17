export function sum(a: number, b: number): number {
  return a + b;
}
(document.querySelector(".app") as HTMLDivElement).innerText = `${sum(2, 2)}`;
