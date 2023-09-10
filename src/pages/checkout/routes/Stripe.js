const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51NopvrJPwgJ5vv9vlnAdKw6Q5l4BBS0WF51FHN2GJDuC3pL5LXswR6B66rtAGzGDcaFlI4xC3rLCxwcl2XZbKGy300fGLwvKao"
);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:5173/checkout-success`,
    cancel_url: `http://localhost:5173/`,
  });

  res.send({ url: session.url });
});

module.exports = router;
