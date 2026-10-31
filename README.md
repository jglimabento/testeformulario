# Client Profile Form – Cypress Tests

Cypress tests for a client profile form hosted in the DevSquad QA training environment.

## Stack
- Cypress 14
- JavaScript
- Browser-native form validity checks

## Covered scenarios
- Valid profile data for Brazil
- Valid profile data for the United States
- Invalid email format
- Phone input sanitization
- Future date of birth
- Negative annual income
- Empty required name

The negative scenarios now check browser validity where native constraints are expected, instead of only confirming that invalid text can be typed into a field. A failing validity assertion is useful evidence that the form does not enforce the expected rule in the browser.

## Run

```bash
npm install
npm run cy:open
npm run cy:run
```

The test environment URL is configured in `cypress.config.js`. The target is an external training environment and may change or become unavailable.

## Test report

The repository includes `DevSquad Form Bug Report.pdf` as supporting QA documentation.

## Scope limitations

These tests exercise the form UI and browser validation. They do not establish backend validation unless a submission endpoint is explicitly exercised and verified. Execution status must be confirmed by running the suite against the live training environment.

## Author

João Guilherme Lima Bento
