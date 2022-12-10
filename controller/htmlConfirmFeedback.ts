import { status } from "@components/contact/models";
export default function htmlSendConfirmFeedBack() {
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
                Gracias por contactarme y por tu Feedback
            </h1>
            <h1 style="
            display: inline-block;
            position: relative;
            text-align: center;
       
                    ">
           ❤️
            </h1>
            <hr >
    
            <img style="
            display: block;
            position: relative;
            padding:0.5rem;
            margin: auto;
                    " width="100" src="https://cdn-icons-png.flaticon.com/512/25/25244.png" alt="ok">
    
            <h1 style="
             display: inline-block;
                padding:2rem;
                color: black;
                text-align: center;
                border-top: 2px solid wheat;
                ">
                En breve lo revisare 😌
            </h1>
    
            <footer style="margin: 1rem 1rem 1rem 1rem;">
                <a style="margin: 1rem 1rem 1rem 1rem;" href="https://www.linkedin.com/in/ezequiel-sosa-475150248/"
                    target="_blank">
                    <img width="50" src="https://cdn-icons-png.flaticon.com/512/1051/1051333.png" alt="ok">
                </a>
                <a href="https://github.com/000EZE000" target="_blank">
                    <img width="50" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="ok">
                </a>
            </footer>
        </div>
    </body>
`

}