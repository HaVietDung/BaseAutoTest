Feature: Shoping_without_login

    Scenario: Shoping_without_login
    When without_login
    And product_detail_page
    And add_cart_detail
    And go_to_cart
    And go_to_shopping_in_cart_page