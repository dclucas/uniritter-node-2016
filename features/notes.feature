Feature: orders
    As an API client
    I want to manage my NOTES
    
Scenario: posting notes
    Given a valid note payload
    When I POST it against the /notes endpoint
    Then I receive a 201 status code
    And a payload containing the newly created resource