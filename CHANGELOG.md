# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.1.0] - 2021-06-14
### Changed
- Updated New Relic JS snippet to [v1209](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1209/).

## [4.0.0] - 2021-04-16
### Changed
- **BREAKING CHANGE**: Updates the option license to licenseKey, in order to be
consistent with the other options, which already match the name in the New
Relic JS snippet.

## [3.0.0] - 2020-12-23
### Changed
- Updated New Relic JS snippet to [v1184](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1184/).
- **BREAKING CHANGE**: The latest New Relic scripts require the following
additional data: accountID, agentID and trustKey. See the README.md for tips
gathering this data from the snippet in the New Relic UI.

## [2.0.0] - 2020-04-22
### Changed
- **BREAKING CHANGE**: Plugin now requires html-webpack-plugin v4.0.0+.

## [1.1.0] - 2019-03-15
### Changed
- Updated New Relic JS snippet to [v1118](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1118/).

## [1.0.1] - 2018-08-13
### Fixed
- Fixed docs

## [1.0.0] - 2018-08-13
### Added
- Initial plugin based on New Relic JS snippet to [v1071](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1071/).
