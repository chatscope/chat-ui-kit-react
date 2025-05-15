# @chatscope/chat-ui-kit-react changelog

## [2.1.1](https://github.com/chatscope/chat-ui-kit-react/compare/v2.1.0...v2.1.1) (2025-05-15)


### Bug Fixes

* add react 19 to peer dependencies ([#171](https://github.com/chatscope/chat-ui-kit-react/issues/171)) ([95a96c1](https://github.com/chatscope/chat-ui-kit-react/commit/95a96c15ad7506c9567c98f1ea7f60b49a94d38c))

# [2.1.0](https://github.com/chatscope/chat-ui-kit-react/compare/v2.0.3...v2.1.0) (2025-05-15)


### Features

* upgrade fontawesome libs for fix defaultProps warning ([6d5adff](https://github.com/chatscope/chat-ui-kit-react/commit/6d5adffa412eb2f0c551b3cb875133aae54b3370))

## [2.0.3](https://github.com/chatscope/chat-ui-kit-react/compare/v2.0.2...v2.0.3) (2024-03-03)


### Bug Fixes

* added automatically provided github token to github workflow ([3da88a0](https://github.com/chatscope/chat-ui-kit-react/commit/3da88a06f08f1c47ed55bb07f412cf6efa9993f8))
* removed github token from github workflow ([a674c0c](https://github.com/chatscope/chat-ui-kit-react/commit/a674c0c8b648d23e9b000a5c3f40bb6f1eabb6ea))

## [2.0.2](https://github.com/chatscope/chat-ui-kit-react/compare/v2.0.1...v2.0.2) (2024-03-03)


### Bug Fixes

* bump github actions and semantic-release ([e87babc](https://github.com/chatscope/chat-ui-kit-react/commit/e87babc641df46937016e4fee1e08d5ebecb7b23))

## [2.0.1](https://github.com/chatscope/chat-ui-kit-react/compare/v2.0.0...v2.0.1) (2024-03-03)


### Bug Fixes

* bump node version in github workflow to 20 ([2695c4d](https://github.com/chatscope/chat-ui-kit-react/commit/2695c4d61eaa7009212c9b5d589bec05b09a2285))

# [2.0.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.10.1...v2.0.0) (2024-03-03)


### chore

* removed default props from function components ([84a3302](https://github.com/chatscope/chat-ui-kit-react/commit/84a3302492f3f77a2ed4f68ab190c3bfad9c91e3))


### BREAKING CHANGES

* defaultProps have been removed from all function components.
It should be backward compatible, but it's safer to release the major version.
The default props of some internal class components have also been rewritten.
Bumped react and react-dom to 18.2.0 in devDependencies.

## [1.10.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.10.0...v1.10.1) (2023-02-04)


### Bug Fixes

* **typings:** expansion panel generic ([7bb6c0b](https://github.com/chatscope/chat-ui-kit-react/commit/7bb6c0b9c6da10a956e1637c041cbc5484d4ad33))

# [1.10.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.9...v1.10.0) (2023-02-04)


### Features

* **expansion-panel:** added controlled opening state ([63c725b](https://github.com/chatscope/chat-ui-kit-react/commit/63c725bec4bf44406a1622caffdf759be184bbbc))

## [1.9.9](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.8...v1.9.9) (2022-12-16)


### Bug Fixes

* **types:** fixed typings for TypingIndicator, content can be a ReactNode ([4f5d2db](https://github.com/chatscope/chat-ui-kit-react/commit/4f5d2db26a7d5624042b689d27d70e09407cc43b))

## [1.9.8](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.7...v1.9.8) (2022-11-16)


### Bug Fixes

* **#76:** rendering lastSenderName as a ReactNode ([20d09fd](https://github.com/chatscope/chat-ui-kit-react/commit/20d09fdb433dd3cf50611962bca48032942e3191)), closes [#76](https://github.com/chatscope/chat-ui-kit-react/issues/76)

## [1.9.7](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.6...v1.9.7) (2022-07-18)


### Bug Fixes

* **types:** fixed typings for ExpansionPanel ([9f9411f](https://github.com/chatscope/chat-ui-kit-react/commit/9f9411f77d031b0ccac9d4a17ba844e966a30c50))

## [1.9.6](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.5...v1.9.6) (2022-07-13)


### Bug Fixes

* **types:** added missing export of MessageListContent ([213b15d](https://github.com/chatscope/chat-ui-kit-react/commit/213b15d9229714528095748c57e7e04c67da9582))

## [1.9.5](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.4...v1.9.5) (2022-07-12)


### Bug Fixes

* **typings:** wrong TypingIndicator export ([de99cd8](https://github.com/chatscope/chat-ui-kit-react/commit/de99cd860e3baa9af7c3ad0145d397e28225c6c5))

## [1.9.4](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.3...v1.9.4) (2022-07-12)


### Bug Fixes

* [#71](https://github.com/chatscope/chat-ui-kit-react/issues/71) official support for react 18.2.0 ([cbab8b4](https://github.com/chatscope/chat-ui-kit-react/commit/cbab8b42c00f18b296e0bc4a55f3828f105f92f8))

## [1.9.3](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.2...v1.9.3) (2022-06-15)


### Bug Fixes

* **typings:** base components props intersection with html components props ([6637245](https://github.com/chatscope/chat-ui-kit-react/commit/663724576eed76a09cc832d61200076bd3c1e96e))

## [1.9.2](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.1...v1.9.2) (2022-06-14)


### Bug Fixes

* **typings:** renamed MessageGroup typings file ([59d374a](https://github.com/chatscope/chat-ui-kit-react/commit/59d374afc00b236ebbfe3081f02454a2f666f38e))

## [1.9.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.9.0...v1.9.1) (2022-06-14)


### Bug Fixes

* **typings:** added missing *.d.ts files to the build ([eeaa27e](https://github.com/chatscope/chat-ui-kit-react/commit/eeaa27e586d44dd6d8cf67c3b5be781cdf7c857c))

# [1.9.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.8.3...v1.9.0) (2022-06-14)


### Features

* typescript typings ([12295ae](https://github.com/chatscope/chat-ui-kit-react/commit/12295ae762ad7f213c68000183a77f1df8d2bae0))

## [1.8.3](https://github.com/chatscope/chat-ui-kit-react/compare/v1.8.2...v1.8.3) (2021-11-26)


### Bug Fixes

* [#55](https://github.com/chatscope/chat-ui-kit-react/issues/55) changed lastactivitytime prop type to node ([7efcfb2](https://github.com/chatscope/chat-ui-kit-react/commit/7efcfb287dc1382893853ba4d4f74d03e0934bc5))

## [1.8.2](https://github.com/chatscope/chat-ui-kit-react/compare/v1.8.1...v1.8.2) (2021-10-11)


### Bug Fixes

* [#25](https://github.com/chatscope/chat-ui-kit-react/issues/25) official support for react 17 ([771eacb](https://github.com/chatscope/chat-ui-kit-react/commit/771eacb2fce597ac8ec7af6fd5a7b1a7820076f6))

## [1.8.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.8.0...v1.8.1) (2021-06-03)


### Bug Fixes

* **as:** custom component aliased with string is not displayed in production build ([cbf8a04](https://github.com/chatscope/chat-ui-kit-react/commit/cbf8a044c1789d4ffabc29a1fce8178585e7954e)), closes [#43](https://github.com/chatscope/chat-ui-kit-react/issues/43)

# [1.8.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.7.2...v1.8.0) (2021-05-31)


### Features

* **message-input:** prop to messageinput that prevents send on return ([98fc849](https://github.com/chatscope/chat-ui-kit-react/commit/98fc8498b10817d80b744946e0d0c4b27915e683))

## [1.7.2](https://github.com/chatscope/chat-ui-kit-react/compare/v1.7.1...v1.7.2) (2021-05-16)

## [1.7.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.7.0...v1.7.1) (2021-05-16)

# [1.7.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.6.1...v1.7.0) (2021-05-05)


### Features

* **message-input:** added arguments to onChange and onSend ([9f8b2cc](https://github.com/chatscope/chat-ui-kit-react/commit/9f8b2ccc4996a47a8784ce12842d307adcb93a95))

## [1.6.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.6.0...v1.6.1) (2021-04-19)


### Bug Fixes

* **message-list:** disableOnYReachWhenNoScroll property type ([caeeead](https://github.com/chatscope/chat-ui-kit-react/commit/caeeeada83f18ee2ddde74119078a42ce1e3626a))

# [1.6.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.5.2...v1.6.0) (2021-04-19)


### Features

* **message-list:** added disableOnYReachWhenNoScroll property ([3176f2e](https://github.com/chatscope/chat-ui-kit-react/commit/3176f2ec276e5cfdf157dd0a2aacd5f02eb008f7))

## [1.5.2](https://github.com/chatscope/chat-ui-kit-react/compare/v1.5.1...v1.5.2) (2021-04-12)


### Bug Fixes

* **messageinput, commenteditable:** fix bug that last korean character is entered twice ([2986e2b](https://github.com/chatscope/chat-ui-kit-react/commit/2986e2bb5375eafbd5a7f96e2c5341eaedeca248))

## [1.5.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.5.0...v1.5.1) (2021-04-03)


### Bug Fixes

* **message list:** cannot read property 'clientHeight' of null ([705ede2](https://github.com/chatscope/chat-ui-kit-react/commit/705ede25c395ed3e5bc236463af7945d2394d7d5))

# [1.5.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.4.0...v1.5.0) (2021-03-24)


### Features

* **message list:** added autoScrollToBottomOnMount property ([6ba92a8](https://github.com/chatscope/chat-ui-kit-react/commit/6ba92a85db8c15d56ac2a51c149d87886ab78beb))

# [1.4.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.3.0...v1.4.0) (2021-03-21)


### Features

* **message-list:** loading more loader at the bottom ([e540cbc](https://github.com/chatscope/chat-ui-kit-react/commit/e540cbc9c6db25657207669fe8cd89b8036da064))

# [1.3.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.2.3...v1.3.0) (2021-02-14)


### Features

* **conversation-list:** loading more in conversation list ([e106ccb](https://github.com/chatscope/chat-ui-kit-react/commit/e106ccbef7727317ef02017a26c860784aa40cde))

## [1.2.3](https://github.com/chatscope/chat-ui-kit-react/compare/v1.2.2...v1.2.3) (2021-02-06)


### Bug Fixes

* **message-list:** scroll handling for grouped messages ([2c8c9be](https://github.com/chatscope/chat-ui-kit-react/commit/2c8c9becfa9b04c75b70ca0e967632fe798f0247))

## [1.2.2](https://github.com/chatscope/chat-ui-kit-react/compare/v1.2.1...v1.2.2) (2021-01-24)


### Bug Fixes

* **utils:** handling as attribute for forwarded ref ([73b95ab](https://github.com/chatscope/chat-ui-kit-react/commit/73b95ab7db74d5488e69507553b27916fda814fc))
* **utils:** is attribute changed to as ([8eca5d4](https://github.com/chatscope/chat-ui-kit-react/commit/8eca5d4b58bdfea689fcc15bb5ea81101fca7f88))

## [1.2.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.2.0...v1.2.1) (2021-01-17)


### Bug Fixes

* **messagelist:** resizeobserver has been disabled in browsers that do not support it ([a75859a](https://github.com/chatscope/chat-ui-kit-react/commit/a75859a5e0be9f8da3d8bd59692e027f993b26b4))

# [1.2.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.1.0...v1.2.0) (2021-01-04)


### Features

* **#6:** api method for scrolling to bottom in message input ([3d0997a](https://github.com/chatscope/chat-ui-kit-react/commit/3d0997ac737d7943f638a3e9b396107cee37423e)), closes [#6](https://github.com/chatscope/chat-ui-kit-react/issues/6)

# [1.1.0](https://github.com/chatscope/chat-ui-kit-react/compare/v1.0.3...v1.1.0) (2020-12-20)


### Features

* added new message content types ([32439f7](https://github.com/chatscope/chat-ui-kit-react/commit/32439f703361ac951522f8892a01982b8e16ccf8))

## [1.0.3](https://github.com/chatscope/chat-ui-kit-react/compare/v1.0.2...v1.0.3) (2020-11-10)


### Bug Fixes

* better scroll handling ([6f60d88](https://github.com/chatscope/chat-ui-kit-react/commit/6f60d8867513f017c999691a3c1d30e1b46c6748))

## [1.0.2](https://github.com/chatscope/chat-ui-kit-react/compare/v1.0.1...v1.0.2) (2020-09-23)


### Performance Improvements

* changed fa imports for better tree-shaking ([4807854](https://github.com/chatscope/chat-ui-kit-react/commit/4807854f782b2a16d8e60db6bce59848bed91c1d))

## [1.0.1](https://github.com/chatscope/chat-ui-kit-react/compare/v1.0.0...v1.0.1) (2020-09-22)

# 1.0.0 (2020-09-22)


### chore

* **release:** first release ([12e810a](https://github.com/chatscope/chat-ui-kit-react/commit/12e810a0b6562692ace9e6f300e78a88a3ef43a2))


### BREAKING CHANGES

* **release:** First stable release
