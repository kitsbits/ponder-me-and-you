const express = require("express");
const checkout = express.Router();
const axios = require("axios");

const test = {
    "idempotency_key": "somethinguniasd;lkfjasdlkjf",
    "order": {
        "reference_id": "reference_id",
        "line_items": [
            {
                "name": "Printed T Shirt",
                "quantity": "2",
                "base_price_money": {
                    "amount": 1500,
                    "currency": "USD"
                },
                "discounts": [
                    {
                        "name": "7% off previous season item",
                        "percentage": "7"
                    }, {
                        "name": "$3 off Customer Discount",
                        "amount_money": {
                            "amount": 300,
                            "currency": "USD"
                        }
                    }
                ]
            }, {
                "name": "Slim Jeans",
                "quantity": "1",
                "base_price_money": {
                    "amount": 2500,
                    "currency": "USD"
                }
            }, {
                "name": "Woven Sweater",
                "quantity": "3",
                "base_price_money": {
                    "amount": 3500,
                    "currency": "USD"
                },
                "discounts": [
                    {
                        "name": "$11 off Customer Discount",
                        "amount_money": {
                            "amount": 1100,
                            "currency": "USD"
                        }
                    }
                ],
                "taxes": [
                    {
                        "name": "Fair Trade Tax",
                        "percentage": "5"
                    }
                ]
            }
        ],
        "discounts": [
            {
                "name": "Father's day 12% OFF",
                "percentage": "12"
            }, {
                "name": "Global Sales $55 OFF",
                "amount_money": {
                    "amount": 5500,
                    "currency": "USD"
                }
            }
        ],
        "taxes": [
            {
                "name": "Sales Tax",
                "percentage": "8.5"
            }
        ]
    },
    "ask_for_shipping_address": true,
    "merchant_support_email": "merchant+support@website.com",
    "pre_populate_buyer_email": "example@email.com",
    "pre_populate_shipping_address": {
        "address_line_1": "1455 Market St.",
        "address_line_2": "Suite 600",
        "locality": "San Francisco",
        "administrative_district_level_1": "CA",
        "postal_code": "94103",
        "country": "US",
        "first_name": "Jane",
        "last_name": "Doe"
    },
    "redirect_url": "http://localhost:3000/cart"
}

checkout.get("/", (req, res) => {
    const url = "https://connect.squareup.com/v2/locations/CBASEBdXPQvFMUS4QIiiBA7Vjk4gAQ/checkouts";
    axios({
        method: 'post',
        url: url,
        data: test,
        headers: {
            Authorization: "Bearer sandbox-sq0atb--O4lwx-0bHzw802c4UE9jA"
        }
    })
    .then(response => {
        // response.data.checkout.checkout_page_url
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.redirect(response.data.checkout.checkout_page_url);
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = checkout;
