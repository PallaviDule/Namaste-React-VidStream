# Live Chat
At a minimum, a live chat app involves:
- Connecting users
- Sending messages
- Receiving messages in real-time
- Displaying those messages in order

### Tech Options for Live Chat
To get real-time updates, you need something more dynamic than standard HTTP requests. You typically have 3 main options:

- WebSockets (Best for live chat)
- Polling (Less efficient, but easier) 
    - Youtube 
        - Youtube does not store old messages after some limit. You won't see oldest messages.
        - I checked how many messages where showing in live chat on youtube live page, it always gave 79-80 message count
        - `document.getElementsByTagName('yt-live-chat-text-message-renderer').length`

- Server-Sent Events (One-way stream from server to client)

### What we are doing in this project
- We are using polling feature in this one, although we are not calling any third-party resources in this project, rather mockData.
- [LiveChat Implementation](../src/component/LiveChat.jsx)