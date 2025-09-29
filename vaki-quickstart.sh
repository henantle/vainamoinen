#!/usr/bin/env bash
# Quick start script for Vaki integration

echo "🎯 Vaki Quick Start for vainamoinen"
echo "====================================="
echo ""
echo "Available commands:"
echo "1. Edit current task: ../vaki/TICKET.md"
echo "2. In Cursor chat: 'plan the ticket'"
echo "3. In Cursor chat: 'implement task 1'"
echo "4. In Cursor chat: 'create PR'"
echo ""
echo "Current task:"
if [[ -f "../vaki/TICKET.md" ]]; then
    echo "---"
    head -5 "../vaki/TICKET.md"
    echo "---"
else
    echo "No task set. Edit ../vaki/TICKET.md first."
fi

if [[ -n "  - Always use TypeScript strict mode
  - Run 'mvn test' before committing backend changes
  - Run 'npm run test:coverage' for frontend tests
  - Database changes require migration in ./backend/src/main/resources/db/migration/
  - Use 'feat:', 'fix:', 'chore:' prefixes for commits" ]]; then
    echo ""
    echo "Project-specific commands:"
    echo "  - Always use TypeScript strict mode
  - Run 'mvn test' before committing backend changes
  - Run 'npm run test:coverage' for frontend tests
  - Database changes require migration in ./backend/src/main/resources/db/migration/
  - Use 'feat:', 'fix:', 'chore:' prefixes for commits"
fi
