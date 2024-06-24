export default function taskBlock(trueOrFalse) {
  // Use let for block-scoped variables
  let task = false;
  let task2 = true;

  if (typeof trueOrFalse === "boolean") { // Check if trueOrFalse is a boolean
    task = true;
    task2 = false;
  } else {
    console.error("taskBlock: Invalid argument. Expected boolean value for trueOrFalse.");
  }

  return [task, task2];
}
