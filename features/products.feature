Feature: products
    As an API client
    I want to manage my PRODUCTS
    
Scenario: posting products
    Given a valid product payload
    When I POST it against the /products endpoint
    Then I receive a 201 status code
    And a payload containing the newly created id

Scenario Outline: invalid product
  Given an invalid product that <condition>
  When I POST it against the /products endpoint
  Then I receive a 400 status code
  And a message saying that <notification>
Examples:
  |         condition                   |                notification                            |
  | is missing the name                 | item name is mandatory                                 |
  | has a negative price                | product price must be a equal or greater than zero     |