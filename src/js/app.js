export default function transformNumber(number) {
  const regex = /^8/;
  const regex1 = /-|\(|\)|\s/g;

  const newNumber = number.replace(regex, '+7').replace(regex1, '');

  return newNumber;
}
