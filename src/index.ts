export function sum(a: number, b: number): number {
  return a + b;
}
const app = document.querySelector('.app') as HTMLDivElement;
app.innerHTML = '' + sum(2,2);