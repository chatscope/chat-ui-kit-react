# Strange things

**perfect-scrollbar.ems.js**  
Builded version of https://github.com/mdbootstrap/perfect-scrollbar with two fixes apllied manually:

- Issue: https://github.com/mdbootstrap/perfect-scrollbar/issues/947  
  Fix: https://github.com/mdbootstrap/perfect-scrollbar/pull/946/commits/8f9db2986da2d5fa3fa402b169f1c9b1ffe53369

- Issue: https://github.com/mdbootstrap/perfect-scrollbar/issues/920#issuecomment-722570659  
  Fix: https://github.com/mdbootstrap/perfect-scrollbar/commit/daeeddf5972c44a960f1d244a4b9719cb7c3d0b7

- Issue and fix: https://github.com/mdbootstrap/perfect-scrollbar/issues/975

- Issue: https://github.com/mdbootstrap/perfect-scrollbar/issues/975
  Fix: fixed by adding { passive: false } Yes! false not true! to some event handlers. Also added css property touch-action: none to MessageList scrollbar container.

Modified code is based on v1.5.0

**ReactPerfectScrollbar.jsx**  
Based on https://github.com/goldenyz/react-perfect-scrollbar/ but modified for using directly local PerfectScrollbar version.

Modified code is based on v1.5.8

# Why

These hacks were made because the necessary Perfect Scrollbar fixes haven't been released for a very long time.

# License

Both libraries are licensed under the MIT license.
