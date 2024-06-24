export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // Using let or const here ensures that task and task2 are not redeclared,
    // but rather are assigned new values within the existing scope.
    task = true;
    task2 = false;
  }

  return [task, task2];
}

