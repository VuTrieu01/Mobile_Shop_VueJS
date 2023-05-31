export function ruleEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}
export function formatMoney(money: number) {
  return money.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
}
