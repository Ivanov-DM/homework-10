export function sum(a: number, b: number): number {
  return a + b;
}
const app: HTMLDivElement = document.querySelector(".app") as HTMLDivElement;
app.innerText = `${sum(2, 2)}`;
