# Live Chat

A basic live chat application involves:

- Connecting users
- Sending messages
- Receiving messages in real-time
- Displaying those messages in order

### Real-Time Communication: Tech Options

To achieve real-time message delivery, standard HTTP is usually not enough. The most common options are:

#### 1. WebSockets
- Best suited for real-time chat
- Enables two-way communication between client and server
- Used by most production chat apps

#### 2. Polling
- Less efficient than WebSockets, but easier to implement
- The client sends repeated requests at intervals to check for new messages

- #### YouTube Chat Behavior (Observed):
    - YouTube uses polling for its live chat (not confirmed officially, but behavior matches polling).
    - YouTube limits the number of visible messages:
    - Messages older than a certain point are removed from the DOM.
    - You can check this using:
        ```js
        document.getElementsByTagName('yt-live-chat-text-message-renderer').length
        ```
    - Typically, only 79–80 recent messages are shown at a time.

#### 3. Server-Sent Events (SSE)
- One-way stream: server pushes updates to the client
- Simpler than WebSockets, but not as flexible



### What We’re Using in This Project

- We simulate live chat using **polling**, though we’re not fetching data from a real-time server.
- Instead, we use mock data and Redux to mimic live updates.
- This keeps the project frontend-only and suitable for learning and experimentation.
- Auto-scroll to the latest message

**View the implementation:**  [LiveChat.jsx](../src/component/LiveChat.jsx)


### Notes

- The chat input uses controlled components (`useState`) and Redux to dispatch messages.
- New messages are added to the Redux store and rendered from there.
- Polling or interval logic can be added later to simulate incoming messages from other users.


### Possible Enhancements (For Practice)

- Replace mock data with a WebSocket-based backend (e.g., using `socket.io`)
- Add user avatars or timestamps
- Persist messages in `localStorage` or a database
