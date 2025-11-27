const config = require('./config.json');

const Discord = require('discord.js');//لمناداة مكتبة الديسكورد

const client = new Discord.Client();//للتعامل مع خصائص العميل (البوت)الموجود بمكتبة الديسكورد

const token1 = config.discord;

const { AutoPoster } = require('topgg-autoposter')

const token2 = config.topgg

const poster = AutoPoster(token2, client) // your discord.js or eris client


const prefix = 'ciph_';//البادئة التي تفعل أوامر البوت، مبدئيا اخترت حرفا واحدا للتسهيل

const fs = require('fs');//للتعامل مع الملفات خارج هذا الملف

client.commands = new Discord.Collection();//لتخزين الأوامر بالبوت

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));/*لتحديد نوع
الملفات المطلوبة بالمجلد الذي يحوي على الأوامر*/
for(const file of commandFiles){//لوب لإيجاد الملفات التي تحوي على الأوامر
    const command = require(`./commands/${file}`);//لمناداة ملف الأمر  
    client.commands.set(command.name, command);//لتخزين ملف الأمر بالبوت
}

client.once('ready', () => {//للتأكد من أن البوت متصل
    poster.on('posted', (stats) => { // ran when succesfully posted
        console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
    })
    console.log('Encryption Bot is online!');//أمر طباعة لموجه الأوامر في حال اتصال البوت
    console.log(client.guilds.cache.size);
    client.user.setActivity('ciph_help', { type: 'PLAYING' });
});

try{
    client.on('message', message =>{//لتفعيل الأوامر
        switch(message.content){
            case '<@774726756258283600>':
            case '<@!774726756258283600>':
                message.channel.send("Hi! If you want to start using this bot, type 'ciph_help' for more information and read the instructions carefully.");
                break;
        }
        if(!message.content.startsWith(prefix) || message.author.bot) return;/*للتأكد من أن هذه الرسالة
            لم تصل عشوائيا من البوت*/ 
        const args = message.content.slice(prefix.length).split(' ');//المدخل المطلوب بعد الأمر (إن وجد)
        const command = args.shift().toLowerCase();/*هيكلة الرسالة التي بها أمر (البادئة متصلة بالأمر ثم
            المدخل إن وجد)*/
        if (command === 'help'){//أمر المساعدة لتعليمات استخدام البوت
            client.commands.get('help').execute(message, args);//تنفيذ الأمر المخزن
        } else if (command === 'encrypt'){//أمر آخر
            if(!args.length){//في حال أنه ليس هناك مدخل
                message.channel.send('Please include the plaintext!');//إرسال رسالة كأمر طباعة
            }else{
                client.commands.get('encrypt').execute(message, args);//تنفيذ الأمر المخزن
            }
        }else if (command === 'decrypt'){//أمر آخر
            if(!args.length){//في حال أنه ليس هناك مدخل
                message.channel.send('Please include the ciphertext!');//إرسال رسالة كأمر طباعة
            }else{
                client.commands.get('decrypt').execute(message, args);//تنفيذ الأمر المخزن
            }
        
        }else if(command === 'argstest'){//أمر إضافي لاختبار قابلية تخزين المدخلات
            message.channel.send(`Args = ${args}`);//إرسال رسالة كأمر طباعة
        }else if(command === 'char'){
            a = 'a';
            A = 'A';
            message.channel.send(a.charCodeAt(0));
            message.channel.send(A.charCodeAt(0));
        }
    });
}catch(err){//في حال حصول خطأ
    console.log(err);//طباعة الخطأ بموجه الأوامر
    message.channel.send('The following error has occured:\n' + err);//إرسال الخطأ كرسالة
};

client.login(token1);//تسجيل الدخول بالتوكن السري
//تنبيه: يمنع منعا باتا مشاركة التوكن مع أي شخص غير معني بتطوير البوت