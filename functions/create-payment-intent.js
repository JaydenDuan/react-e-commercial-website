require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)
exports.handler = async function(event, context){
    if(event.body){
        const {cart, shipping_fee, total_amount} = JSON.parse(event.body)
        const paymentIntent = await stripe.paymentIntents.create({
            amount:shipping_fee + total_amount,
            currency:'usd'
        })
        if(paymentIntent){
            return {
                statusCode:200,
                body: JSON.stringify({clientSecret: paymentIntent.client_secret}),
                
            }
        }else{
            return {
                statusCode:500,
                body: '....',
                
            }
        }
       
    }else{
        return {
            statusCode:200,
            body: '...'
        }
    }
    
   
}