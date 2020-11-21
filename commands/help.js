module.exports = {//رأس إنشاء ملف موديول
    name: 'help',//اسم الأمر
    description: "A guide for using the bot.",//وصف الأمر
    execute(message, args){//دالة التنفيذ للأمر، مع الرسالة والمدخل كمدخلات للدالة
        info = "This bot encrypts your messages in an efficient way!";
        warn = "*WARNING!* It's highly recomended to write the commands on a private room or through DM of the bot, also, you're responsible for remebering your keys after encryption.";
        lis = "List of commands (using 'ciph' as a prefix):";
        encrypt = "encrypt: Encrypting the input text and sending the cipher text through DM (requires keys, 10 characters max).";
        decrypt = "decrypt: Decrypting the input cipher text and sending the cipher text through DM (requires keys, 10 characters max).";
        message.channel.send(info+ "\n\n" + warn +"\n\n"+lis+"\n"+encrypt+"\n"+decrypt);//إرسال رسالة كأمر طباعة
    }
}