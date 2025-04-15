### Youtube
- Youtube provides it's api for limited free use.
- Here we are can get youtube apis 
    - [Videos List](https://developers.google.com/youtube/v3/docs/videos/list)
    - You can copy that HTTP link for our use.
- This api link need our API_KEY. How can you find it.
    - [YouTube Api auth](https://developers.google.com/youtube/registering_an_application)
    - Open credentials Page -> credentials(You may not see blank page here with a option to create a project)
    - You need to `create a project`(dummy) to get credentials. 
    - Click on `create credentials`
    - If credentials expires, regenerate again
- Even when I got my API keys, I was getting 403.
    - You need to enable the project to access the api.
    - You should get more details in error itself and also the link which redirects you to the page where you can enable the project.
    - Try again, you should be able to get the result
- You should get by default 5items, to load more items we have used `MaxResult=50`. 
    - [Videos List](https://developers.google.com/youtube/v3/docs/videos/list)
- In the api url, by default they are using US region. For indian region, I am using in region.
- To get search suggestions, we are using `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=iphone`
    - We get the response in JSONP(JSON with Padding) format.It’s not JSON, it’s a function call that calls window.google.ac.h(...). 
        - `window.google.ac.h(["query", [/* suggestions */], {...}]);`
    - So, we can't simply extract it as `result.json();`
    - See [here](../src/utils/useYouTubeSuggest.jsx) how we can extract.
    ```
        const res =  await fetch(SEARCH_SUGGESTION_URL + searchQuery); // Api call which returns response in JSONP format
        const text = await res.text(); // Thus, we cannot parse it directly like `response.json`. So, here we are converting it to test first.
    
        let result;
        // 1. Prepare an empty object with same structure Google expects
        const fakeWindow = {
          google: {
            ac: {
              h: (parsed) => {
                result = parsed; // Capture the data here
              }
            }
          }
        };
        // 2. Create a function with one parameter `window`
        const func = new Function('window', text);
        // 3. Run the function, pass in `fakeWindow` instead of real window 
        func(fakeWindow);
    
        const suggestions = result[1].map(item => item[0]);
    ```