
function calculateGrade(score) {
    if (score >= 90) {
      return 5;
    } else if (score >= 80) {
      return 4;
    } else if (score >= 70) {
      return 3;
    } else if (score >= 60) {
      return 2;
    } else {
      return 1;
    }
}
  
const myScore = 35;
const myGrade = calculateGrade(myScore);

console.log(`Chemi qula aris ${myScore} nishani ${myGrade}.`);