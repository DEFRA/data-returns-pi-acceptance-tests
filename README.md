# Data returns PI acceptance tests

The Data Returns (PI) service will be a new [digital service](https://www.gov.uk/service-manual/digital-by-default) for submitting environmental monitoring data to the [Environment Agency](https://www.gov.uk/government/organisations/environment-agency).  It is being developed in a phased approach, and the first type of data you will be able to submit is the landfill emissions monitoring data that is required by many environmental permits.

The first Phase is designed to allow Permit Holders to submit there annual PI returns using an online service
## About this project

This project contains the acceptance tests for the Data Returns PI service. We use [Cucumber](https://cucumber.io/) as the means to both document and test the service, and this project contains the current features, step definitions and example CSV files.

## Pre-requisites
* [Node](https://nodejs.org/en/)

## Installation

First clone the project from GitHub

```bash
git clone https://github.com/EnvironmentAgency/data-returns-acceptance-tests.git
```

To install project dependencies, open a console inside the root folder of git repository and run:

```bash
npm install

```
## Execution

###Standalone
Open a terminal and ensure you are at the root of the project. Then simply run

```npm test
```

####Browserstack
To run on browserstack additional configuration files are required:

**/browserstacklocal.json**

Configuration settings for the BrowserStackLocal binary.  This agent allows browserstack.com to route traffic via the local machine and
requires settings as per the example below. "key" is the only required argument but "forcelocal" is likely always needed to allow traffic to
route via the local host.  For a full guide to the different options see  the [BrowserStackLocal Modifiers Guide](https://www.browserstack.com/local-testing#modifiers)
and the [browserstack-local NPM package](https://www.npmjs.com/package/browserstack-local)

```json
{
  "key": "BROWSERSTACK_ACCESS_KEY",
  "force": "true",
  "forcelocal": "true",
  "only": "nonsslserver.domain,80,0,sslserver.domain:443,1",
  "onlyAutomate": true,
  "forceproxy": "true",
  "proxyHost": "proxyserver.domain",
  "proxyPort": "3128",
  "proxyUser": "username",
  "proxyPass": "password"
}
```

## Contributing to this project

If you have an idea you'd like to contribute please log an issue.

All contributions should be submitted via a pull request.

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
