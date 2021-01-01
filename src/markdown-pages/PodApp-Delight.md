---
date: "2020-12-16"
---

![PodcastApp](https://res.cloudinary.com/dndp8567v/image/upload/v1608116331/PodcastApp_adeb2f3e15.gif)

I've been working hard on the Podcast app and this is the current state of play. The basic application is complete although there are a few bugs here and there. It's been challenging but I've learnt a few lessons.

### CORS

CORS stands for Cross-Origin Resource Sharing and is one of two resource dynamics that are common in browser API communications (the other being “Same-Origin”). Same-Origin prevents Cross-Origin requests that do not come from the same origin as the hosted data are rejected, thus protecting the site from a variety of complex attacks. I was getting CORS error when attempting to use the Itunes API. The workaround is to use a CORS proxy, which takes a request and passes it forward through a predetermined URL. Essentially the proxy acts as a middleman. allowing CORS issues to be bypassed entirely.

### CSS

I used Material UI for styling but I got to grips with using CSS grids, which is extremely powerful for the responsive design especially when used with the minimax features. I briefly looked at the 'My Movie List' project and my understanding of CSS has improved dramatically in comparison since I build this portfolio site and the Podcast app.

### Testing

Automated testing is important but it's also a struggle and not that much fun. It's like developing in a new environment. I found it difficult to know what to test and I'm used to developing in the browser but testing just doesn't work the same way. However, as I progressed it became more confident with the process. Testing is so important and I'm glad that I was strict with myself and followed the correct process.

### Future Developments

In the future, I may update the app even further adding features such as:

- User authentication
- Curated podcasts
- Listening history
- Subscriptions
