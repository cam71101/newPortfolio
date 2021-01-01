---
date: "2020-12-29"
---

I decided to look at the My Movie Application after completing the Podcast app to see how I could improve it. I have made some minor tweaks since, but I could polish it even further.

### Good Git workflow

In hindsight, I should have used a good and common git workflow. Using git-flow and working with issues, pull requests and branches will be something that I'll be regularly doing when I become a full-time developer. I would also commit much more and have better comments.

### Testing

I would also use testing at the beginning of the project rather than implementing at a later stage. I did testing on the podcast app from the beginning, and it was very beneficial. It also would help with planning the app, as testing puts the design into focus.

### Design

I'm quite happy with how the app looks, but perhaps some fonts and colours could work better together. I'm not a designer, so I'm overly unhappy.

### Docker

Docker enables application portability, so someone can download my repository and quickly build the application without the need to install Node or other dependencies. I may deploy the app with a Docker container in the future.

### Unnecessary code

Using an error handler hook was overkill for this project, but I implemented this feature as I was trying to learn as much as possible about hooks. Creating separate JSX style scripts to the component script keeps the app more organised and more comfortable to read. I have re-organised the app this way, but I should have followed this workflow from the beginning.
