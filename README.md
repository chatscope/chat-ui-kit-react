# Chat UI Kit React

[![Actions Status](https://github.com/chatscope/chat-ui-kit-react/workflows/build/badge.svg)](https://github.com/chatscope/chat-ui-kit-react/actions) [![npm version](https://img.shields.io/npm/v/@chatscope/chat-ui-kit-react.svg?style=flat)](https://npmjs.com/@chatscope/chat-ui-kit-react) [![](https://img.shields.io/npm/l/@chatscope/chat-ui-kit-react?dummy=unused)](https://github.com/chatscope/chat-ui-kit-react/blob/master/LICENSE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://chatscope.io/storybook/react/)

Build your own chat UI with React components in few minutes.  
Chat UI Kit from chatscope is an open source UI toolkit for developing web chat applications.

Tired of struggling with sticky scrollbars, contenteditable, responsiveness, css hacks...?  
This kit is for you! [See all features](https://chatscope.io/features).

**Chat UI Kit makes chat UI development at warp speed**

## Demo

- Full featured chat application: [https://demo.chatscope.io](https://demo.chatscope.io)
- Zoe, Akane, Eliot and Joe: [https://chatscope.io/demo/chat-friends](https://chatscope.io/demo/chat-friends/)
- Chat with the Martian (he is available sometimes): [https://mars.chatscope.io](https://mars.chatscope.io)

Demos index: [https://chatscope.io/demo](https://chatscope.io/demo/).

## Install

**Component library**.

Using yarn.

```sh
yarn add @chatscope/chat-ui-kit-react
```

Using npm.

```sh
npm install @chatscope/chat-ui-kit-react
```

**Styles**.

Using yarn.

```sh
yarn add @chatscope/chat-ui-kit-styles
```

Using npm.

```sh
npm install @chatscope/chat-ui-kit-styles
```

## Usage

### ESM

```jsx
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

<div style={{ position: "relative", height: "500px" }}>
  <MainContainer>
    <ChatContainer>
      <MessageList>
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  </MainContainer>
</div>;
```

Yeah! Your first chat GUI is ready!

### UMD

UMD usage is documented in our [Storybook](https://chatscope.io/storybook/react/).

## Documentation

Check our friendly [Storybook](https://chatscope.io/storybook/react/).

## Typescript

The library is written in Javascript, but Typescript typings are available in the package since version 1.9.3.

## See also

[@chatscope/use-chat](https://github.com/chatscope/use-chat) is a React hook for state management in chat applications.  
Check it out and see how easy you can do the chat logic yourself.

## Show your support

Now if you made your awesome chat UI and you love this library, please ⭐ this repository!

## Community and support

- Twitting via [@chatscope](https://twitter.com/chatscope)
- Chatting at [Discord](https://discord.gg/TkUYWQRf2M)
- Facebooking at [Facebook](https://www.facebook.com/chatscope)
- Articles on the [chatscope blog](https://chatscope.io/blog/)

## Website

[https://chatscope.io](https://chatscope.io)

## License

[MIT](https://github.com/chatscope/chat-ui-kit-react/blob/master/LICENSE)
