module.exports = {
  setupFilesAfterEnv: [ `@testing-library/jest-dom/extend-expect` ],
  clearMocks: true, 
  testEnvironment: `node`,
  watchPathIgnorePatterns: [
    `node_modules`
  ],
  transform: {
    "^.+\\.[t|j]sx?$": `babel-jest`
  }
};
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
