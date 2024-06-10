function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  let grade;
  if (score == 100) {
    grade = "A++";
  } else if (score > 89) {
    grade = "A";
  } else if (score > 79) {
    grade = "B";
  } else if (score > 69) {
    grade = "C";
  } else if (score > 59) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  let avarage = getAverage(totalScores)
  let grade = getGrade(studentScore)
  if (grade !== "F") {
    return "Class average: " + avarage + ". Your grade: " + grade + ". You passed the course."
  }else{
    return "Class average: "+ avarage+". Your grade: "+grade+". You failed the course."
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
