[![headline](assets/repo_top.png)](https://outp0st.io)

# [Outp0st](https://outp0st.io)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](<https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)#summary>)
[![lfg](https://img.shields.io/badge/lfg-preparing%20for%20apply-brightgreen)](https://lfg.org/grants/)
[![Discord](https://img.shields.io/discord/961903521379282994)](https://discord.gg/CQjDUyBz)

<!-- [![Main CI Build](https://github.com/backstage/backstage/workflows/Main%20Master%20Build/badge.svg)](https://github.com/backstage/backstage/actions?query=workflow%3A%22Main+Master+Build%22) -->

<!-- ![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Codecov](https://img.shields.io/codecov/c/github/backstage/backstage)](https://codecov.io/gh/backstage/backstage)
[![](https://img.shields.io/npm/v/@backstage/core?label=Version)](https://github.com/backstage/backstage/releases) -->

## What is Outp0st?

Outp0st is an open-source UI tool to enable next-level team collaboration on dApp development over Terra blockchain.

It consists of two modules: Payload (UI) and Rover (CLI)

### Main features

- Based on [Terra Station](https://station.terra.money) - including security mechanisms
- UI generation based on contracts source repository
- Contract deployment, instantiation and execution in organized, predictable way
- Contract and messages documentation
- Shareable UI
- IPFS as a storage layer

## Use cases

_TODO: Use [openzeppeling docs](https://docs.openzeppelin.com/defender/admin) as refrence to describe use cases_

### Contract development - quick contracts testing

- Developer coded a contract, compiled it and wants to test on localterra
- Create Rover config – place it in folder with contract project​
- Use Rover to generate UI for contracts developed
- Use link provided by Rover to check how contracts looks in integrated environment (user - react app - localterra)
- Using Payload modules developer can adjust messages and documentation on each contract and message

### Team contract development - share work to your teammates

- Everything above
- Using Payload module, developer can save adjusted contracts, messages and documentation and recieve a new link
- He can now share this link with teammates to show and discuss his work

### Mainnet deployments with separation of concerns

- Stakeholder wants to create mainnet deployment on TGE without the risk of main wallet exposure to other team members
- He will ask developer to provide link to outpost with his specific contracts and deplyment steps​
- After recieving this link he will do it step by step, using his wallet extension to approve every step​

## Project roadmap

Detailed roadmap will be available soon(tm)

## Getting Started

Check out [the documentation](https://outp0st.io/docs/quickstart) on how to start using outp0st.

## Documentation

- [Examples](https://outp0st.io/docs/overview)
- [Software Catalog](https://outp0st.io/docs/examples)
- [Payload](https://outp0st.io/docs/payload/anatomy)
- [Rover](https://outp0st.io/docs/rover)

<!-- ## Community

- [Discord chatroom](https://discord.gg/MUpMjP2) - Get support or discuss the project
- [Contributing to Backstage](https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md) - Start here if you want to contribute
- [RFCs](https://github.com/backstage/backstage/labels/rfc) - Help shape the technical direction
- [FAQ](https://backstage.io/docs/FAQ) - Frequently Asked Questions
- [Code of Conduct](CODE_OF_CONDUCT.md) - This is how we roll
- [Adopters](ADOPTERS.md) - Companies already using Backstage
- [Blog](https://backstage.io/blog/) - Announcements and updates
- [Newsletter](https://mailchi.mp/spotify/backstage-community) - Subscribe to our email newsletter
- [Backstage Community Sessions](https://github.com/backstage/community) - Join monthly meetup and explore Backstage community -->

_Give us a star ⭐️ - If you are using outp0st or think it is an interesting project, we would love a star ❤️_

## License

Copyright 2022-now © The Outp0st Authors. All rights reserved.
Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0

<!-- ## Security

Please report sensitive security issues via Spotify's [bug-bounty program](https://hackerone.com/spotify) rather than GitHub.

For further details please see our complete [security release process](SECURITY.md). -->
