## YouTube API Integration
This project fetches video data and search suggestions using the **YouTube Data API v3** and the **YouTube search suggestion API**.

### 📦 YouTube Data API (v3)

YouTube offers APIs for free (with a quota limit), and you can use these to:

- Fetch video details
- Search for videos
- Get trending videos
- And more

#### Useful API Endpoints

- [Videos List API](https://developers.google.com/youtube/v3/docs/videos/list)  
  Use this to fetch a list of videos with details like title, thumbnail, views, etc.

### 🔐 Getting Your API Key

To access YouTube’s Data API, you’ll need an API Key.

Steps to get it:

1. Go to: [YouTube API Auth Guide](https://developers.google.com/youtube/registering_an_application)
2. Open the **Credentials** page.
3. If prompted, **create a new project** (you can name it anything).
4. Click on **"Create Credentials"** > Select **API Key**.
5. Copy the generated key and use it in your app.
6. If credentials expires, regenerate again

#### ⚠️ Common Issue: 403 Error
If you get a `403` error even after adding your key:
- You likely need to **enable the YouTube Data API** for your project.
- The error message usually provides a direct link to enable the API.
- Once enabled, retry your request.

### 🌍 Localization (Region)
- By default, many API calls return data tailored to the **US** region.
- You can modify the `regionCode` parameter to fetch content specific to your location.  
  For example, use `regionCode=IN` to get videos trending in India.

### 🎯 Requesting More Items
By default, the API returns only 5 items per call. To load more:

```http
https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=YOUR_API_KEY
```

- Use the `maxResults` parameter (limit is 50 per request).
- [Videos List](https://developers.google.com/youtube/v3/docs/videos/list)

## 🔍 YouTube Search Suggestion API

YouTube also offers a public endpoint for showing **search suggestions**, similar to what you see in the YouTube search bar.

Example URL:
```
http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=iphone
```

### ❗️Note: This returns **JSONP**, not standard JSON.

#### Why JSONP?
- It’s a way to serve data across domains before CORS was standard.
- It wraps the data in a function call instead of plain JSON.
- The response looks like:
  ```js
  window.google.ac.h(["iphone", [["iphone 15", 0], ["iphone 14", 0]], {...}])
  ```

### ✅ How We Handle JSONP
- You can see this in action in:  
  → [`useYouTubeSuggest.jsx`](../src/utils/useYouTubeSuggest.jsx)
- Since it’s not standard JSON, we can’t use `response.json()`. 
- Instead, we parse it like this:
  ```js
  const res = await fetch(SEARCH_SUGGESTION_URL + searchQuery);
  const text = await res.text(); // We receive the response as a string

  let result;

  // Step 1: Mock the window.google.ac.h callback: Prepare an empty object with same structure Google expects
  const fakeWindow = {
    google: {
      ac: {
        h: (parsed) => {
          result = parsed;
        }
      }
    }
  };

  // Step 2: Create a function using the returned script text
  const func = new Function('window', text);

  // Step 3: Run the function, pass in `fakeWindow` instead of real window
  func(fakeWindow);

  // Step 4: Extract the suggestions
  const suggestions = result[1].map(item => item[0]);
  ```
