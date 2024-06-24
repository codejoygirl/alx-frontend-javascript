export default function taskBlock(trueOrFalse) {
  // Original variables declared with var
  var task = false;
  var task2 = true;

  // Conditionally update variables without redeclaring
  if (trueOrFalse) {
    task = true;   // Update task without redeclaring
    task2 = false; // Update task2 without redeclaring
  }

  return [task, task2];
}
