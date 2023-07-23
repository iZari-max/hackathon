import { NextResponse, NextRequest } from "next/server";
import next from "next/types";
import Stripe from "stripe";
import { CartItem } from "@/interfaces";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key,{
    apiVersion: "2022-11-15",
});

export async function POST (request: NextRequest) {
    const data = await request.json();

    try {
    if(data.length > 0)
    {
    
        const session = await stripe.checkout.sessions.create({
            submit_type:"pay",
            mode: 'payment',
            payment_method_types:["card"],
            billing_address_collection:"auto",
            shipping_options:[
                {shipping_rate: "shr_1NWdosK8mlMpeLkIk1xueLOv"}
            ],
            

            line_items:data.map((item:any)=>

            {
            

                return {
                    price_data:{
                        currency: "pkr",
                        product_data:{
                            name:item.name,
                            images: [item.image]
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                   
                };
                

            }),
            
            
              
            success_url: `${request.headers.get("origin")}/success`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`,
          });
        
          return NextResponse.json({session})

    }

    else {
        return NextResponse.json({message:"No data found"});
    }
        
            
          
          
        } catch (err:any) {
            return NextResponse.json(err.message);
        }

}
 