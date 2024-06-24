export default function taskBlock(trueOrFalse) {
  // Use let for block-scoped variables
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Declare new variables within the block
    task = true;
    task2 = false;
  }

  return [task, task2];
}
