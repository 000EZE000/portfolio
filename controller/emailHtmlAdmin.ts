import { status } from "@components/contact/models";
export default function htmlSendConfirmFeedBack(form: status) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <div style="
        background-image: linear-gradient(to bottom right, rgb(0, 191, 255), rgb(137, 69, 177));
        border-radius: 3rem 3rem 3rem 3rem;
        padding:5rem 5rem 5rem 5rem;
        text-align:center;
        ">
            <h1 style="
            display: inline-block;
            position: relative;
            text-align: center;
            color: black;
     
                    ">
               Has recibido un Mensaje de ${form.email}
            </h1>
            <h2 style="
            display: inline-block;
            position: relative;
            text-align: center;">
            ${form.body}
            </h2>
            <hr >
            <h1 style="
            display: inline-block;
            position: relative;
            text-align: center;
            color: black;
     
                    ">
              FeedBack
            </h1>
            ${form.statusFeedBack ?
            `</h2>
            <h2 style="
            display: block;
            position: relative;
            text-align: center;">
            ${form.feedBack}
            </h2>`:
            `</h2>
            <h2 style="
            display:    block;
            position: relative;
            text-align: center;">
            No hay feedBack
            </h2>`
        }
  
        </div>
    </body>
`

}