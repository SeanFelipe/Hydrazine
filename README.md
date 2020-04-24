# React Hydrazine

A UI layer over [React Universal](https://github.com/cloudle/ruui) and [React Native for Web](https://github.com/necolas/react-native-web), which scales a phone PNG to fix your UI so the webpage looks (mostly) like how your native UI *will* look when you decide to compile (hopefully).

The high-level architecture looks like this:

```
index.js
- determines if we're on the web platform
--> if so, delegates to PhoneWrapper.js
        |
        --> PhoneWrapper.js
            - phone type is specified here, eg SamsungS10
            - renders <SamsungS10 /> component
                |
                --> SamsungS10.js
                    - calculates scaling based on physical phone pixels
                    - renders the application component inside an <ImageBackground>

```

See [SamsungS10.js](https://github.com/SeanFelipe/Hydrazine/blob/Hydrazine-3J0/src/wrappers/SamsungS10.js) and [PhoneWrapper.js](https://github.com/SeanFelipe/Hydrazine/blob/Hydrazine-3J0/src/PhoneWrapper.js)] to see how the ~~sausage is made~~ magic happens.


## Implications for testing and process

It might seem like a pretty minor change, and from a code perspective it is. But consider the implications for testing and process:

* no need to compile for internal showcases
* minor modifications can be pushed to a webpage, quickly verified by product or QA

Plus, considering automated testing, you (hopefully) already have your native automated test pipeline, and (hopefully) a robust set of API tests. How about some thorough testing in the *middle* using *web automation tools*?

If you're a quality heckler like I claim to be, then ... The potential for Ferengi business expansion is [staggering](https://www.youtube.com/watch?v=SG_A0IOCfdM).

React Hydrazine original post: [link](https://seanfelipe.github.io/tech/management/process/react/react-native/testing/2020/04/15/react-hydrazine.html)

My experience with the excellent React Universal: [link](https://seanfelipe.github.io/technology/hop/ruui/2019/04/22/ruui-react-native.html)


