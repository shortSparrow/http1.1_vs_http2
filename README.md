# Download speed comparison for http 1.1 and http2

### I wrote the server with http1.1 but the Google engine automatically updates the protocol up to http3

## If you want to launch the app with http2

Disable http3 for Chrome: - Open chrome://flags/, find "Experimental QUIC protocol", disable http3 and relaunch chrome

## If you want to launch app with http1.1

1. Disable http3 for Chrome:

    Disable http3 for Chrome: - Open chrome://flags/, find "Experimental QUIC protocol", disable http3 and relaunch chrome

2. Disable http2 for Chrome:

   Close all Chrome windows and run in terminal (for macOS): /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-http2

Remember you should check with real deployed site (localhost will show image immediately) - https://node-experiment-413520.uc.r.appspot.com/
