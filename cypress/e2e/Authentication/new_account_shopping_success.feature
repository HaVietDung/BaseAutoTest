Feature: new_account_shopping_success

    Scenario: new_account_shopping_success
    When create_account
    And add_to_cart_top_page
    And go_to_cart
    And go_to_shopping_in_cart_page
    And change_customer_info
    And close_gift
    And change_card