require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)
exports.handler = async(event) => {
  try {
    const { amount } = JSON.parse(event.body);
    console.log('amount: ', amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ["card"],
    });
    console.log("here");
    return {
      statusCode: 200,
      body: JSON.stringify( { paymentIntent } ),
    }
  }
  catch (error) {
    console.log(error)

    return {
      statusCode: 400,
      body: JSON.stringify({error})
    }
  }
};
