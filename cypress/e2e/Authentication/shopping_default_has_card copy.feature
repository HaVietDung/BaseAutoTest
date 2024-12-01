Feature: shopping_default

    Scenario: shopping_default
    When login
    And add_to_cart_top_page
    And go_to_cart
    And go_to_shopping_in_cart_page
    And close_gift
    And payment_in_shopping