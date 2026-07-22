# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey fpalicot!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/fpalicot/skills-build-applications-w-copilot-agent-mode/issues/1)

## OctoFit Tracker setup

- Backend runs on port 8000.
- The API base URL uses the Codespaces URL format when CODESPACE_NAME is set:
  - https://$CODESPACE_NAME-8000.app.github.dev
- If CODESPACE_NAME is not set, the backend falls back to localhost:
  - http://localhost:8000
- The React frontend uses VITE_CODESPACE_NAME for the frontend API host. Define it in .env.local, for example:
  - VITE_CODESPACE_NAME=your-codespace-name
- If VITE_CODESPACE_NAME is not set, the frontend falls back to localhost to avoid broken https://undefined-8000... URLs.

### Verify the API

```bash
curl http://127.0.0.1:8000/api/users
curl http://127.0.0.1:8000/api/activities
```


