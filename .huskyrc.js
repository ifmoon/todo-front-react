module.exports = {
  "hooks":{
    "pre-push": "CI=true yarn test",
    "pre-commit": "lint-staged"
  }
}