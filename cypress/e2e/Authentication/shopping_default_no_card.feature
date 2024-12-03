Feature: shopping_default

    Scenario: shopping_default
    When login
    And go_to_cart
    And go_to_shopping_in_cart_page
    And close_gift
    And change_card