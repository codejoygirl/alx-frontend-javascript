export default function taskBlock(trueOrFalse) {
  // Declare variables without initializing them
  var task, task2;

  // Assign initial values based on the condition
  if (trueOrFalse) {
    task = true;
    task2 = false;
  } else {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
