Feature: Ahorcado

  As a user, I can enter in Ahorcado page.

  Scenario: User Enter in the page
    Given I go to "http://localhost:5500/src/app.html"
    Then I see "Ahorcado"


  Scenario: User enter in the page and cant see the world to guess
    Given I go to "http://localhost:5500/src/app.html"
    Then I see the input changes "_"

  Scenario: User click into a rigth letter
    Given I go to "http://localhost:5500/src/app.html"
    When I click to the letter "m"
    Then I see the input changes "m"

  Scenario: User click into a wrong letter
    Given I go to "http://localhost:5500/src/app.html"
    When I click to the letter "k"
    Then I see the input not changes "k"
    Then I see attemps to "5"

  Scenario: User lost the game
    Given I go to "http://localhost:5500/src/app.html"
    When I click to the letter "k"
    When I click to the letter "v"
    When I click to the letter "z"
    When I click to the letter "o"
    When I click to the letter "q"
    When I click to the letter "h"
    Then I see the input changes "_______"
    Then I see attemps to "0"


 Scenario: User win the game with perfect score
    Given I go to "http://localhost:5500/src/app.html"
    When I click to the letter "m"
    Then I see the input changes "m"
    When I click to the letter "a"
    Then I see the input changes "a"
    When I click to the letter "n"
    Then I see the input changes "n"
    When I click to the letter "t"
    Then I see the input changes "t"
    When I click to the letter "e"
    Then I see the input changes "e"
    When I click to the letter "c"
    Then I see the input changes "c"
    Then I see attemps to "6"


  Scenario: User try a word to guess and failed
    Given I go to "http://localhost:5500/src/app.html"
    When I enter a "word"
    Then I see attemps to "0"