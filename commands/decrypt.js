module.exports = {
    name: 'decrypt',
    description: "A guide for using the bot.",
    execute(message, args){
        input = String(args);
        arr = new Array();
        ar1 = [7, 6, 9, 5, 3, 8, 2, 0, 4, 1];
        ar2 = [8, 9, 5, 7, 2, 3, 0, 4, 6, 1];
        ar3 = [2, 0, 1, 9, 5, 7, 8, 3, 6, 4];        
        ar4 = [8, 4, 2, 3, 6, 7, 0, 5, 1, 9];
        ar5 = [9, 7, 5, 4, 2, 3, 0, 1, 6, 8];
        ar6 = [0, 2, 6, 7, 5, 1, 8, 4, 9, 3];
        ar7 = [8, 0, 9, 3, 6, 1, 5, 2, 7, 4];
        ar8 = [5, 9, 8, 4, 2, 3, 7, 1, 0, 6];
        ar9 = [8, 0, 1, 3, 9, 2, 5, 6, 4, 7];
        ar10 = [8, 3, 0, 5, 4, 2, 6, 9, 7, 1];
        temp = new Array();
        plain = new Array();

        for(i = 0; i < input.length; i++){
            arr[i] = input.charCodeAt(i)-97;
         
        }
        
        if(input.length != 0){
            message.channel.send('Please enter a number from 1 to 10').then(
            async (msg) => {
                const m = await msg.channel.awaitMessages(
                    (mes) => mes.channel.id == message.channel.id,
                    { max: 1, time: 50000, errors: ['time'] }
                ).catch(err => console.log(err));
                if(`${m.first()}` == '1'){
                    temp = ar1;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '2'){
                    temp = ar2;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                                
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '3'){
                    temp = ar3;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                               
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '4'){
                    temp = ar4;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                               
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '5'){
                    temp = ar5;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                            
                            
                               message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '6'){
                    temp = ar6;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                        
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '7'){
                    temp = ar7;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                         
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '8'){
                    temp = ar8;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                                
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '9'){
                    temp = ar9;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                               
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else if(`${m.first()}` == '10'){
                    temp = ar10;
                    message.channel.send('Please choose one of those operators: + or -').then(
                        async (msg) => {
                            const m = await msg.channel.awaitMessages(
                                (mes) => mes.channel.id == message.channel.id,
                                { max: 1, time: 50000, errors: ['time'] }
                            ).catch(err => console.log(err));
                            if(`${m.first()}` == '-'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] = (arr[i] + temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    if(plain[i] >= 0 && plain[i] <= 25){
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    }
                                }
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else if(`${m.first()}` == '+'){
                                for(i = 0; i < arr.length; i++){
                                    plain[i] =(arr[i] - temp[i]);
                                }
                                for(i = 0; i < arr.length; i++){
                                    
                                        plain[i] = String.fromCharCode(plain[i] + 97);
                                    
                                }
                                
                                message.author.send("Here's the result plaintext according to the keys you've entered ready for copy:");
                                message.author.send(plain.join(''));
                            }else{
                                message.channel.send("Please enter an operator!");
                            }
                        }
                    );
                }else{
                    message.channel.send("Please try again and enter a number from 1 to 10!");
                }
            });
        }else{
            message.channel.send("Please enter the ciphertext!");
        }
    }
}