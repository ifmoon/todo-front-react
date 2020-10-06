module.exports = {
  "hooks":{
    "pre-push": "CI=true yarn test -- --passWithNoTests",
    "pre-commit": "lint-staged"
  }
}