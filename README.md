# Snyk Vulnerability Testing App

This is a very simple Node.js project explicitly designed with vulnerable dependencies to test security scanning tools like **Snyk**.

## Prerequisites
- Node.js and npm installed
- Snyk CLI installed (`npm install -g snyk`)

## Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: You will likely see npm warn you about critical vulnerabilities right after installing).*

2. **Run Snyk Test:**
   ```bash
   snyk test
   ```
   This should output a detailed report of the vulnerabilities found in `express@4.15.2` and `lodash@4.17.15`.

3. **(Optional) Run Snyk Monitor:**
   ```bash
   snyk monitor
   ```
   To send the results to your Snyk dashboard.

**WARNING:** Do not use these dependency versions in a real application. This repository is strictly for testing and educational purposes.
