export default function ShortestWord(sentence) {
  const words = sentence.split(' ');
  let shortest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }
  return shortest;
}