Feature: demo feature

    @deo @smoke
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>

        Examples:
            | SearchItem | ExpectedURL           |
            | WDIO       | https://webdriver.io/ |